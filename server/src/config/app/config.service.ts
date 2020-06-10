import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app-config.name');
  }

  get env(): string {
    return this.configService.get<string>('app-config.env');
  }

  get url(): string {
    return this.configService.get<string>('app-config.url');
  }

  get port(): number {
    return Number(this.configService.get<number>('app-config.port'));
  }
}
