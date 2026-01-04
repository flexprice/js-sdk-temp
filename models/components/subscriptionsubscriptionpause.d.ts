import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesPauseMode } from "./typespausemode.js";
import { TypesPauseStatus } from "./typespausestatus.js";
import { TypesResumeMode } from "./typesresumemode.js";
import { TypesStatus } from "./typesstatus.js";
export type SubscriptionSubscriptionPause = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * EnvironmentID is the environment identifier for the pause
     */
    environmentId?: string | undefined;
    /**
     * ID is the unique identifier for the subscription pause
     */
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * OriginalPeriodEnd is the end of the billing period when the pause was created
     */
    originalPeriodEnd?: string | undefined;
    /**
     * OriginalPeriodStart is the start of the billing period when the pause was created
     */
    originalPeriodStart?: string | undefined;
    /**
     * PauseEnd is when the pause will end (null for indefinite)
     */
    pauseEnd?: string | undefined;
    pauseMode?: TypesPauseMode | undefined;
    /**
     * PauseStart is when the pause actually started
     */
    pauseStart?: string | undefined;
    pauseStatus?: TypesPauseStatus | undefined;
    /**
     * Reason is the reason for pausing
     */
    reason?: string | undefined;
    resumeMode?: TypesResumeMode | undefined;
    /**
     * ResumedAt is when the pause was actually ended (if manually resumed)
     */
    resumedAt?: string | undefined;
    status?: TypesStatus | undefined;
    /**
     * SubscriptionID is the identifier for the subscription
     */
    subscriptionId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const SubscriptionSubscriptionPause$inboundSchema: z.ZodType<SubscriptionSubscriptionPause, z.ZodTypeDef, unknown>;
export declare function subscriptionSubscriptionPauseFromJSON(jsonString: string): SafeParseResult<SubscriptionSubscriptionPause, SDKValidationError>;
//# sourceMappingURL=subscriptionsubscriptionpause.d.ts.map