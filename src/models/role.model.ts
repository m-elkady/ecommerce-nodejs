import { model, Schema, Model, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
}

const Role: Model<IRole> = model('Role', new Schema({ name: String }));

export default Role;