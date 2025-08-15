import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { refreshPagePopup, showRequestError } from '@/utils/Utilities';
import { HttpStatus } from '@/enums/httpStatus';

let reqeustIndex = 0;
const pendingRequestMap = new Map<number, {request: InternalAxiosRequestConfig, abortController: AbortController}>();

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

instance.interceptors.response.use(
  response => {
    // 返回响应中的 data 字段
    return response.data;
  },
  error => {
    // 处理错误
    return Promise.reject(error);
  }
);

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config.signal) {
    const abortController = new AbortController();
    config.signal = abortController.signal;
    /**
     * set the _nousIndex__ is to add a uniq id for the sending request,
     * so in the response interceptor, we could remove the completed requests
     */
    // @ts-ignore
    config.__nousIndex__ = reqeustIndex;
    pendingRequestMap.set(reqeustIndex, {
      request: config,
      abortController
    })
    reqeustIndex++;
  }
  return config
})

export const cancelAllPendingRequests = () => {
  pendingRequestMap.forEach((val) => {
    const abortController = val.abortController;
    if (abortController && !abortController.signal.aborted) {
      abortController.abort();
    }
  })
  pendingRequestMap.clear();
  reqeustIndex = 0;
}

const handleRequestError = (error:any) => {
  console.error('error is', error)
  const {code, response = {}} = error;
  if (axios.isCancel(error)) {
    return;
  } else if (AxiosError.ERR_NETWORK === code) {
    showRequestError('Network issue happens, you may need to try later');
  } else {
    const statusCode = response.status;
    if (HttpStatus.UNAUTHORIZED === statusCode) {
      refreshPagePopup('Authentication expired', 'Please refresh page');
    } else if (HttpStatus.FORBIDDEN === statusCode) {
      showRequestError('Sorry you have no permission to operate on this resource');
    } else {
      /**
       * in some cases like validating, we would catch the backend error and directly show
       * them in the UI. Currently remove global error notification and you need to catch in your own case.
       * Later need to think a way to implement this.
       *
      */
      return Promise.reject(error?.response?.data?.message || 'Unkown error');
    }
  }
}

export const client = instance
