import Student from '../model/Student';

type FindByRequest = Partial<Record<keyof Student, unknown>> & {
  fields?: string;
  findOne?: '0' | '1';
};
export default FindByRequest;
