import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { FlexPriceError } from "../models/errors/flex-price-error.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/http-client-errors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/response-validation-error.js";
import { SDKValidationError } from "../models/errors/sdk-validation-error.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update subscription line item
 *
 * @remarks
 * Update a subscription line item by terminating the existing one and creating a new one
 */
export declare function subscriptionsPutSubscriptionsLineitemsId(client: FlexPriceCore, id: string, body: components.DtoUpdateSubscriptionLineItemRequest, options?: RequestOptions): APIPromise<Result<components.DtoSubscriptionLineItemResponse, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=subscriptions-put-subscriptions-lineitems-id.d.ts.map