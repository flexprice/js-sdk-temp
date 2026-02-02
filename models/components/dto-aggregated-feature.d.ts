import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAggregatedEntitlement } from "./dto-aggregated-entitlement.js";
import { DtoEntitlementSource } from "./dto-entitlement-source.js";
import { DtoFeatureResponse } from "./dto-feature-response.js";
export type DtoAggregatedFeature = {
    entitlement?: DtoAggregatedEntitlement | undefined;
    feature?: DtoFeatureResponse | undefined;
    sources?: Array<DtoEntitlementSource> | undefined;
};
/** @internal */
export declare const DtoAggregatedFeature$inboundSchema: z.ZodType<DtoAggregatedFeature, z.ZodTypeDef, unknown>;
export declare function dtoAggregatedFeatureFromJSON(jsonString: string): SafeParseResult<DtoAggregatedFeature, SDKValidationError>;
//# sourceMappingURL=dto-aggregated-feature.d.ts.map