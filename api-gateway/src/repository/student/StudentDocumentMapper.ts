import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import StudentEntity from './StudentEntity';
import { StudentDocument } from './StudentDocument';
import Student from 'src/core/common/student/model/Student';
import Mapper from 'src/core/interface/Mapper';

@Injectable()
export default class StudentDocumentMapper extends Mapper<
  Student,
  StudentDocument
> {
  constructor(
    @InjectModel(StudentEntity.name) private model: Model<StudentDocument>,
  ) {
    super();
  }

  async to(coreModel: Student): Promise<StudentDocument> {
    return this.model.create({ ...coreModel });
  }

  async from(dto: StudentDocument): Promise<Student> {
    return { ...dto['_doc'] };
  }
}
