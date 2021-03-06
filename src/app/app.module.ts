import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module'

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent]
})
export class AppModule { }
