// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Current GET /user/current */
export async function getUserCurrent(options?: { [key: string]: any }) {
  return request<any>('/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** User Login POST /user/login */
export async function postUserLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<any>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Logout GET /user/logout */
export async function getUserLogout(options?: { [key: string]: any }) {
  return request<any>('/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** RefreshToken GET /user/refresh_token */
export async function getUserRefreshToken(options?: { [key: string]: any }) {
  return request<any>('/user/refresh_token', {
    method: 'GET',
    ...(options || {}),
  });
}

/** User Register POST /user/register */
export async function postUserRegister(
  body: API.RegisterRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
