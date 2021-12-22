interface Window {
  Env: string;
  config: AppConfig
}

interface AppConfig {
  redirect?: string,
  userInfo: UserInfo
}

declare namespace RBAC {
  interface UserInfo {
    userId: string;
    userName: string;
    roles?: string[];
  }
  
  interface RootState {
    userInfo: UserInfo
  }

  interface Response {
    successful: boolean;
    errMesg?: string;
    data: any;
  }
}

declare enum DeptType {
  Official = 1,
  Population = 2,
  Etiquette = 3,
  Defense = 4,
  Criminal = 5,
  Engineer = 6
}