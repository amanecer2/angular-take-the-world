import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1.component';
import { UserComponent } from './user/user.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Part1Component,
    UserComponent
  ],
  exports: [
    Part1Component
  ],

})
export class Part1Module { }
