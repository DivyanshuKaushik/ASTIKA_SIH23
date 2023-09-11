import CrudOperations from 'src/base/CrudOperations';
import Student from './model/Student';
import FindByRequest from './request/FindByRequest';

export default interface StudentEntityGateway extends CrudOperations<Student> {
  findBy(query: FindByRequest): Promise<Student | Student[]>;
}
