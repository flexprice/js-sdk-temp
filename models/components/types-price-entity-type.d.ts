import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPriceEntityType: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
    readonly Addon: "ADDON";
    readonly Price: "PRICE";
    readonly Costsheet: "COSTSHEET";
};
export type TypesPriceEntityType = ClosedEnum<typeof TypesPriceEntityType>;
/** @internal */
export declare const TypesPriceEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesPriceEntityType>;
/** @internal */
export declare const TypesPriceEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesPriceEntityType>;
//# sourceMappingURL=types-price-entity-type.d.ts.map