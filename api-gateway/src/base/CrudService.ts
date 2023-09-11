import CrudOperations from './CrudOperations';

export default abstract class CrudService<M> implements CrudOperations<M> {
  gateway: CrudOperations<M>;

  constructor({
    entityGateway: gateway,
  }: {
    entityGateway: CrudOperations<M>;
  }) {
    this.gateway = gateway;
  }

  async save(model: M): Promise<M> {
    return this.gateway.save(model);
  }

  async saveAll(models: M[]): Promise<Array<M>> {
    return this.gateway.saveAll(models);
  }

  async find(searchCriteria: M): Promise<Array<M>> {
    return this.gateway.find(searchCriteria);
  }

  async findAll(): Promise<Array<M>> {
    return this.gateway.findAll();
  }

  async exists(searchCriteria: M): Promise<boolean> {
    return this.gateway.exists(searchCriteria);
  }

  async count(searchCriteria: M): Promise<number> {
    return this.gateway.count(searchCriteria);
  }

  async delete(searchCriteria: M): Promise<number> {
    return this.gateway.delete(searchCriteria);
  }

  async patch(searchCriteria: M, patches: M): Promise<boolean> {
    return this.gateway.patch(searchCriteria, patches);
  }
}
