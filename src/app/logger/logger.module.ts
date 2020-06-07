import { ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpLoggerService} from './logger.service';
import {IConfig, LOGGER_MESSAGE} from './token';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggerService
    }
  ]
})
export class LoggerModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return  {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_MESSAGE,
          useValue: config
        }
      ]
    };
  }
}

