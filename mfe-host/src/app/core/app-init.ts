import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { MfeModule } from './tokens/mfe-module-ref.token';
import mfeContexts from '../../assets/mf.manifest.json';

import { BootstrapModule } from 'mfeUsers/public-api';

export const initApp = async (modules: MfeModule[]) => {
  return async () => {
    try {
      const dashboard = await dashboardSetup();
      modules.push(...dashboard);
      
    } catch(e) {
      console.error('Erro ao inicializar configuração dos MFEs', e);
    }

    return true;
  } 
}

async function dashboardSetup() {
  const dashboard = [];

  for(const mfe of mfeContexts) {
      const module = await loadRemoteModule({
        type: 'module',
        exposedModule: mfe.exposedModule,
        remoteEntry: mfe.remoteEntry
      });

      // função de inicialização dos MFEs
      const { init, dashboardConfig } = module[mfe.ngModuleName];
      if(init) {
        init();
      }

      if(!dashboardConfig) {
        continue; 
      }

      // set dashboard routes
      dashboardConfig.routes = (dashboardConfig.routes || []).map( 
        (route:any) => {
          route.path = mfe.path + '/' + route.path;
          return route;
        }
      );
      
      dashboard.push(dashboardConfig);
  }  

  return dashboard;
}