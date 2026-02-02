import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCustomerLookupResult } from "./dto-customer-lookup-result.js";
import { DtoMeterMatchingResult } from "./dto-meter-matching-result.js";
import { DtoPriceLookupResult } from "./dto-price-lookup-result.js";
import { DtoSubscriptionLineItemLookupResult } from "./dto-subscription-line-item-lookup-result.js";
import { TypesFailurePoint } from "./types-failure-point.js";
export type DtoDebugTracker = {
    customerLookup?: DtoCustomerLookupResult | undefined;
    failurePoint?: TypesFailurePoint | undefined;
    meterMatching?: DtoMeterMatchingResult | undefined;
    priceLookup?: DtoPriceLookupResult | undefined;
    subscriptionLineItemLookup?: DtoSubscriptionLineItemLookupResult | undefined;
};
/** @internal */
export declare const DtoDebugTracker$inboundSchema: z.ZodType<DtoDebugTracker, z.ZodTypeDef, unknown>;
export declare function dtoDebugTrackerFromJSON(jsonString: string): SafeParseResult<DtoDebugTracker, SDKValidationError>;
//# sourceMappingURL=dto-debug-tracker.d.ts.map