import * as z from "zod/v3";
import { TypesSubscriptionScheduleChangeType } from "./types-subscription-schedule-change-type.js";
/**
 * Request to cancel a subscription schedule (supports two modes)
 */
export type DtoCancelScheduleRequest = {
    /**
     * schedule_id is the ID of the schedule to cancel (optional if subscription_id and schedule_type are provided)
     */
    scheduleId?: string | undefined;
    scheduleType?: TypesSubscriptionScheduleChangeType | undefined;
    /**
     * subscription_id is the ID of the subscription (required if schedule_id is not provided)
     */
    subscriptionId?: string | undefined;
};
/** @internal */
export type DtoCancelScheduleRequest$Outbound = {
    schedule_id?: string | undefined;
    schedule_type?: string | undefined;
    subscription_id?: string | undefined;
};
/** @internal */
export declare const DtoCancelScheduleRequest$outboundSchema: z.ZodType<DtoCancelScheduleRequest$Outbound, z.ZodTypeDef, DtoCancelScheduleRequest>;
export declare function dtoCancelScheduleRequestToJSON(dtoCancelScheduleRequest: DtoCancelScheduleRequest): string;
//# sourceMappingURL=dto-cancel-schedule-request.d.ts.map