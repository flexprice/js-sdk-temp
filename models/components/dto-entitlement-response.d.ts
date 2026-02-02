import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAddonResponse } from "./dto-addon-response.js";
import { DtoFeatureResponse } from "./dto-feature-response.js";
import { DtoPlanResponse } from "./dto-plan-response.js";
import { TypesEntitlementEntityType } from "./types-entitlement-entity-type.js";
import { TypesEntitlementUsageResetPeriod } from "./types-entitlement-usage-reset-period.js";
import { TypesFeatureType } from "./types-feature-type.js";
import { TypesStatus } from "./types-status.js";
export type DtoEntitlementResponse = {
    addon?: DtoAddonResponse | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    displayOrder?: number | undefined;
    endDate?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesEntitlementEntityType | undefined;
    environmentId?: string | undefined;
    feature?: DtoFeatureResponse | undefined;
    featureId?: string | undefined;
    featureType?: TypesFeatureType | undefined;
    id?: string | undefined;
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    parentEntitlementId?: string | undefined;
    plan?: DtoPlanResponse | undefined;
    /**
     * TODO: Remove this once we have a proper entitlement entity type
     */
    planId?: string | undefined;
    startDate?: string | undefined;
    staticValue?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesEntitlementUsageResetPeriod | undefined;
};
/** @internal */
export declare const DtoEntitlementResponse$inboundSchema: z.ZodType<DtoEntitlementResponse, z.ZodTypeDef, unknown>;
export declare function dtoEntitlementResponseFromJSON(jsonString: string): SafeParseResult<DtoEntitlementResponse, SDKValidationError>;
//# sourceMappingURL=dto-entitlement-response.d.ts.map