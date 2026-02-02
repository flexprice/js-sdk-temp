import { FlexPriceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FlexPriceError } from "../models/errors/flex-price-error.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/http-client-errors.js";
import { ResponseValidationError } from "../models/errors/response-validation-error.js";
import { SDKValidationError } from "../models/errors/sdk-validation-error.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get PDF for an invoice
 *
 * @remarks
 * Retrieve the PDF document for a specific invoice by its ID
 */
export declare function invoicesGetInvoicesIdPdf(client: FlexPriceCore, id: string, url?: boolean | undefined, options?: RequestOptions): APIPromise<Result<ReadableStream<Uint8Array>, FlexPriceError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=invoices-get-invoices-id-pdf.d.ts.map