declare namespace API {
  type BiResp = {
    genChart?: string;
    genResult?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    goal?: string;
    pageNum?: number;
    pageSize?: number;
    userId?: string;
  };

  type CurrentUser = {
    /** 主键ID */
    id?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

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
}
