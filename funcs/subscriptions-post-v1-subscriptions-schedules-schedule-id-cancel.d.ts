import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { FlexPriceError } from "../models/errors/flex-price-error.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/http-client-errors.js";
import { ResponseValidationError } from "../models/errors/response-validation-error.js";
import { SDKValidationError } from "../models/errors/sdk-validation-error.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Cancel subscription schedule
 *
 * @remarks
 * Cancels a pending subscription schedule. Supports two modes: 1) By schedule ID in path, or 2) By subscription ID + schedule type in request body
 */
export declare function subscriptionsPostV1SubscriptionsSchedulesScheduleIdCancel(client: FlexPriceCore, scheduleId: string, body?: components.DtoCancelScheduleRequest | undefined, options?: RequestOptions): APIPromise<Result<components.DtoCancelScheduleResponse, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=subscriptions-post-v1-subscriptions-schedules-schedule-id-cancel.d.ts.map