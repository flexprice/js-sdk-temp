import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
/**
 * Schedule Update Billing Period Request
 */
export type PostTasksScheduledScheduleUpdateBillingPeriodRequest = {};
/**
 * OK
 */
export type PostTasksScheduledScheduleUpdateBillingPeriodResponse = {};
/** @internal */
export type PostTasksScheduledScheduleUpdateBillingPeriodRequest$Outbound = {};
/** @internal */
export declare const PostTasksScheduledScheduleUpdateBillingPeriodRequest$outboundSchema: z.ZodType<PostTasksScheduledScheduleUpdateBillingPeriodRequest$Outbound, z.ZodTypeDef, PostTasksScheduledScheduleUpdateBillingPeriodRequest>;
export declare function postTasksScheduledScheduleUpdateBillingPeriodRequestToJSON(postTasksScheduledScheduleUpdateBillingPeriodRequest: PostTasksScheduledScheduleUpdateBillingPeriodRequest): string;
/** @internal */
export declare const PostTasksScheduledScheduleUpdateBillingPeriodResponse$inboundSchema: z.ZodType<PostTasksScheduledScheduleUpdateBillingPeriodResponse, z.ZodTypeDef, unknown>;
export declare function postTasksScheduledScheduleUpdateBillingPeriodResponseFromJSON(jsonString: string): SafeParseResult<PostTasksScheduledScheduleUpdateBillingPeriodResponse, SDKValidationError>;
//# sourceMappingURL=post-tasks-scheduled-schedule-update-billing-period.d.ts.map