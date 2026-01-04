import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAggregatedFeature } from "./dtoaggregatedfeature.js";
export type DtoSubscriptionEntitlementsResponse = {
    features?: Array<DtoAggregatedFeature> | undefined;
    planId?: string | undefined;
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const DtoSubscriptionEntitlementsResponse$inboundSchema: z.ZodType<DtoSubscriptionEntitlementsResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=dtosubscriptionentitlementsresponse.d.ts.map