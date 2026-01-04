import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flexpriceerror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get PDF for an invoice
 *
 * @remarks
 * Retrieve the PDF document for a specific invoice by its ID
 */
export declare function invoicesGetInvoicesIdPdf(client: FlexPriceCore, id: string, url?: boolean | undefined, options?: RequestOptions): APIPromise<Result<ReadableStream<Uint8Array>, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=invoicesGetInvoicesIdPdf.d.ts.map