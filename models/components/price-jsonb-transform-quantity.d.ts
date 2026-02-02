import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesRoundType } from "./types-round-type.js";
export type PriceJSONBTransformQuantity = {
    /**
     * Divide quantity by this number
     */
    divideBy?: number | undefined;
    round?: TypesRoundType | undefined;
};
/** @internal */
export declare const PriceJSONBTransformQuantity$inboundSchema: z.ZodType<PriceJSONBTransformQuantity, z.ZodTypeDef, unknown>;
export declare function priceJSONBTransformQuantityFromJSON(jsonString: string): SafeParseResult<PriceJSONBTransformQuantity, SDKValidationError>;
//# sourceMappingURL=price-jsonb-transform-quantity.d.ts.map