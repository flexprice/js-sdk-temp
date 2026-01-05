import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get customer subscriptions
 *
 * @remarks
 * Get all subscriptions for the authenticated customer with pagination
 */
export declare function customerDashboardPostCustomerDashboardSubscriptions(client: FlexPriceCore, security: operations.PostCustomerDashboardSubscriptionsSecurity, request: components.DtoDashboardPaginatedRequest, options?: RequestOptions): APIPromise<Result<components.DtoListSubscriptionsResponse, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=customerDashboardPostCustomerDashboardSubscriptions.d.ts.map