import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/layout/main/about/about.component';
import { OperationsComponent } from './components/layout/main/operations/operations.component';
import { HomeComponent } from './components/layout/main/home/home.component';
import { CreateOperationComponent } from './components/layout/main/operations/create-operation/create-operation.component';

const routes: Routes = [
  { path: '', redirectTo: '/operations', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create-operation', component: CreateOperationComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
