const axiosClient = axios.create({
  baseURL: "www.themealdb.com/api/json/v1/1/",

  headers: { "X-Custom-Header": "foobar" },
});

export default axiosClient;
