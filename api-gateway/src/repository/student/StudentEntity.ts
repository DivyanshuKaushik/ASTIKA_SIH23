import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'student', timestamps: true })
export default class StudentEntity {
  @Prop({ type: String, required: true, unique: true }) email: string;
  @Prop({ type: String, required: true }) name: string;
  @Prop({ type: String, required: true }) password: string;
  @Prop({ type: String, required: true, unique: true }) phoneNumber: string;
}
