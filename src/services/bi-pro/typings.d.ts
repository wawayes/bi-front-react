declare namespace API {
  type BiResp = {
    genChart?: string;
    genResult?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    goal?: string;
    key?: string;
    pageNum?: number;
    pageSize?: number;
    userId?: number;
  };

  type CurrentUser = {
    /** 主键ID */
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type LoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type Page = {
    pageNum?: number;
    pageSize?: number;
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

  type UserChart = {
    freeCount?: number;
    id?: number;
    token?: number;
    userAccount?: string;
    userAvatar?: string;
    userId?: number;
  };
}
