import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCouponCadence: {
    readonly Once: "once";
    readonly Repeated: "repeated";
    readonly Forever: "forever";
};
export type TypesCouponCadence = ClosedEnum<typeof TypesCouponCadence>;
/** @internal */
export declare const TypesCouponCadence$inboundSchema: z.ZodNativeEnum<typeof TypesCouponCadence>;
/** @internal */
export declare const TypesCouponCadence$outboundSchema: z.ZodNativeEnum<typeof TypesCouponCadence>;
//# sourceMappingURL=typescouponcadence.d.ts.map