import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {
    path:'home', component:HomeComponent,
    children:[
      {path:'',loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path: 'todo', loadChildren:()=> import('./todo/todo.module').then(m=>m.TodoModule)}
    ]
  }
  // {path:'home', loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
