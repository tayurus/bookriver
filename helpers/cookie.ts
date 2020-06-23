/* eslint-disable */
// возвращает cookie с именем name, если есть, если нет, то undefined
export const getCookie = (name: string): any => {
  if (typeof document !== "undefined") {
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};

/* устанавливает куку с именем name, значением value и опциями options */
export const setCookie = (name: string, value: string, options: any = {}) => {
  if (typeof document !== "undefined") {
    options = options || {};

    let { expires } = options;

    if (typeof expires === "number" && expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires?.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = `${name}=${value}`;

    for (const propName in options) {
      updatedCookie += `; ${propName}`;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }

    document.cookie = updatedCookie;
  }
};
