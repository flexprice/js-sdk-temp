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
 * Create a new API key
 *
 * @remarks
 * Create a new API key. Provide 'service_account_id' in body to create API key for a service account, otherwise creates for authenticated user.
 */
export declare function secretsPostSecretsApiKeys(client: FlexPriceCore, request: components.DtoCreateAPIKeyRequest, options?: RequestOptions): APIPromise<Result<components.DtoCreateAPIKeyResponse, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=secrets-post-secrets-api-keys.d.ts.map