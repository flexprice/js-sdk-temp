import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesScheduleStatus } from "./types-schedule-status.js";
import { TypesSubscriptionScheduleChangeType } from "./types-subscription-schedule-change-type.js";
/**
 * configuration contains type-specific configuration (e.g., target_plan_id for plan changes)
 */
export type Configuration = {};
/**
 * execution_result contains type-specific execution result
 */
export type ExecutionResult = {};
/**
 * Full details of a subscription schedule
 */
export type DtoSubscriptionScheduleResponse = {
    /**
     * can_be_cancelled indicates if the schedule can be cancelled
     */
    canBeCancelled?: boolean | undefined;
    /**
     * cancelled_at is when the schedule was cancelled
     */
    cancelledAt?: string | undefined;
    /**
     * configuration contains type-specific configuration (e.g., target_plan_id for plan changes)
     */
    configuration?: Configuration | undefined;
    /**
     * created_at timestamp
     */
    createdAt?: string | undefined;
    /**
     * days_until_execution is the number of days until execution
     */
    daysUntilExecution?: number | undefined;
    /**
     * error_message contains the error if execution failed
     */
    errorMessage?: string | undefined;
    /**
     * executed_at is when the schedule was executed
     */
    executedAt?: string | undefined;
    /**
     * execution_result contains type-specific execution result
     */
    executionResult?: ExecutionResult | undefined;
    /**
     * id of the schedule
     */
    id?: string | undefined;
    /**
     * metadata from the schedule
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    scheduleType?: TypesSubscriptionScheduleChangeType | undefined;
    /**
     * scheduled_at is when the schedule will execute
     */
    scheduledAt?: string | undefined;
    status?: TypesScheduleStatus | undefined;
    /**
     * subscription_id is the ID of the subscription
     */
    subscriptionId?: string | undefined;
    /**
     * updated_at timestamp
     */
    updatedAt?: string | undefined;
};
/** @internal */
export declare const Configuration$inboundSchema: z.ZodType<Configuration, z.ZodTypeDef, unknown>;
export declare function configurationFromJSON(jsonString: string): SafeParseResult<Configuration, SDKValidationError>;
/** @internal */
export declare const ExecutionResult$inboundSchema: z.ZodType<ExecutionResult, z.ZodTypeDef, unknown>;
export declare function executionResultFromJSON(jsonString: string): SafeParseResult<ExecutionResult, SDKValidationError>;
/** @internal */
export declare const DtoSubscriptionScheduleResponse$inboundSchema: z.ZodType<DtoSubscriptionScheduleResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionScheduleResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionScheduleResponse, SDKValidationError>;
//# sourceMappingURL=dto-subscription-schedule-response.d.ts.map