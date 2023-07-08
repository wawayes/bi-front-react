export function getCookieValue(cookieName: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === cookieName) {
      return cookie[1];
    }
  }

  return null;
}
