import { registerAs } from '@nestjs/config';

export const configuration = registerAs('mongo-config', () => ({
  uri:
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@` +
    `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
}));
