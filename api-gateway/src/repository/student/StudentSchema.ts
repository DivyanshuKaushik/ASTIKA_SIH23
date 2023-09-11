import { SchemaFactory } from '@nestjs/mongoose';
import StudentEntity from './StudentEntity';

const StudentSchema = SchemaFactory.createForClass(StudentEntity);

StudentSchema.index({ email: 1 }, { unique: true });

export default StudentSchema;
