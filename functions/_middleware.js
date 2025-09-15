export const onRequest = async (context) => {
  const { request, next } = context;

  // 先执行后续函数，拿到响应
  const response = await next();

  // 添加 CORS 头
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
};
