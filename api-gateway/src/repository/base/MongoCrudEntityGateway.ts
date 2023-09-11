import { Document, Model } from 'mongoose';
import CrudOperations from 'src/base/CrudOperations';
import Mapper from 'src/core/interface/Mapper';

export default class MongoCrudEntityGateway<M, D extends Document>
  implements CrudOperations<M>
{
  constructor(protected model: Model<D>, protected mapper: Mapper<M, D>) {}
  //@BeforeMethod((coreModel) => this.mapper.to(coreModel))
  //@AfterMethod((document) => this.mapper.from(document))
  async save(coreModel: M): Promise<M> {
    const document = await this.mapper.to(coreModel);
    const savedDocument = await document.save();
    return this.mapper.from(savedDocument);
  }

  async saveAll(coreModels: M[]): Promise<Array<M>> {
    const documents = await this.mapper.toArray(coreModels);
    const savedDocuments = (await this.model.insertMany(
      documents,
    )) as unknown as D[];
    return this.mapper.fromArray(savedDocuments);
  }

  async find(searchCriteria: M): Promise<Array<M>> {
    return this.model.find(searchCriteria).lean();
  }

  async findAll(): Promise<Array<M>> {
    return this.model.find().lean();
  }

  async exists(searchCriteria: M): Promise<boolean> {
    return Boolean(await this.model.exists(searchCriteria));
  }

  async count(searchCriteria: M): Promise<number> {
    return this.model.count(searchCriteria);
  }

  async delete(searchCriteria: M): Promise<number> {
    const result = await this.model.deleteMany(searchCriteria);
    return result.deletedCount;
  }

  async patch(searchCriteria: M, patches: M): Promise<boolean> {
    await this.model.findOneAndUpdate(searchCriteria, patches as never);
    return true;
  }
}
