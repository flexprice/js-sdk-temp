import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPauseStatus: {
    readonly None: "none";
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Completed: "completed";
    readonly Cancelled: "cancelled";
};
export type TypesPauseStatus = ClosedEnum<typeof TypesPauseStatus>;
/** @internal */
export declare const TypesPauseStatus$inboundSchema: z.ZodNativeEnum<typeof TypesPauseStatus>;
//# sourceMappingURL=types-pause-status.d.ts.map