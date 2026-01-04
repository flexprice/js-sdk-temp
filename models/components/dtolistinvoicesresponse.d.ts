import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoInvoiceResponse } from "./dtoinvoiceresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListInvoicesResponse = {
    items?: Array<DtoInvoiceResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListInvoicesResponse$inboundSchema: z.ZodType<DtoListInvoicesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListInvoicesResponseFromJSON(jsonString: string): SafeParseResult<DtoListInvoicesResponse, SDKValidationError>;
//# sourceMappingURL=dtolistinvoicesresponse.d.ts.map