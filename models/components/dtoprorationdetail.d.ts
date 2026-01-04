import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoProrationDetail = {
    chargeAmount?: string | undefined;
    creditAmount?: string | undefined;
    description?: string | undefined;
    lineItemId?: string | undefined;
    originalAmount?: string | undefined;
    planName?: string | undefined;
    priceId?: string | undefined;
    prorationDays?: number | undefined;
};
/** @internal */
export declare const DtoProrationDetail$inboundSchema: z.ZodType<DtoProrationDetail, z.ZodTypeDef, unknown>;
export declare function dtoProrationDetailFromJSON(jsonString: string): SafeParseResult<DtoProrationDetail, SDKValidationError>;
//# sourceMappingURL=dtoprorationdetail.d.ts.map