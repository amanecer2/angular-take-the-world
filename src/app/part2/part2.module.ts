import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Part2Component} from './part2.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Part2Component
  ],
  exports: [
    Part2Component
  ],
})
export class Part2Module {
}
