import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  timestamp: { type: String, required: true },
  received: { type: Boolean, required: true },
});

export default mongoose.model("messageContent", whatsappSchema);
