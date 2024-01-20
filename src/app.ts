// app.ts
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 4000;

// Swagger配置
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
    },
  },
  apis: ["./src/**/*.ts"], // 指定包含API文档注释的文件
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 添加一个简单的路由示例
app.get("/api/greet", (req, res) => {
  /**
   * @swagger
   * /api/greet:
   *   get:
   *     description: Returns a greeting message
   *     responses:
   *       200:
   *         description: Greeting message
   */
  res.send("Hello, welcome to your API!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
