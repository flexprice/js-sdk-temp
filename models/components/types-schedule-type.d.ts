import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesScheduleType: {
    readonly Immediate: "immediate";
    readonly EndOfPeriod: "end_of_period";
};
export type TypesScheduleType = ClosedEnum<typeof TypesScheduleType>;
/** @internal */
export declare const TypesScheduleType$outboundSchema: z.ZodNativeEnum<typeof TypesScheduleType>;
//# sourceMappingURL=types-schedule-type.d.ts.map