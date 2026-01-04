import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesApplicationStatus: {
    readonly Applied: "applied";
    readonly Failed: "failed";
    readonly Pending: "pending";
    readonly Skipped: "skipped";
    readonly Cancelled: "cancelled";
};
export type TypesApplicationStatus = ClosedEnum<typeof TypesApplicationStatus>;
/** @internal */
export declare const TypesApplicationStatus$inboundSchema: z.ZodNativeEnum<typeof TypesApplicationStatus>;
//# sourceMappingURL=typesapplicationstatus.d.ts.map