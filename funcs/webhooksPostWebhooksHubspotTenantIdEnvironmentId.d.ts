import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Handle HubSpot webhook events
 *
 * @remarks
 * Process incoming HubSpot webhook events for deal closed won and customer creation
 */
export declare function webhooksPostWebhooksHubspotTenantIdEnvironmentId(client: FlexPriceCore, tenantId: string, environmentId: string, xHubSpotSignatureV3: string, options?: RequestOptions): APIPromise<Result<{
    [k: string]: any;
}, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=webhooksPostWebhooksHubspotTenantIdEnvironmentId.d.ts.map