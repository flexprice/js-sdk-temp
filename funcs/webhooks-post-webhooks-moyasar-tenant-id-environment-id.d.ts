import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flex-price-error.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/http-client-errors.js";
import { ResponseValidationError } from "../models/errors/response-validation-error.js";
import { SDKValidationError } from "../models/errors/sdk-validation-error.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Handle Moyasar webhook events
 *
 * @remarks
 * Process incoming Moyasar webhook events for payment status updates
 */
export declare function webhooksPostWebhooksMoyasarTenantIdEnvironmentId(client: FlexPriceCore, tenantId: string, environmentId: string, xMoyasarSignature?: string | undefined, options?: RequestOptions): APIPromise<Result<{
    [k: string]: any;
}, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=webhooks-post-webhooks-moyasar-tenant-id-environment-id.d.ts.map