import StudentEntityGateway from './StudentEntityGateway';
import StudentService from './StudentService';

export default class StudentContext {
  studentGateway: StudentEntityGateway;
  studentService: StudentService;

  constructor({ entityGateway }) {
    this.studentGateway = entityGateway;
    this.studentService = new StudentService({ entityGateway });
  }
}
