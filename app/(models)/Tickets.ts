import mongoose, {Schema} from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined.");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean
    },
    {
        timestamps: true,
    }
);

export interface TicketDocument extends Document {
    _id: string; 
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const Ticket = mongoose.models.Ticket || mongoose.model<TicketDocument>("Ticket", ticketSchema);
export default Ticket;
