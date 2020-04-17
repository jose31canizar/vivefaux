import axios from "axios";

const SERVER_URL = "http://localhost:8000";
const DEBUG = process.env.ENV_TYPE === "development";

axios.interceptors.request.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) {
      console.info("✉️ ", config);
    }
    return config;
  },
  (error) => {
    if (DEBUG) {
      console.error("✉️ ", error);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

const request = async ({
  path,
  method,
  queryData,
  cancelToken,
  timeout,
  responseType,
}) => {
  var res = {};
  try {
    const res = await axios({
      method,
      url: `${SERVER_URL}${path}`,
      data: queryData,
      timeout: timeout || 5000,
      ...(responseType ? { responseType } : {}),
      cancelToken,
    });
    if (!res.data) {
      return res;
    }
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      throw error;
    } else {
      console.log(error);
      return { error };
    }
  }
};

const createPaymentIntent = async () =>
  await request({
    path: `/payment_intent`,
    method: "get",
  });

const downloadAlbum = async (clientSecret) =>
  await request({
    path: `/download_album?client_secret=${clientSecret}`,
    method: "post",
    timeout: 30000,
    responseType: "arraybuffer",
  });

export { downloadAlbum, createPaymentIntent };
