type IConfig = {
  canonicalBaseUrl: URL;
  analyticsEnable: boolean;
};

type ConfigFactory = () => IConfig;

export type { IConfig, ConfigFactory };
