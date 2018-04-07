import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { LugarRoutingModule } from './lugar-routing.module';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarNewComponent } from './lugar-new/lugar-new.component';
import { LugarUpdateComponent } from './lugar-update/lugar-update.component';
import { FormModule } from '../layout/form/form.module';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    LugarRoutingModule,
    HttpModule,    
    HttpClientModule,
    FormsModule
  ],
  declarations: [LugarListComponent, LugarNewComponent, LugarUpdateComponent],
})
export class LugarModule { }
