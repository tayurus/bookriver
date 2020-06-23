import axios from "axios";
// export const baseURL = "https://api.bbookriver.ru/api/v1";
export const baseURL = "https://api.bbookriver.ru/api/v1";
// export const baseURLAlexandr = "https://api.alex6ndr.bbookriver.ru/api/v1";

const API = axios.create({
  baseURL,
  timeout: 3000,
  withCredentials: true,
  headers: { Accept: "application/json", "Content-type": "application/json" },
});

API.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

export { API };

export const endpoints: Record<string, any> = {
  user: {
    token: "/auth/login",
    register: "/auth/register",
    loginProvider: "/auth/login/",
    loginProviderCallback: "/auth/login/",
    connectProvider: "/users/me/socialAccount/",
    connectProviderCallback: "/users/me/socialAccount/",
    disconnectProvider: "/users/me/socialAccount/",
    me: "/users/me",
    deleteMe: "/users/me",
    logout: "/auth/logout",
    confirm: "/auth/confirm",
    forgot: "/auth/forgot",
    reset: "/auth/reset-password",
    update: "/users/",
    updateMe: "/users/me",
    updateMePassword: "/users/me/password",
    get: "/users/",
    uploadAvatar: "/users/me/avatar",
    deleteAvatar: "/users/me/avatar",
  },

  book: {
    create: "/books/book",
    edit: "/books/book",
    get: "/books/book/",
    rename: "/books/book/",
    delete: "/books/book/",
    changePublishStatus: "/books/book/",
    changeCompleteStatus: "/books/book/",
    editPrice: "/books/book/",
    getProperties: "/books/book/",
    updateProperties: "/books/book/",
    uploadCover: "/books/book/",
    deleteCover: "/books/book/",
    getLog: "/books/book/",
  },
  cycle: {
    create: "/books/cycle",
    getMy: "/books/cycles/me/with-books",
    delete: "/books/cycle/",
    getByAuthorId: "/books/cycles/",
  },
  chapter: {
    create: "/books/chapter/text",
    getByBookID: "/books/chapters/text/",
    changeIndex: "/books/chapter/text/",
    edit: "/books/chapter/text/",
    delete: "/books/chapter/text/",
  },
  genres: {
    get: "/books/genres",
  },
  comments: {
    add: "/comments/comment",
    get: "/comments/",
  },
};
