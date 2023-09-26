import fastifyPlugin from "fastify-plugin";
import mongoose from "mongoose";
import type { FastifyInstance, FastifyPluginCallback } from "fastify";

const connectToDb: FastifyPluginCallback = async (
  fastify: FastifyInstance,
  options: Record<string, any>,
  done: (err?: Error | undefined) => void,
) => {
  mongoose.connect(fastify.config.MONGO_URL, {
    dbName: fastify.config.MONGO_DB_NAME,
  });
};

export const connectToDbPlugin = fastifyPlugin(connectToDb);
