import { FastifyRequest, FastifyReply } from "fastify";
import { AirbnbReviews } from "./../models/airbnbReviews.ts";

export const getAirbnbReviews = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const airbnbReviews = await AirbnbReviews(request.server).find({});
    reply
      .header("Content-Type", "application/json;charset=utf-8")
      .send(airbnbReviews);
  } catch (err) {
    throw new Error(err);
  }
};
