import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Download task export file
 *
 * @remarks
 * Generate a presigned URL for downloading an exported file (supports both Flexprice-managed and customer-owned S3)
 */
export declare function tasksGetTasksIdDownload(client: FlexPriceCore, id: string, options?: RequestOptions): APIPromise<Result<{
    [k: string]: string;
}, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tasksGetTasksIdDownload.d.ts.map