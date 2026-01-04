import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWalletConfigPriceType: {
    readonly All: "ALL";
    readonly Usage: "USAGE";
    readonly Fixed: "FIXED";
};
export type TypesWalletConfigPriceType = ClosedEnum<typeof TypesWalletConfigPriceType>;
/** @internal */
export declare const TypesWalletConfigPriceType$inboundSchema: z.ZodNativeEnum<typeof TypesWalletConfigPriceType>;
/** @internal */
export declare const TypesWalletConfigPriceType$outboundSchema: z.ZodNativeEnum<typeof TypesWalletConfigPriceType>;
//# sourceMappingURL=typeswalletconfigpricetype.d.ts.map