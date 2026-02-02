import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesDebugTrackerStatus: {
    readonly Unprocessed: "unprocessed";
    readonly NotFound: "not_found";
    readonly Found: "found";
    readonly Error: "error";
};
export type TypesDebugTrackerStatus = ClosedEnum<typeof TypesDebugTrackerStatus>;
/** @internal */
export declare const TypesDebugTrackerStatus$inboundSchema: z.ZodNativeEnum<typeof TypesDebugTrackerStatus>;
//# sourceMappingURL=types-debug-tracker-status.d.ts.map