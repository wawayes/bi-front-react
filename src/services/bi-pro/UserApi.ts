// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** User Login POST /login */
export async function postLogin(body: API.UserLoginRequest, options?: { [key: string]: any }) {
  return request<any>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** User Register POST /register */
export async function postRegister(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
