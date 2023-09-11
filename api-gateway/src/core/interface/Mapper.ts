export default abstract class Mapper<M, D> {
  abstract to(model: M): Promise<D>;
  abstract from(dto: D): Promise<M>;

  async toArray(models: M[]) {
    return Promise.all(models.map(async (model) => this.to(model)));
  }

  async fromArray(dtos: D[]) {
    return Promise.all(dtos.map(async (dto) => this.from(dto)));
  }
}
