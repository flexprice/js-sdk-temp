import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesEventProcessingStatusType: {
    readonly Processed: "processed";
    readonly Processing: "processing";
    readonly Failed: "failed";
};
export type TypesEventProcessingStatusType = ClosedEnum<typeof TypesEventProcessingStatusType>;
/** @internal */
export declare const TypesEventProcessingStatusType$inboundSchema: z.ZodNativeEnum<typeof TypesEventProcessingStatusType>;
//# sourceMappingURL=types-event-processing-status-type.d.ts.map