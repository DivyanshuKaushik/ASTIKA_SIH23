import UsecaseContext from 'src/core/usecase/UsecaseContext';

export default class Context {
  useCase: UsecaseContext;
  constructor({ useCase }: { useCase: UsecaseContext }) {
    this.useCase = useCase;
  }
}
