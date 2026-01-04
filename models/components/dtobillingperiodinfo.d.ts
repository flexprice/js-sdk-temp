import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoBillingPeriodInfo = {
    endTime?: string | undefined;
    /**
     * e.g., "monthly", "yearly"
     */
    period?: string | undefined;
    startTime?: string | undefined;
};
/** @internal */
export declare const DtoBillingPeriodInfo$inboundSchema: z.ZodType<DtoBillingPeriodInfo, z.ZodTypeDef, unknown>;
export declare function dtoBillingPeriodInfoFromJSON(jsonString: string): SafeParseResult<DtoBillingPeriodInfo, SDKValidationError>;
//# sourceMappingURL=dtobillingperiodinfo.d.ts.map