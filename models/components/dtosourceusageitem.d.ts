import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoSourceUsageItem = {
    /**
     * cost is the cost attributed to this source for the line item
     */
    cost?: string | undefined;
    /**
     * event_count is the number of events from this source (optional)
     */
    eventCount?: number | undefined;
    /**
     * percentage is the percentage of total line item cost from this source (optional)
     */
    percentage?: string | undefined;
    /**
     * source is the name of the event source
     */
    source?: string | undefined;
    /**
     * usage is the total usage amount from this source (optional, for additional context)
     */
    usage?: string | undefined;
};
/** @internal */
export declare const DtoSourceUsageItem$inboundSchema: z.ZodType<DtoSourceUsageItem, z.ZodTypeDef, unknown>;
export declare function dtoSourceUsageItemFromJSON(jsonString: string): SafeParseResult<DtoSourceUsageItem, SDKValidationError>;
//# sourceMappingURL=dtosourceusageitem.d.ts.map