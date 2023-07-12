// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** ListUserTable POST /table/list */
export async function postTableList(body: API.Page, options?: { [key: string]: any }) {
  return request<any>('/table/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
