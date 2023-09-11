import Context from 'src/context/Context';
import ContextBuilder from 'src/context/ContextBuilder';
import UsecaseContext from 'src/core/usecase/UsecaseContext';
import Configuration from './Configuration';
import { ConfigService } from '@nestjs/config';

export default {
  provide: 'core',
  useFactory: (): Context => {
    const usecaseContext = new UsecaseContext();

    return new ContextBuilder().setUseCaseContext(usecaseContext).build();
  },
  inject: [Configuration, ConfigService],
};
