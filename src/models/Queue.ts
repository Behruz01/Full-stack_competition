import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    service_name: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Clinic",
    },
    doctor_name: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },
    queue_no: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Queue", schema);
