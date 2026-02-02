import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCreditGrantResponse } from "./dto-credit-grant-response.js";
import { DtoInvoiceResponse } from "./dto-invoice-response.js";
import { DtoProrationDetails } from "./dto-proration-details.js";
import { DtoSubscriptionSummary } from "./dto-subscription-summary.js";
import { TypesSubscriptionChangeType } from "./types-subscription-change-type.js";
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
     * is_scheduled indicates if the change was scheduled or executed immediately
     */
    isScheduled?: boolean | undefined;
    /**
     * metadata from the request
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    newSubscription?: DtoSubscriptionSummary | undefined;
    oldSubscription?: DtoSubscriptionSummary | undefined;
    prorationApplied?: DtoProrationDetails | undefined;
    /**
     * schedule_id is the ID of the created schedule (only if is_scheduled=true)
     */
    scheduleId?: string | undefined;
    /**
     * scheduled_at is when the change will execute (only if is_scheduled=true)
     */
    scheduledAt?: string | undefined;
};
/** @internal */
export declare const DtoSubscriptionChangeExecuteResponse$inboundSchema: z.ZodType<DtoSubscriptionChangeExecuteResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionChangeExecuteResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionChangeExecuteResponse, SDKValidationError>;
//# sourceMappingURL=dto-subscription-change-execute-response.d.ts.map