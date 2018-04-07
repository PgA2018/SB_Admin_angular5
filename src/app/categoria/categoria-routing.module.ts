import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { CategoriaNewComponent } from './categoria-new/categoria-new.component';

const routes: Routes = [
  {
    path:'',
    component:ListCategoriaComponent
  },
  {
    path:'new',
    component:CategoriaNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
