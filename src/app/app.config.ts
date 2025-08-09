import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),        // Optional
    provideFirestore(() => getFirestore()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};


