import fastify, { FastifyInstance } from "fastify";
import mongoose from "mongoose";

export const airbnbReviews = new mongoose.Schema({
  _id: String,
  listing_url: String,
  name: String,
  summary: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  minimum_nights: String,
  maximum_nights: String,
  cancellation_policy: String,
  last_scraped: Date,
  calendar_last_scraped: Date,
  first_review: Date,
  last_review: Date,
  accommodates: Number,
  bedrooms: Number,
  beds: Number,
});

export const AirbnbReviews = (fastify: FastifyInstance) =>
  mongoose.model(
    "airbnbReviews",
    airbnbReviews,
    fastify.config.MONGO_COLLECTION_NAME,
  );
