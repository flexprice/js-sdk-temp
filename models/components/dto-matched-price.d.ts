import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { PricePrice } from "./price-price.js";
export type DtoMatchedPrice = {
    meterId?: string | undefined;
    price?: PricePrice | undefined;
    priceId?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const DtoMatchedPrice$inboundSchema: z.ZodType<DtoMatchedPrice, z.ZodTypeDef, unknown>;
export declare function dtoMatchedPriceFromJSON(jsonString: string): SafeParseResult<DtoMatchedPrice, SDKValidationError>;
//# sourceMappingURL=dto-matched-price.d.ts.map