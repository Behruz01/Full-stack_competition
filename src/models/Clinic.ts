import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    clinic_name: {
      type: String,
      require: true,
    },
    clinic_about: {
      type: String,
      required: true,
    },
    clinic_address: {
      type: String,
      require: true,
    },
    clinic_image: {
      type: String,
      required: true,
    },
    call_center: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default model("Clinic", schema);
