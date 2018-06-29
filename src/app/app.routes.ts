import { PersonComponent } from 'src/person/person.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersondetailComponent } from 'src/persondetail/persondetail.component';

const routes: Routes = [
    {path: 'person', component: PersonComponent},
    {path: '', component: PersondetailComponent}
];


    export const routing: ModuleWithProviders = RouterModule.forRoot(routes );