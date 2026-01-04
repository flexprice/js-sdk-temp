import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWalletType: {
    readonly Promotional: "PROMOTIONAL";
    readonly PrePaid: "PRE_PAID";
};
export type TypesWalletType = ClosedEnum<typeof TypesWalletType>;
/** @internal */
export declare const TypesWalletType$inboundSchema: z.ZodNativeEnum<typeof TypesWalletType>;
/** @internal */
export declare const TypesWalletType$outboundSchema: z.ZodNativeEnum<typeof TypesWalletType>;
//# sourceMappingURL=typeswallettype.d.ts.map