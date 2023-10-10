import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'task', component: TasksComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/task', pathMatch: 'full'},
  { path: '**', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
