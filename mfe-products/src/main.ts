// main.ts
import { loadRemoteEntry } from '@angular-architects/module-federation';

import('./bootstrap')

// Promise.all([
//     loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:4000/remoteEntry.js'})
// ])
// .catch(err => console.error('Error loading remote entries', err))
// .then(() => import('./bootstrap'))
// .catch(err => console.error(err));