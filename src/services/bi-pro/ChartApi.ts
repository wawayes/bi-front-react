// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Generate a chart POST /gen */
export async function postGen(
  body: {
    chartType?: string;
    goal?: string;
  },
  multipartFile?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (multipartFile) {
    formData.append('file', multipartFile);
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

  return request<any>('/gen', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
