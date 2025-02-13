import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import Noir from './app/mypreset';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
        providePrimeNG({
      theme: {
        preset: Noir,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                        name: 'primeng',
                        order: 'tailwind-base, primeng, tailwind-utilities'
                    }
        }
      }
    }) // Proporciona el enrutamiento si lo usas
  ],
}).catch((err) => console.error(err));
