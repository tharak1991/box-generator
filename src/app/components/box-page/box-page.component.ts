import { Component, OnInit } from '@angular/core';
import { NgxMoveableComponent } from 'ngx-moveable';

@Component({
  selector: 'app-box-page',
  templateUrl: './box-page.component.html',
  styleUrls: ['./box-page.component.scss']
})
export class BoxPageComponent implements OnInit {

  frame = {
    translate: [0, 0],
  };

  constructor() { }

  ngOnInit() {
  }

  addNewBox = () => {

  }

  onDragStart({ set }) {
    set(this.frame.translate);
  }
  onDrag({ target, beforeTranslate }) {
    this.frame.translate = beforeTranslate;
    target.style.transform
      = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  }
  onDragEnd({ target, isDrag, clientX, clientY }) {
    console.log("onDragEnd", target, isDrag);
  }

}
