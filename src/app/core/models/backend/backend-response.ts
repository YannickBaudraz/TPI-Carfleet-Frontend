import { AbstractDto } from './dto';

export interface BackendResponse {
  code: number;
  message: string;
  data: BackendResponseData;
}

export type BackendResponseData = AbstractDto | AbstractDto[] | undefined;
