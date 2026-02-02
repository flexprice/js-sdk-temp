import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoInvoiceResponse } from "./dto-invoice-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListInvoicesResponse = {
    items?: Array<DtoInvoiceResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListInvoicesResponse$inboundSchema: z.ZodType<DtoListInvoicesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListInvoicesResponseFromJSON(jsonString: string): SafeParseResult<DtoListInvoicesResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-invoices-response.d.ts.map