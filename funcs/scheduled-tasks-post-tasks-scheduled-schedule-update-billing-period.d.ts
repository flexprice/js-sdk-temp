import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flex-price-error.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/http-client-errors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/response-validation-error.js";
import { SDKValidationError } from "../models/errors/sdk-validation-error.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Schedule update billing period
 *
 * @remarks
 * Schedule an update billing period workflow
 */
export declare function scheduledTasksPostTasksScheduledScheduleUpdateBillingPeriod(client: FlexPriceCore, _request: operations.PostTasksScheduledScheduleUpdateBillingPeriodRequest, options?: RequestOptions): APIPromise<Result<operations.PostTasksScheduledScheduleUpdateBillingPeriodResponse, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=scheduled-tasks-post-tasks-scheduled-schedule-update-billing-period.d.ts.map