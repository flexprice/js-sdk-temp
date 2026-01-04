import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoPaymentAttemptResponse = {
    attemptNumber?: number | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    paymentId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoPaymentAttemptResponse$inboundSchema: z.ZodType<DtoPaymentAttemptResponse, z.ZodTypeDef, unknown>;
export declare function dtoPaymentAttemptResponseFromJSON(jsonString: string): SafeParseResult<DtoPaymentAttemptResponse, SDKValidationError>;
//# sourceMappingURL=dtopaymentattemptresponse.d.ts.map