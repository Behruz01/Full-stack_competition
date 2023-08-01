import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    doctor_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Patient",
    },
    inspection: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Inspection", schema);
