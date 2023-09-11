import { Document } from 'mongoose';
import StudentEntity from './StudentEntity';

export type StudentDocument = StudentEntity & Document;
