import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Handle Nomod webhook events
 *
 * @remarks
 * Process incoming Nomod webhook events for payment and invoice payments
 */
export declare function webhooksPostWebhooksNomodTenantIdEnvironmentId(client: FlexPriceCore, tenantId: string, environmentId: string, xApiKey?: string | undefined, options?: RequestOptions): APIPromise<Result<{
    [k: string]: any;
}, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=webhooksPostWebhooksNomodTenantIdEnvironmentId.d.ts.map