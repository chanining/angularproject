import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, // home
    { path: 'contact', component: ContactComponent }, // contact
    { path: '**', component: HomeComponent }, // Page Default
];
