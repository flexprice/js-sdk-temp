import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostV1SubscriptionsSchedulesScheduleIdCancelRequest = {
    /**
     * Schedule ID (optional if using request body)
     */
    scheduleId: string;
    /**
     * Cancel request (optional if using path parameter)
     */
    body?: components.DtoCancelScheduleRequest | undefined;
};
/** @internal */
export type PostV1SubscriptionsSchedulesScheduleIdCancelRequest$Outbound = {
    schedule_id: string;
    body?: components.DtoCancelScheduleRequest$Outbound | undefined;
};
/** @internal */
export declare const PostV1SubscriptionsSchedulesScheduleIdCancelRequest$outboundSchema: z.ZodType<PostV1SubscriptionsSchedulesScheduleIdCancelRequest$Outbound, z.ZodTypeDef, PostV1SubscriptionsSchedulesScheduleIdCancelRequest>;
export declare function postV1SubscriptionsSchedulesScheduleIdCancelRequestToJSON(postV1SubscriptionsSchedulesScheduleIdCancelRequest: PostV1SubscriptionsSchedulesScheduleIdCancelRequest): string;
//# sourceMappingURL=post-v1-subscriptions-schedules-schedule-id-cancel.d.ts.map