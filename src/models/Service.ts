import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    service_name: {
      type: String,
      required: true,
    },
    service_price: {
      type: String,
      required: true,
    },
    clinic_address: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Clinic",
    },
  },
  { timestamps: true }
);
export default model("Service", schema);
