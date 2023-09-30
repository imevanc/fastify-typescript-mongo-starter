import Fastify from "fastify";
import cors from "@fastify/cors";
import { getAirbnbReviews } from "./routes/index.ts";
import { buildFastifyEnvPlugin, connectToDbPlugin } from "./plugins/index.ts";

const fastify = Fastify({
  logger: true,
});

fastify.register(buildFastifyEnvPlugin);
await fastify.register(cors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
fastify.register(connectToDbPlugin);
fastify.route(getAirbnbReviews);

await fastify.ready();

const start = async (): Promise<void> => {
  try {
    await fastify.listen({
      port: +fastify.config.HTTP_PORT,
      host: fastify.config.HTTP_HOST,
    });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
