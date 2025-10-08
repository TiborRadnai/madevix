import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/core/app.config';
import { App } from './app/core/app';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiFileTranslateLoader } from './app/core/multi-file-loader'; // ⬅️ új import

export function MultiLoaderFactory(http: HttpClient) {
  return new MultiFileTranslateLoader(http);
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'hu',
        loader: {
          provide: TranslateLoader,
          useFactory: MultiLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    ...appConfig.providers
  ]
})
.catch((err) => console.error(err));
