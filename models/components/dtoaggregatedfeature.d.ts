import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAggregatedEntitlement } from "./dtoaggregatedentitlement.js";
import { DtoEntitlementSource } from "./dtoentitlementsource.js";
import { DtoFeatureResponse } from "./dtofeatureresponse.js";
export type DtoAggregatedFeature = {
    entitlement?: DtoAggregatedEntitlement | undefined;
    feature?: DtoFeatureResponse | undefined;
    sources?: Array<DtoEntitlementSource> | undefined;
};
/** @internal */
export declare const DtoAggregatedFeature$inboundSchema: z.ZodType<DtoAggregatedFeature, z.ZodTypeDef, unknown>;
export declare function dtoAggregatedFeatureFromJSON(jsonString: string): SafeParseResult<DtoAggregatedFeature, SDKValidationError>;
//# sourceMappingURL=dtoaggregatedfeature.d.ts.map