import {InjectionToken} from '@angular/core';

export const LOGGER_MESSAGE = new InjectionToken('logger message');

export interface IConfig {
  production: boolean;
}
