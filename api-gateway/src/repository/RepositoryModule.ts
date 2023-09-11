import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import StudentEntity from './student/StudentEntity';
import StudentSchema from './student/StudentSchema';
import MongoStudentEntityGateway from './student/MongoStudentEntityGateway';
import StudentDocumentMapper from './student/StudentDocumentMapper';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: StudentEntity.name, schema: StudentSchema },
    ]),
  ],
  providers: [MongoStudentEntityGateway, StudentDocumentMapper],
  exports: [MongoStudentEntityGateway],
})
export class RepositoryModule {}
