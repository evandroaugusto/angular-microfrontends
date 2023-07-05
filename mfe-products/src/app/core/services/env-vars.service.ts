import ENV from '../../../assets/env.dev';

declare let __webpack_public_path__: any;

type ENV = typeof ENV;

export class EnvVars {
  private static env: ENV;
  private static init = false;

  private constructor(env: ENV) {
    EnvVars.env = env;
  }

  static get<T extends keyof ENV>(env: T): ENV[T] | undefined {
    if (!EnvVars.init) {
      throw new Error('Variáveis de ambientes não foram configuradas');
    }
    return EnvVars.env[env] || undefined;
  }

  static getBoolean<T extends keyof ENV>(env: T): boolean {
    if (!EnvVars.init) {
      throw new Error('Variáveis de ambientes não foram configuradas');
    }

    if (EnvVars.env[env] === 'false') return false;
    if (EnvVars.env[env] === 'true') return true;

    const value = Number(EnvVars.env[env]);

    if (isNaN(value)) {
      return Boolean(EnvVars.env[env]);
    }
    return Boolean(value);
  }

  static async setup(envFile: string) {
    const basePath = __webpack_public_path__;

    try {
      const env = await import(/* webpackIgnore: true */ basePath + envFile);

      EnvVars.env = env.default;
      EnvVars.init = true;
    } catch (e) {
      console.log('Erro ao tentar baixar as variáveis de ambiente');
    }

    return EnvVars.env;
  }
}
