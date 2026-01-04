import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Recalculate invoice totals and line items
 *
 * @remarks
 * Recalculate totals and line items for a draft invoice, useful when subscription line items or usage data has changed
 */
export declare function invoicesPostInvoicesIdRecalculate(client: FlexPriceCore, id: string, finalize?: boolean | undefined, options?: RequestOptions): APIPromise<Result<components.DtoInvoiceResponse, errors.ErrorsErrorResponse | FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=invoicesPostInvoicesIdRecalculate.d.ts.map