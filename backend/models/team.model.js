import mongoose from "mongoose";
import teamMemberSchema from "./teamMember.model.js";
const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  members: [teamMemberSchema], // Each team has an array of members
});

export default teamSchema;
