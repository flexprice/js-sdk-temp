import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWalletType: {
    readonly PrePaid: "PRE_PAID";
    readonly PostPaid: "POST_PAID";
};
export type TypesWalletType = ClosedEnum<typeof TypesWalletType>;
/** @internal */
export declare const TypesWalletType$inboundSchema: z.ZodNativeEnum<typeof TypesWalletType>;
/** @internal */
export declare const TypesWalletType$outboundSchema: z.ZodNativeEnum<typeof TypesWalletType>;
//# sourceMappingURL=types-wallet-type.d.ts.map