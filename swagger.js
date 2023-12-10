import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const output = "./swagger_output.json";
const endpoints = [
  "./src/routes/index.js",
  "./src/routes/albumRoutes.js",
  "./src/routes/authorRoutes.js",
  "./src/routes/authRoutes.js",
  "./src/routes/videoAlbumRoutes.js"
];
  
swagger(output, endpoints);

swagger(output, endpoints);
