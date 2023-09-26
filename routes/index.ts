import * as airbnbReviewsController from "./../controllers/airbnbReviews.ts";
import { RouteOptions } from "fastify";

export const getAirbnbReviews: RouteOptions = {
  method: "GET",
  url: "/api/airbnbReviews",
  handler: airbnbReviewsController.getAirbnbReviews,
};
