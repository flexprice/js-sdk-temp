import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesBillingModel: {
    readonly FlatFee: "FLAT_FEE";
    readonly Package: "PACKAGE";
    readonly Tiered: "TIERED";
};
export type TypesBillingModel = ClosedEnum<typeof TypesBillingModel>;
/** @internal */
export declare const TypesBillingModel$inboundSchema: z.ZodNativeEnum<typeof TypesBillingModel>;
/** @internal */
export declare const TypesBillingModel$outboundSchema: z.ZodNativeEnum<typeof TypesBillingModel>;
//# sourceMappingURL=typesbillingmodel.d.ts.map