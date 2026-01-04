import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesRoundType } from "./typesroundtype.js";
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
//# sourceMappingURL=pricejsonbtransformquantity.d.ts.map