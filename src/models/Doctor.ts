import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    doctor_name: {
      type: String,
      require: true,
    },
    doctor_lname: {
      type: String,
      require: true,
    },
    doctor_phone_number: {
      type: String,
      required: true,
    },
    doctor_image: {
      type: String,
      required: true,
    },
    doctor_specialty: {
      type: String,
      require: true,
    },
    doctor_working_time: {
      type: String,
      require: true,
    },
    doctor_working_day: {
      type: String,
      require: true,
    },
    doctor_floor_no: {
      type: Number,
      require: true,
    },
    doctor_room_no: {
      type: Number,
      require: true,
    },
    doctor_qualification: {
      type: Number,
      require: true,
    },
    doctor_clinic_adress: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Clinic",
    },
  },
  { timestamps: true }
);
export default model("Doctor", schema);
