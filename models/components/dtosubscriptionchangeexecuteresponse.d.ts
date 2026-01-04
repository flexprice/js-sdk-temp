import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCreditGrantResponse } from "./dtocreditgrantresponse.js";
import { DtoInvoiceResponse } from "./dtoinvoiceresponse.js";
import { DtoProrationDetails } from "./dtoprorationdetails.js";
import { DtoSubscriptionSummary } from "./dtosubscriptionsummary.js";
import { TypesSubscriptionChangeType } from "./typessubscriptionchangetype.js";
/**
 * Response after successfully executing a subscription plan change
 */
export type DtoSubscriptionChangeExecuteResponse = {
    changeType?: TypesSubscriptionChangeType | undefined;
    /**
     * credit_grants contains any credit grants created for proration credits
     */
    creditGrants?: Array<DtoCreditGrantResponse> | undefined;
    /**
     * effective_date is when the change took effect
     */
    effectiveDate?: string | undefined;
    invoice?: DtoInvoiceResponse | undefined;
    /**
     * metadata from the request
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    newSubscription?: DtoSubscriptionSummary | undefined;
    oldSubscription?: DtoSubscriptionSummary | undefined;
    prorationApplied?: DtoProrationDetails | undefined;
};
/** @internal */
export declare const DtoSubscriptionChangeExecuteResponse$inboundSchema: z.ZodType<DtoSubscriptionChangeExecuteResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionChangeExecuteResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionChangeExecuteResponse, SDKValidationError>;
//# sourceMappingURL=dtosubscriptionchangeexecuteresponse.d.ts.map