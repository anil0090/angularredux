import { Component } from '@angular/core';
import {NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { IAppStore } from 'src/app/models/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  counter:number;
   

 

  constructor(public ngRedux: NgRedux<IAppStore>){
    ngRedux.subscribe(() => {
      let state = ngRedux.getState();
      console.log(state);
  })
  }
  increment() {
    this.ngRedux.dispatch({type:'INCREMENT'});
    this.counter = this.ngRedux.getState().counter;
   
  }
  
  
 
}
