import * as z from "zod/v3";
import { TypesRoundType } from "./typesroundtype.js";
export type PriceTransformQuantity = {
    /**
     * Divide quantity by this number
     */
    divideBy?: number | undefined;
    round?: TypesRoundType | undefined;
};
/** @internal */
export type PriceTransformQuantity$Outbound = {
    divide_by?: number | undefined;
    round?: string | undefined;
};
/** @internal */
export declare const PriceTransformQuantity$outboundSchema: z.ZodType<PriceTransformQuantity$Outbound, z.ZodTypeDef, PriceTransformQuantity>;
export declare function priceTransformQuantityToJSON(priceTransformQuantity: PriceTransformQuantity): string;
//# sourceMappingURL=pricetransformquantity.d.ts.map