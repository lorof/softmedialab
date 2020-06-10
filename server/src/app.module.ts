import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { StudentsModule } from './students/students.module';
import { AppConfigModule } from './config/app/config.module';
import { MongoConfigModule } from './config/database/mongo/config.module';

@Module({
  imports: [
    StudentsModule,
    AppConfigModule,
    MongoConfigModule,
    MongooseModule.forRootAsync({
      imports: [MongoConfigModule],
      connectionName: 'mongo',
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('mongo-config.uri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
