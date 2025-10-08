import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiFileTranslateLoader } from './multi-file-loader'; // vagy './core/multi-file-loader'

export function MultiLoaderFactory(http: HttpClient) {
  return new MultiFileTranslateLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'de',
        loader: {
          provide: TranslateLoader,
          useFactory: MultiLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
