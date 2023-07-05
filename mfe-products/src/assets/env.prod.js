/* eslint-disable prettier/prettier */
export default {
  production: true,
  micro_frontends: {
    mfe_core: "http://localhost:4000/remoteEntry.js",
  },
  base_url: "__broker_host__",
  feature_flag_a: "__feature_flag_a__",
  feature_flag_b: "__feature_flag_b__",
  feature_flag_c: "__feature_flag_c__",
};
