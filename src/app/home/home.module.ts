import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DataService } from '../data-viewer/data.service';
import { DataViewComponent } from '../data-viewer/data-viewer.component';
import { ClassDataComponent } from '../class-data-component/class-data-component.component';
import { DictionaryComponent } from '../class-data-component/dictionary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    DynamicFormComponent,
    DataViewComponent,
    ClassDataComponent,
    DictionaryComponent,
  ],
  providers: [DataService],
})
export class HomePageModule {}
