import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoUsageBreakdownItem = {
    /**
     * cost is the cost attributed to this group for the line item
     */
    cost?: string | undefined;
    /**
     * event_count is the number of events from this group (optional)
     */
    eventCount?: number | undefined;
    /**
     * grouped_by contains the grouping field values (e.g., {"source": "api", "org_id": "org123"})
     */
    groupedBy?: {
        [k: string]: string;
    } | undefined;
    /**
     * percentage is the percentage of total line item cost from this group (optional)
     */
    percentage?: string | undefined;
    /**
     * usage is the total usage amount from this group (optional, for additional context)
     */
    usage?: string | undefined;
};
/** @internal */
export declare const DtoUsageBreakdownItem$inboundSchema: z.ZodType<DtoUsageBreakdownItem, z.ZodTypeDef, unknown>;
export declare function dtoUsageBreakdownItemFromJSON(jsonString: string): SafeParseResult<DtoUsageBreakdownItem, SDKValidationError>;
//# sourceMappingURL=dto-usage-breakdown-item.d.ts.map