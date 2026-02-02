import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoFeatureUsageInfo = {
    customerId?: string | undefined;
    featureId?: string | undefined;
    meterId?: string | undefined;
    priceId?: string | undefined;
    processedAt?: string | undefined;
    qtyTotal?: string | undefined;
    subLineItemId?: string | undefined;
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const DtoFeatureUsageInfo$inboundSchema: z.ZodType<DtoFeatureUsageInfo, z.ZodTypeDef, unknown>;
export declare function dtoFeatureUsageInfoFromJSON(jsonString: string): SafeParseResult<DtoFeatureUsageInfo, SDKValidationError>;
//# sourceMappingURL=dto-feature-usage-info.d.ts.map