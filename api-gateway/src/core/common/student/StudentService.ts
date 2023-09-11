import CrudService from 'src/base/CrudService';
import StudentEntityGateway from './StudentEntityGateway';
import Student from './model/Student';
import FindByRequest from './request/FindByRequest';

export default class StudentService extends CrudService<Student> {
  gateway: StudentEntityGateway;

  constructor({ entityGateway }: { entityGateway: StudentEntityGateway }) {
    super({ entityGateway });
    this.gateway = entityGateway;
  }

  async findBy(query: FindByRequest): Promise<Array<Student> | Student> {
    return this.gateway.findBy(query);
  }
}
