
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { postReducer } from './components/detail/store/reducers/post-reducer';
import { DetailPageComponent } from './components/detail/detail-component';
import { FormPageComponent } from './components/form/form-component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({post: postReducer})
  ],
  declarations: [
   DetailPageComponent,
   AppComponent,
   FormPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
