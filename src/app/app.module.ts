import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { AppComponent } from './components/index/app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxPageComponent } from './components/box-page/box-page.component';
import { NgxMoveableModule } from 'ngx-moveable';




@NgModule({
	declarations: [
		AppComponent,
		BoxPageComponent,
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		NgxMoveableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
