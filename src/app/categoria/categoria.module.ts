import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { CategoriaNewComponent } from './categoria-new/categoria-new.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ListCategoriaComponent, CategoriaNewComponent]
})
export class CategoriaModule { }
