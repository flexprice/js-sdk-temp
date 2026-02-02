import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesStatus } from "./types-status.js";
export type GithubComFlexpriceFlexpriceInternalDomainPlanPlan = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    displayOrder?: number | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const GithubComFlexpriceFlexpriceInternalDomainPlanPlan$inboundSchema: z.ZodType<GithubComFlexpriceFlexpriceInternalDomainPlanPlan, z.ZodTypeDef, unknown>;
export declare function githubComFlexpriceFlexpriceInternalDomainPlanPlanFromJSON(jsonString: string): SafeParseResult<GithubComFlexpriceFlexpriceInternalDomainPlanPlan, SDKValidationError>;
//# sourceMappingURL=github-com-flexprice-flexprice-internal-domain-plan-plan.d.ts.map