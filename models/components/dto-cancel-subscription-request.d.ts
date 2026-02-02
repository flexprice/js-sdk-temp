import * as z from "zod/v3";
import { TypesCancellationType } from "./types-cancellation-type.js";
import { TypesProrationBehavior } from "./types-proration-behavior.js";
export type DtoCancelSubscriptionRequest = {
    cancellationType: TypesCancellationType;
    prorationBehavior?: TypesProrationBehavior | undefined;
    /**
     * Reason for cancellation (for audit and business intelligence)
     */
    reason?: string | undefined;
};
/** @internal */
export type DtoCancelSubscriptionRequest$Outbound = {
    cancellation_type: string;
    proration_behavior?: string | undefined;
    reason?: string | undefined;
};
/** @internal */
export declare const DtoCancelSubscriptionRequest$outboundSchema: z.ZodType<DtoCancelSubscriptionRequest$Outbound, z.ZodTypeDef, DtoCancelSubscriptionRequest>;
export declare function dtoCancelSubscriptionRequestToJSON(dtoCancelSubscriptionRequest: DtoCancelSubscriptionRequest): string;
//# sourceMappingURL=dto-cancel-subscription-request.d.ts.map