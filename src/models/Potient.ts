import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    potient_name: {
      type: String,
      required: true,
    },
    potient_lname: {
      type: String,
      required: true,
    },
    potient_age: {
      type: String,
      required: true,
    },
    potient_phone_number: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Potient", schema);
