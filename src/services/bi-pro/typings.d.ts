declare namespace API {
  type Response = {
    code?: number;
    data?: any;
    msg?: string;
  };

  type User = {
    /** 创建时间 */
    createTime?: string;
    /** 主键ID */
    id?: number;
    /** 更新时间 */
    updatedTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };
}
