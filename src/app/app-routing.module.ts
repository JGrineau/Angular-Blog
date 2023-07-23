import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AtricleListComponent } from './atricle-list/atricle-list.component';

const routes: Routes = [
  { path: 'articles', component: AtricleListComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: AtricleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
