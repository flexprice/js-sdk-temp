import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesScheduleStatus: {
    readonly Pending: "pending";
    readonly Executing: "executing";
    readonly Executed: "executed";
    readonly Cancelled: "cancelled";
    readonly Failed: "failed";
};
export type TypesScheduleStatus = ClosedEnum<typeof TypesScheduleStatus>;
/** @internal */
export declare const TypesScheduleStatus$inboundSchema: z.ZodNativeEnum<typeof TypesScheduleStatus>;
//# sourceMappingURL=types-schedule-status.d.ts.map