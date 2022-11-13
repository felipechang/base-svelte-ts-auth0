import mongoose from "mongoose";

await mongoose.connect(`mongodb://${import.meta.env.VITE_MONGO_URL}/${import.meta.env.VITE_MONGO_DB}`);

const SourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
});

export const Source = mongoose.model("Source", SourceSchema);
