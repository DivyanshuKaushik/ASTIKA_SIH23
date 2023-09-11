import UsecaseContext from 'src/core/usecase/UsecaseContext';
import Context from './Context';

export default class ContextBuilder {
  useCase: UsecaseContext;

  setUseCaseContext(context: UsecaseContext): ContextBuilder {
    this.useCase = context;
    return this;
  }

  build(): Context {
    return new Context({ useCase: this.useCase });
  }
}
