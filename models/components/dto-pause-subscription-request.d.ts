import * as z from "zod/v3";
import { TypesPauseMode } from "./types-pause-mode.js";
/**
 * Request object for pausing an active subscription with various pause modes and options
 */
export type DtoPauseSubscriptionRequest = {
    /**
     * Whether to perform a dry run
     *
     * @remarks
     * @Description If true, validates the request and shows impact without actually pausing the subscription
     * @Example false
     */
    dryRun?: boolean | undefined;
    /**
     * Additional metadata as key-value pairs
     *
     * @remarks
     * @Description Optional metadata for storing additional information about the pause
     * @Example {"requested_by": "customer", "channel": "support_ticket"}
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * Duration of the pause in days
     *
     * @remarks
     * @Description Number of days to pause the subscription. Cannot be used together with pause_end. Must be greater than 0
     * @Example 30
     */
    pauseDays?: number | undefined;
    /**
     * End date for the subscription pause
     *
     * @remarks
     * @Description ISO 8601 timestamp when the pause should end. Cannot be used together with pause_days. Must be after pause_start
     * @Example "2024-02-15T00:00:00Z"
     */
    pauseEnd?: string | undefined;
    pauseMode: TypesPauseMode;
    /**
     * Start date for the subscription pause
     *
     * @remarks
     * @Description ISO 8601 timestamp when the pause should begin. Required when pause_mode is "scheduled"
     * @Example "2024-01-15T00:00:00Z"
     */
    pauseStart?: string | undefined;
    /**
     * Reason for pausing the subscription
     *
     * @remarks
     * @Description Optional reason for the pause. Maximum 255 characters
     * @Example "Customer requested temporary suspension"
     */
    reason?: string | undefined;
};
/** @internal */
export type DtoPauseSubscriptionRequest$Outbound = {
    dry_run?: boolean | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    pause_days?: number | undefined;
    pause_end?: string | undefined;
    pause_mode: string;
    pause_start?: string | undefined;
    reason?: string | undefined;
};
/** @internal */
export declare const DtoPauseSubscriptionRequest$outboundSchema: z.ZodType<DtoPauseSubscriptionRequest$Outbound, z.ZodTypeDef, DtoPauseSubscriptionRequest>;
export declare function dtoPauseSubscriptionRequestToJSON(dtoPauseSubscriptionRequest: DtoPauseSubscriptionRequest): string;
//# sourceMappingURL=dto-pause-subscription-request.d.ts.map