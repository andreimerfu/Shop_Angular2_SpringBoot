import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddNewBookComponent} from "./components/add-new-book/add-new-book.component";

const appRoutes: Routes = [
	{
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
  {
    path: 'addNewBook',
    component: AddNewBookComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
