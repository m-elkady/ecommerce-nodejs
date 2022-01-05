import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  username: string,
  email: string,
  password: string,
  roles: Array<object>
}

const User: Model<IUser> = model('User', new Schema({
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