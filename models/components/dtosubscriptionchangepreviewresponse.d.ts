import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoBillingCycleInfo } from "./dtobillingcycleinfo.js";
import { DtoInvoicePreview } from "./dtoinvoicepreview.js";
import { DtoPlanSummary } from "./dtoplansummary.js";
import { DtoProrationDetails } from "./dtoprorationdetails.js";
import { TypesSubscriptionChangeType } from "./typessubscriptionchangetype.js";
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
//# sourceMappingURL=dtosubscriptionchangepreviewresponse.d.ts.map