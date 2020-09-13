import { Component, OnInit } from '@angular/core';
import { NgxMoveableComponent } from 'ngx-moveable';

class Box {
  boxID: number;
  zindex: number;
  constructor(boxID: number, zindex: number) {
    this.boxID = boxID;
    this.zindex = -zindex;
  }

}

@Component({
  selector: 'app-box-page',
  templateUrl: './box-page.component.html',
  styleUrls: ['./box-page.component.scss']
})

export class BoxPageComponent implements OnInit {

  frame = {
    translate: [0, 0],
  };

  boxes: Box[] = [];
  box: Box;

  size: number = 1;
  selectedIndex: number;
  zindexvalue: number = -10;
  zindexMax: number = -10;

  constructor() { }

  ngOnInit() {
    this.box = new Box(this.size, this.zindexvalue);
    this.boxes.push(this.box);

    this.size = this.boxes.length;
    this.zindexMax = this.boxes[this.boxes.length - 1].zindex;
  }

  addNewBox = () => {

    if (this.boxes.length >= 1) {

      this.zindexMax = this.boxes[this.boxes.length - 1].zindex;
      this.size = this.boxes[this.boxes.length - 1].boxID + 1;

    } else {

      this.zindexMax = -10;
      this.size = 1;

    }

    this.zindexvalue = this.zindexMax + 10;
    this.box = new Box(this.size, this.zindexvalue);
    this.boxes.push(this.box);
  }

  removeBox = () => {
    this.boxes.splice(this.selectedIndex, 1);
  }

  move(event: any) {
    console.log(event.keyCode);
  }

  boxClick(box, index) {
    console.log(box);
    this.selectedIndex = index;
  }

  setRow(_index: number) {
    this.selectedIndex = _index;
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
