import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPriceUnitType: {
    readonly Fiat: "FIAT";
    readonly Custom: "CUSTOM";
};
export type TypesPriceUnitType = ClosedEnum<typeof TypesPriceUnitType>;
/** @internal */
export declare const TypesPriceUnitType$inboundSchema: z.ZodNativeEnum<typeof TypesPriceUnitType>;
/** @internal */
export declare const TypesPriceUnitType$outboundSchema: z.ZodNativeEnum<typeof TypesPriceUnitType>;
//# sourceMappingURL=typespriceunittype.d.ts.map