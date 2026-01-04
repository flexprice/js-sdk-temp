import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantCadence: {
    readonly Onetime: "ONETIME";
    readonly Recurring: "RECURRING";
};
export type TypesCreditGrantCadence = ClosedEnum<typeof TypesCreditGrantCadence>;
/** @internal */
export declare const TypesCreditGrantCadence$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantCadence>;
/** @internal */
export declare const TypesCreditGrantCadence$outboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantCadence>;
//# sourceMappingURL=typescreditgrantcadence.d.ts.map