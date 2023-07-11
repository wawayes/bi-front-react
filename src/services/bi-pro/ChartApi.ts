// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Generate a chart POST /chart/gen */
export async function postChartGen(
  body: {
    chartType?: string;
    goal?: string;
  },
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<any>('/chart/gen', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** Chart List POST /chart/list */
export async function postChartList(body: API.ChartQueryRequest, options?: { [key: string]: any }) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<any>('/chart/list', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
