declare namespace API {
  type LoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type RegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type Response = {
    code?: number;
    data?: any;
    msg?: string;
  };

  type CurrentUser = {
    id?: string;
    userAccount?: string;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
  }
}
