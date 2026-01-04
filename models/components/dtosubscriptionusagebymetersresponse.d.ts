import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PricePrice } from "./priceprice.js";
export type DtoSubscriptionUsageByMetersResponse = {
    amount?: number | undefined;
    currency?: string | undefined;
    displayAmount?: string | undefined;
    filterValues?: {
        [k: string]: Array<string>;
    } | undefined;
    /**
     * Whether this charge is at overage rate
     */
    isOverage?: boolean | undefined;
    meterDisplayName?: string | undefined;
    meterId?: string | undefined;
    /**
     * Factor applied to this charge if in overage
     */
    overageFactor?: number | undefined;
    price?: PricePrice | undefined;
    quantity?: number | undefined;
};
/** @internal */
export declare const DtoSubscriptionUsageByMetersResponse$inboundSchema: z.ZodType<DtoSubscriptionUsageByMetersResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionUsageByMetersResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionUsageByMetersResponse, SDKValidationError>;
//# sourceMappingURL=dtosubscriptionusagebymetersresponse.d.ts.map