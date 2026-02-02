import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoInvoiceResponse } from "./dto-invoice-response.js";
import { DtoProrationDetail } from "./dto-proration-detail.js";
import { TypesCancellationType } from "./types-cancellation-type.js";
import { TypesSubscriptionStatus } from "./types-subscription-status.js";
export type DtoCancelSubscriptionResponse = {
    cancellationType?: TypesCancellationType | undefined;
    effectiveDate?: string | undefined;
    /**
     * Response metadata
     */
    message?: string | undefined;
    processedAt?: string | undefined;
    prorationDetails?: Array<DtoProrationDetail> | undefined;
    prorationInvoice?: DtoInvoiceResponse | undefined;
    reason?: string | undefined;
    status?: TypesSubscriptionStatus | undefined;
    /**
     * Basic cancellation info
     */
    subscriptionId?: string | undefined;
    totalCreditAmount?: string | undefined;
};
/** @internal */
export declare const DtoCancelSubscriptionResponse$inboundSchema: z.ZodType<DtoCancelSubscriptionResponse, z.ZodTypeDef, unknown>;
export declare function dtoCancelSubscriptionResponseFromJSON(jsonString: string): SafeParseResult<DtoCancelSubscriptionResponse, SDKValidationError>;
//# sourceMappingURL=dto-cancel-subscription-response.d.ts.map