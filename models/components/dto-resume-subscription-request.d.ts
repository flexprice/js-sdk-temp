import * as z from "zod/v3";
import { TypesResumeMode } from "./types-resume-mode.js";
/**
 * Request object for resuming a paused subscription
 */
export type DtoResumeSubscriptionRequest = {
    /**
     * Whether to perform a dry run
     *
     * @remarks
     * @Description If true, validates the request and shows impact without actually resuming the subscription
     * @Example false
     */
    dryRun?: boolean | undefined;
    /**
     * Additional metadata as key-value pairs
     *
     * @remarks
     * @Description Optional metadata for storing additional information about the resume operation
     * @Example {"resumed_by": "admin", "reason": "issue_resolved"}
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    resumeMode: TypesResumeMode;
};
/** @internal */
export type DtoResumeSubscriptionRequest$Outbound = {
    dry_run?: boolean | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    resume_mode: string;
};
/** @internal */
export declare const DtoResumeSubscriptionRequest$outboundSchema: z.ZodType<DtoResumeSubscriptionRequest$Outbound, z.ZodTypeDef, DtoResumeSubscriptionRequest>;
export declare function dtoResumeSubscriptionRequestToJSON(dtoResumeSubscriptionRequest: DtoResumeSubscriptionRequest): string;
//# sourceMappingURL=dto-resume-subscription-request.d.ts.map