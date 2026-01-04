import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoInvoiceResponse } from "./dtoinvoiceresponse.js";
import { DtoProrationDetail } from "./dtoprorationdetail.js";
import { TypesCancellationType } from "./typescancellationtype.js";
import { TypesSubscriptionStatus } from "./typessubscriptionstatus.js";
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
//# sourceMappingURL=dtocancelsubscriptionresponse.d.ts.map