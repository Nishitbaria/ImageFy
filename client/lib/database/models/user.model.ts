import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    usernamme: string;
    photo: string;
    firstName: string;
    lastName: string;
    planid: number;
    creditBalance: number;
}


const UserSchema: Schema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    usernamme: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planid: { type: String, default: 1 },
    creditBalance: { type: Number, default: 10 }
})


const User = models?.User || model<IUser>('User', UserSchema);

export default User;