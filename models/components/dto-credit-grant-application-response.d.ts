import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesApplicationStatus } from "./types-application-status.js";
import { TypesCreditGrantApplicationReason } from "./types-credit-grant-application-reason.js";
import { TypesStatus } from "./types-status.js";
import { TypesSubscriptionStatus } from "./types-subscription-status.js";
export type DtoCreditGrantApplicationResponse = {
    applicationReason?: TypesCreditGrantApplicationReason | undefined;
    applicationStatus?: TypesApplicationStatus | undefined;
    appliedAt?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    creditGrantId?: string | undefined;
    credits?: number | undefined;
    environmentId?: string | undefined;
    failureReason?: string | undefined;
    id?: string | undefined;
    idempotencyKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    periodEnd?: string | undefined;
    periodStart?: string | undefined;
    retryCount?: number | undefined;
    scheduledFor?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
    subscriptionStatusAtApplication?: TypesSubscriptionStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCreditGrantApplicationResponse$inboundSchema: z.ZodType<DtoCreditGrantApplicationResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreditGrantApplicationResponseFromJSON(jsonString: string): SafeParseResult<DtoCreditGrantApplicationResponse, SDKValidationError>;
//# sourceMappingURL=dto-credit-grant-application-response.d.ts.map