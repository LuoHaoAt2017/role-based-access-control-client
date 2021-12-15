interface Window {
  Env: string;
  config: AppConfig
}

interface AppConfig {
  redirect: string,
}

interface Response {
  success: boolean;
  errMesg?: string;
  data: any;
}