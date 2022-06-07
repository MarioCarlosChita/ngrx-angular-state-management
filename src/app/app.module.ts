
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPageComponent } from './components/detail/detail-component';
import { FormPageComponent } from './components/form/form-component';
import { reducers } from './components/detail/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './components/detail/store/effects/post-effects';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostEffects])
  ],
  declarations: [
   DetailPageComponent,
   AppComponent,
   FormPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
