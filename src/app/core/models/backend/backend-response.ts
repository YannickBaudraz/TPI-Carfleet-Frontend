import { DataTransferObject } from './data-transfer-object';

/**
 * Response received from the backend.
 */
export interface BackendResponse {
  /**
   * THE HTTP response code.
   */
  code: number;

  /**
   * The backend message.
   */
  message: string;

  /**
   * The backend data.
   */
  data: BackendResponseData;
}

/**
 * Backend response type that can be a single or array {@link DataTransferObject}, or undefined.
 */
export type BackendResponseData = DataTransferObject | DataTransferObject[] | undefined;
