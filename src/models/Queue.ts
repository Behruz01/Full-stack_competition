import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    service_name: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Clinic",
    },
    doctor_name: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Doctor",
    },
    queue_no: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
export default model("Queue", schema);
