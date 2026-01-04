import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesScheduledTaskInterval: {
    readonly FifteenMIN: "15MIN";
    readonly Custom: "custom";
    readonly Hourly: "hourly";
    readonly Daily: "daily";
};
export type TypesScheduledTaskInterval = ClosedEnum<typeof TypesScheduledTaskInterval>;
/** @internal */
export declare const TypesScheduledTaskInterval$inboundSchema: z.ZodNativeEnum<typeof TypesScheduledTaskInterval>;
/** @internal */
export declare const TypesScheduledTaskInterval$outboundSchema: z.ZodNativeEnum<typeof TypesScheduledTaskInterval>;
//# sourceMappingURL=typesscheduledtaskinterval.d.ts.map