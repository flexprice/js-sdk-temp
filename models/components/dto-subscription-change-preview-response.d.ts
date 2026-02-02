import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoBillingCycleInfo } from "./dto-billing-cycle-info.js";
import { DtoInvoicePreview } from "./dto-invoice-preview.js";
import { DtoPlanSummary } from "./dto-plan-summary.js";
import { DtoProrationDetails } from "./dto-proration-details.js";
import { TypesSubscriptionChangeType } from "./types-subscription-change-type.js";
/**
 * Response showing the financial impact of a subscription plan change
 */
export type DtoSubscriptionChangePreviewResponse = {
    changeType?: TypesSubscriptionChangeType | undefined;
    currentPlan?: DtoPlanSummary | undefined;
    /**
     * effective_date is when the change would take effect
     */
    effectiveDate?: string | undefined;
    /**
     * metadata from the request
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    newBillingCycle?: DtoBillingCycleInfo | undefined;
    nextInvoicePreview?: DtoInvoicePreview | undefined;
    prorationDetails?: DtoProrationDetails | undefined;
    /**
     * subscription_id is the ID of the subscription being changed
     */
    subscriptionId?: string | undefined;
    targetPlan?: DtoPlanSummary | undefined;
    /**
     * warnings contains any warnings about the change
     */
    warnings?: Array<string> | undefined;
};
/** @internal */
export declare const DtoSubscriptionChangePreviewResponse$inboundSchema: z.ZodType<DtoSubscriptionChangePreviewResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionChangePreviewResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionChangePreviewResponse, SDKValidationError>;
//# sourceMappingURL=dto-subscription-change-preview-response.d.ts.map