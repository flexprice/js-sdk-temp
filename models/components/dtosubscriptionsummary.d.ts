import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesSubscriptionStatus } from "./typessubscriptionstatus.js";
export type DtoSubscriptionSummary = {
    /**
     * archived_at timestamp (for old subscriptions)
     */
    archivedAt?: string | undefined;
    /**
     * billing_anchor of the subscription
     */
    billingAnchor?: string | undefined;
    /**
     * created_at timestamp
     */
    createdAt?: string | undefined;
    /**
     * current_period_end of the subscription
     */
    currentPeriodEnd?: string | undefined;
    /**
     * current_period_start of the subscription
     */
    currentPeriodStart?: string | undefined;
    /**
     * id of the subscription
     */
    id?: string | undefined;
    /**
     * plan_id of the subscription
     */
    planId?: string | undefined;
    status?: TypesSubscriptionStatus | undefined;
};
/** @internal */
export declare const DtoSubscriptionSummary$inboundSchema: z.ZodType<DtoSubscriptionSummary, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionSummaryFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionSummary, SDKValidationError>;
//# sourceMappingURL=dtosubscriptionsummary.d.ts.map