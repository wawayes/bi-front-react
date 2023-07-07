// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Current GET /current */
export async function getCurrent(options?: { [key: string]: any }) {
  return request<any>('/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** User Login POST /login */
export async function postLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<any>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** RefreshToken GET /refresh_token */
export async function getRefreshToken(options?: { [key: string]: any }) {
  return request<any>('/refresh_token', {
    method: 'GET',
    ...(options || {}),
  });
}

/** User Register POST /register */
export async function postRegister(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<any>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
