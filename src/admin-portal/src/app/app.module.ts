//v1.0

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MdButtonModule } from '@angular/material/button';
import { MdInputModule } from '@angular/material/input';
import { MdGridListModule } from '@angular/material/grid-list';
import { MdSliderModule } from '@angular/material/slider';
import { MdButtonToggleModule } from '@angular/material/button-toggle';
import { MdSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material/dialog';
import { MdToolbarModule } from '@angular/material/toolbar';

import 'hammerjs';

import { LoginService } from './services/login.service';
import { AddBookService } from "./services/add-book.service";
import { UploadImageService } from "./services/upload-image.service";
import { GetBookListService } from "./services/get-book-list.service";
import { GetBookService} from "./services/get-book.service";
import { EditBookService } from "./services/edit-book.service";
import { RemoveBookService } from "./services/remove-book.service";

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent , DialogResultExampleDialog} from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdSliderModule,
    MdButtonToggleModule,
    MdSlideToggleModule,
    MdDialogModule,
    MdToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
