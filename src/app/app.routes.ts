import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'micro1',
    loadComponent: () =>
      loadRemoteModule('micro1', './Component').then((m) => m.AppComponent),
  },
];
