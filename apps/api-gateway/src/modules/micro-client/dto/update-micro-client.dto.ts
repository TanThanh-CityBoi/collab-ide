import { PartialType } from '@nestjs/mapped-types';
import { CreateMicroClientDto } from './create-micro-client.dto';

export class UpdateMicroClientDto extends PartialType(CreateMicroClientDto) {}
