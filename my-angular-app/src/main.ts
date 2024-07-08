import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Provide your routes here if you have any
    importProvidersFrom(FormsModule) // Import FormsModule here
  ]
}).catch(err => console.error(err));
