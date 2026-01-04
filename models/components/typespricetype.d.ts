import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPriceType: {
    readonly Usage: "USAGE";
    readonly Fixed: "FIXED";
};
export type TypesPriceType = ClosedEnum<typeof TypesPriceType>;
/** @internal */
export declare const TypesPriceType$inboundSchema: z.ZodNativeEnum<typeof TypesPriceType>;
/** @internal */
export declare const TypesPriceType$outboundSchema: z.ZodNativeEnum<typeof TypesPriceType>;
//# sourceMappingURL=typespricetype.d.ts.map