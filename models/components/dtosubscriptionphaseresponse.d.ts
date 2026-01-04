import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoSubscriptionPhaseResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * EndDate is when the phase ends (nil if phase is still active or indefinite)
     */
    endDate?: string | undefined;
    /**
     * EnvironmentID is the environment identifier for the phase
     */
    environmentId?: string | undefined;
    /**
     * ID is the unique identifier for the subscription phase
     */
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * StartDate is when the phase starts
     */
    startDate?: string | undefined;
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
export declare const DtoSubscriptionPhaseResponse$inboundSchema: z.ZodType<DtoSubscriptionPhaseResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionPhaseResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionPhaseResponse, SDKValidationError>;
//# sourceMappingURL=dtosubscriptionphaseresponse.d.ts.map