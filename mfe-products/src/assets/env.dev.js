/* eslint-disable prettier/prettier */
export default {
  production: false,
  micro_frontends: {
    mfe_core: "http://localhost:4000/remoteEntry.js",
  },
  base_url: "__broker_host__",
  feature_flag_a: "VALOR::feature flag A",
  feature_flag_b: "VALOR::feature flag B",
  feature_flag_c: "VALOR::feature flag C",
};
