// main.ts
import { loadRemoteEntry } from '@angular-architects/module-federation';
import { EnvVars } from './app/core/services/env-vars.service';
import { environment } from './environments/environment';

EnvVars.setup(`assets/env.${environment.name}.js`)
  .then((env) => {
    const remoteEntries = [
      loadRemoteEntry({
        type: 'module',
        remoteEntry: env.micro_frontends.mfe_core || '',
      }),
    ];

    Promise.all(remoteEntries)
      .catch((err) => console.error('Error loading remote entries', err))
      .then(() => {
        import('./bootstrap');
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
