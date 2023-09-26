import { Document } from "mongoose";
import { FastifyRequest, FastifyReply } from "fastify";
import { AirbnbReviews } from "./../models/airbnbReviews.ts";

export const getAirbnbReviews = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<Document[]> => {
  try {
    const airbnbReviews = await AirbnbReviews(request.server).find({});
    return airbnbReviews;
  } catch (err) {
    throw new Error(err);
  }
};
