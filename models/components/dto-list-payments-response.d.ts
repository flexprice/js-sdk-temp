import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPaymentResponse } from "./dto-payment-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListPaymentsResponse = {
    items?: Array<DtoPaymentResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPaymentsResponse$inboundSchema: z.ZodType<DtoListPaymentsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPaymentsResponseFromJSON(jsonString: string): SafeParseResult<DtoListPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-payments-response.d.ts.map