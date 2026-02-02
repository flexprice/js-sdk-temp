import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSubscriptionResponse } from "./dto-subscription-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListSubscriptionsResponse = {
    items?: Array<DtoSubscriptionResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListSubscriptionsResponse$inboundSchema: z.ZodType<DtoListSubscriptionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-subscriptions-response.d.ts.map