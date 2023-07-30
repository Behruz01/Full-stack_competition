import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    doctor_id: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Doctor",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Potient",
    },
    inspection: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default model("Inspection", schema);
