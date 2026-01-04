import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAggregatedFeature } from "./dtoaggregatedfeature.js";
export type DtoCustomerEntitlementsResponse = {
    customerId?: string | undefined;
    features?: Array<DtoAggregatedFeature> | undefined;
};
/** @internal */
export declare const DtoCustomerEntitlementsResponse$inboundSchema: z.ZodType<DtoCustomerEntitlementsResponse, z.ZodTypeDef, unknown>;
export declare function dtoCustomerEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<DtoCustomerEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=dtocustomerentitlementsresponse.d.ts.map