import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoPlanSummary = {
    /**
     * description of the plan
     */
    description?: string | undefined;
    /**
     * id of the plan
     */
    id?: string | undefined;
    /**
     * lookup_key of the plan
     */
    lookupKey?: string | undefined;
    /**
     * name of the plan
     */
    name?: string | undefined;
};
/** @internal */
export declare const DtoPlanSummary$inboundSchema: z.ZodType<DtoPlanSummary, z.ZodTypeDef, unknown>;
export declare function dtoPlanSummaryFromJSON(jsonString: string): SafeParseResult<DtoPlanSummary, SDKValidationError>;
//# sourceMappingURL=dtoplansummary.d.ts.map