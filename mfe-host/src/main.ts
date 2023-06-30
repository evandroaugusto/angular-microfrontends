// main.ts
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:4001/remoteEntry.js'}),
    loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:4002/remoteEntry.js'}),
    loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:4000/remoteEntry.js'})
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => {
  return import('./bootstrap')
})
.catch(err => console.error(err));