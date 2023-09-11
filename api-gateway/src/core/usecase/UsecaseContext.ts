import { Hello } from './auth/Hello';

export default class UsecaseContext {
  hello: Hello;
  constructor() {
    this.hello = new Hello();
  }
}
