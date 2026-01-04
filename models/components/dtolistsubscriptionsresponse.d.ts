import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoSubscriptionResponse } from "./dtosubscriptionresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListSubscriptionsResponse = {
    items?: Array<DtoSubscriptionResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListSubscriptionsResponse$inboundSchema: z.ZodType<DtoListSubscriptionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistsubscriptionsresponse.d.ts.map