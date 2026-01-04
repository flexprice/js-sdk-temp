import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPauseMode: {
    readonly Immediate: "immediate";
    readonly Scheduled: "scheduled";
    readonly PeriodEnd: "period_end";
};
export type TypesPauseMode = ClosedEnum<typeof TypesPauseMode>;
/** @internal */
export declare const TypesPauseMode$inboundSchema: z.ZodNativeEnum<typeof TypesPauseMode>;
/** @internal */
export declare const TypesPauseMode$outboundSchema: z.ZodNativeEnum<typeof TypesPauseMode>;
//# sourceMappingURL=typespausemode.d.ts.map