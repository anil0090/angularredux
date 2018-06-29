import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from '../person/person.component';
import { routing } from './app.routes';
import { PersondetailComponent } from 'src/persondetail/persondetail.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppStore } from 'src/app/models/store';
import { rootReducer } from 'src/app/reducer';

@NgModule({
  declarations: [
    AppComponent, PersonComponent, PersondetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(ngRedux:NgRedux<IAppStore>,devTools:DevToolsExtension){
    ngRedux.configureStore(rootReducer,{counter:0},[], [ devTools.enhancer() ]);
    
}

 }
