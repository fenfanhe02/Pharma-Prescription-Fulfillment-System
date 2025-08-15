import { ElNotification } from 'element-plus';

const showRequestError = (message: string) => {
  ElNotification({
    title: 'Error',
    message,
  })
}

const reloadPage = () => {
  window.location.reload();
}

const refreshPagePopup = (title: string, content: string) => {
}

const createRandomSkeletonPara = (rows = 10) => {
  return {
    rows: rows,
    width: Array.from({ length: rows }).fill(null).map(() => {
      const random = Math.random();
      if (random > 0.6) {
        return '100%';
      } else if (random > 0.3) {
        return '60%'
      }
      return `${random * 100}%`
    }),
  }
}

const getCookie = (name: string) => {
  const cookies = decodeURIComponent(document.cookie).split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    while (cookie.charAt(0) === '') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring((name + '=').length, cookie.length);
    }
  }
  return '';
}

export {
  showRequestError,
  reloadPage,
  refreshPagePopup,
  createRandomSkeletonPara,
}
