import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './service/post.service';
import {Part1Module} from './part1/part1.module';
import {Part2Module} from './part2/part2.module';
import {SharedModule} from './shared/shared.module';
import {PostStateService} from './service/post-state.service';
import {LoggerModule} from './logger';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    Part1Module,
    Part2Module,
    // new school
    LoggerModule.forRoot(environment)
  ],
  providers: [
    PostService,
    PostStateService,
   /*
    // old school
    { provide: LOGGER_MESSAGE, useValue: 'Hello world' },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggerService
    },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
