import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';


const routes: Routes = [
  { path: 'login', component: FormLoginComponent },
  { path: 'area-logada', component: AreaLogadaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
