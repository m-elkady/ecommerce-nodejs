import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string,
  email: string,
  password: string,
  roles: any[]
}

export const User: Model<IUser> = model('User', new Schema({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
}));
export default User;