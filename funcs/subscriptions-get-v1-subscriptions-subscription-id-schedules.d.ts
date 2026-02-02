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
 * List subscription schedules
 *
 * @remarks
 * Retrieves all schedules for a specific subscription
 */
export declare function subscriptionsGetV1SubscriptionsSubscriptionIdSchedules(client: FlexPriceCore, subscriptionId: string, options?: RequestOptions): APIPromise<Result<components.DtoGetPendingSchedulesResponse, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=subscriptions-get-v1-subscriptions-subscription-id-schedules.d.ts.map