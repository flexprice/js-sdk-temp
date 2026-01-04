import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaskStatus: {
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
};
export type TypesTaskStatus = ClosedEnum<typeof TypesTaskStatus>;
/** @internal */
export declare const TypesTaskStatus$inboundSchema: z.ZodNativeEnum<typeof TypesTaskStatus>;
/** @internal */
export declare const TypesTaskStatus$outboundSchema: z.ZodNativeEnum<typeof TypesTaskStatus>;
//# sourceMappingURL=typestaskstatus.d.ts.map