export const BootstrapModule = () =>
  import('src/app/modules/bootstrap/bootstrap-module').then(
    (m) => m.BootstrapModule
  );
