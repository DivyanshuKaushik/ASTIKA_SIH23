import Student from 'src/core/common/student/model/Student';
import MongoCrudEntityGateway from '../base/MongoCrudEntityGateway';
import { StudentDocument } from './StudentDocument';
import StudentEntityGateway from 'src/core/common/student/StudentEntityGateway';
import StudentEntity from './StudentEntity';
import StudentDocumentMapper from './StudentDocumentMapper';
import { InjectModel } from '@nestjs/mongoose';
import { Inject, Injectable } from '@nestjs/common';
import Mapper from 'src/core/interface/Mapper';
import { Model } from 'mongoose';
import FindByRequest from 'src/core/common/student/request/FindByRequest';

@Injectable()
export default class MongoStudentEntityGateway
  extends MongoCrudEntityGateway<Student, StudentDocument>
  implements StudentEntityGateway
{
  constructor(
    @InjectModel(StudentEntity.name) model: Model<StudentDocument>,
    @Inject(StudentDocumentMapper.name)
    mapper: Mapper<Student, StudentDocument>,
  ) {
    super(model, mapper);
  }
  async findBy(query: FindByRequest): Promise<Student | Student[]> {
    const { fields, findOne, ...findQuery } = query;
    const projection = fields ? fields.split(',').join(' ') : '';
    const result =
      findOne === '1'
        ? (this.model.findOne(findQuery, projection) as unknown as Student)
        : (this.model
            .find(findQuery, projection)
            .lean() as unknown as Array<Student>);
    return result;
  }
}
