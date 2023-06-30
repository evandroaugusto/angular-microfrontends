const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'), []);

module.exports = {
  output: {
    uniqueName: "mfeUsers",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "mfeUsers",
        filename: "remoteEntry.js",
        exposes: {
            './public-api': './/public-api.ts'
            // './feature/users': './/src/app/modules/users/users.module.ts',
            // './feature/users/config': './/src/app/modules/users/config.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfeHost": "http://localhost:4100/remoteEntry.js",
        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@sweetalert2/ngx-sweetalert2": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ui-components": { singleton: true },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
