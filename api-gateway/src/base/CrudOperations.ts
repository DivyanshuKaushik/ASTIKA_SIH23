export default interface CrudOperations<M> {
  save: (model: M) => Promise<M>;
  saveAll: (models: M[]) => Promise<M[]>;
  find: (searchCriteria: M) => Promise<M[]>;
  findAll: () => Promise<M[]>;
  exists: (searchCriteria: M) => Promise<boolean>;
  count: (searchCriteria: M) => Promise<number>;
  delete: (searchCriteria: M) => Promise<number>;
  patch: (searchCriteria: M, patches: M) => Promise<boolean>;
}
