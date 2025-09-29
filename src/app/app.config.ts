import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
            theme: {
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }), provideClientHydration(withEventReplay())]
};


