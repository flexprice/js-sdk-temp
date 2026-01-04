import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesResumeMode: {
    readonly Immediate: "immediate";
    readonly Scheduled: "scheduled";
    readonly Auto: "auto";
};
export type TypesResumeMode = ClosedEnum<typeof TypesResumeMode>;
/** @internal */
export declare const TypesResumeMode$inboundSchema: z.ZodNativeEnum<typeof TypesResumeMode>;
/** @internal */
export declare const TypesResumeMode$outboundSchema: z.ZodNativeEnum<typeof TypesResumeMode>;
//# sourceMappingURL=typesresumemode.d.ts.map