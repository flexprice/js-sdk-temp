import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAggregatedFeature } from "./dto-aggregated-feature.js";
export type DtoCustomerEntitlementsResponse = {
    customerId?: string | undefined;
    features?: Array<DtoAggregatedFeature> | undefined;
};
/** @internal */
export declare const DtoCustomerEntitlementsResponse$inboundSchema: z.ZodType<DtoCustomerEntitlementsResponse, z.ZodTypeDef, unknown>;
export declare function dtoCustomerEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<DtoCustomerEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=dto-customer-entitlements-response.d.ts.map