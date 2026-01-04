import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCouponType: {
    readonly Fixed: "fixed";
    readonly Percentage: "percentage";
};
export type TypesCouponType = ClosedEnum<typeof TypesCouponType>;
/** @internal */
export declare const TypesCouponType$inboundSchema: z.ZodNativeEnum<typeof TypesCouponType>;
/** @internal */
export declare const TypesCouponType$outboundSchema: z.ZodNativeEnum<typeof TypesCouponType>;
//# sourceMappingURL=typescoupontype.d.ts.map