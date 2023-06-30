import { InjectionToken } from "@angular/core";

declare let window:any;
window.__MFE_MODULES__ = [];

export type MfeModule = {
  name: string;
  description?:string;
  routes: Record<string, any>[];
}

export const MFE_MODULES_TOKEN = new InjectionToken<MfeModule[]>(
  'MfeModules', {
    providedIn: 'root',
    factory: () => window.__MFE_MODULES__
  }
);
