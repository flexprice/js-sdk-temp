import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCancellationType: {
    readonly Immediate: "immediate";
    readonly EndOfPeriod: "end_of_period";
};
export type TypesCancellationType = ClosedEnum<typeof TypesCancellationType>;
/** @internal */
export declare const TypesCancellationType$inboundSchema: z.ZodNativeEnum<typeof TypesCancellationType>;
/** @internal */
export declare const TypesCancellationType$outboundSchema: z.ZodNativeEnum<typeof TypesCancellationType>;
//# sourceMappingURL=types-cancellation-type.d.ts.map