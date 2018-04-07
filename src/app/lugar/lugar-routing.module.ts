import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarNewComponent } from './lugar-new/lugar-new.component';
import { LugarUpdateComponent } from './lugar-update/lugar-update.component';

const routes: Routes = [
  {
    path: '',
    component: LugarListComponent
  },
  {
    path:'new',
    component:LugarNewComponent
  },
  {
    path:'update/:id',
    component:LugarUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugarRoutingModule { }
