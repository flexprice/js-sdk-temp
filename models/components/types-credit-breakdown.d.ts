import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type TypesCreditBreakdown = {
    free?: string | undefined;
    purchased?: string | undefined;
};
/** @internal */
export declare const TypesCreditBreakdown$inboundSchema: z.ZodType<TypesCreditBreakdown, z.ZodTypeDef, unknown>;
export declare function typesCreditBreakdownFromJSON(jsonString: string): SafeParseResult<TypesCreditBreakdown, SDKValidationError>;
//# sourceMappingURL=types-credit-breakdown.d.ts.map