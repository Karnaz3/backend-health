import { AppPagination } from 'src/common/response/app-pagination';
import { AppResponse } from 'src/common/response/app-response';
import { IPaginationQuery } from 'src/common/response/interface/pagination.options.interface';
import { IPaginationData } from 'src/common/response/interface/response-data.interface';

export abstract class CoreApiResponse {
  constructor() {}
  static success<TData>(data: TData, statusCode: number = 200, message: string = 'success') {
    return new AppResponse({
      data: data,
      statusCode,
      message,
    });
  }
  static pagination(
    paginationData: IPaginationData,
    query: IPaginationQuery,
    statusCode: number = 200,
    message: string = 'success',
  ) {
    return new AppPagination({
      ...paginationData,
      ...query,
      statusCode,
      message: message,
    });
  }
}

export abstract class CoreWsResponse {
  static success<T>(data: T) {
    return {
      data,
      timestamp: new Date().toISOString(),
    };
  }
}
