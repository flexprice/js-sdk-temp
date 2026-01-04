import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPaymentResponse } from "./dtopaymentresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListPaymentsResponse = {
    items?: Array<DtoPaymentResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPaymentsResponse$inboundSchema: z.ZodType<DtoListPaymentsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPaymentsResponseFromJSON(jsonString: string): SafeParseResult<DtoListPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistpaymentsresponse.d.ts.map