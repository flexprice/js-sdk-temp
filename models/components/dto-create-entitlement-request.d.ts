import * as z from "zod/v3";
import { TypesEntitlementEntityType } from "./types-entitlement-entity-type.js";
import { TypesEntitlementUsageResetPeriod } from "./types-entitlement-usage-reset-period.js";
import { TypesFeatureType } from "./types-feature-type.js";
export type DtoCreateEntitlementRequest = {
    endDate?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesEntitlementEntityType | undefined;
    featureId: string;
    featureType: TypesFeatureType;
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    parentEntitlementId?: string | undefined;
    planId?: string | undefined;
    startDate?: string | undefined;
    staticValue?: string | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesEntitlementUsageResetPeriod | undefined;
};
/** @internal */
export type DtoCreateEntitlementRequest$Outbound = {
    end_date?: string | undefined;
    entity_id?: string | undefined;
    entity_type?: string | undefined;
    feature_id: string;
    feature_type: string;
    is_enabled?: boolean | undefined;
    is_soft_limit?: boolean | undefined;
    parent_entitlement_id?: string | undefined;
    plan_id?: string | undefined;
    start_date?: string | undefined;
    static_value?: string | undefined;
    usage_limit?: number | undefined;
    usage_reset_period?: string | undefined;
};
/** @internal */
export declare const DtoCreateEntitlementRequest$outboundSchema: z.ZodType<DtoCreateEntitlementRequest$Outbound, z.ZodTypeDef, DtoCreateEntitlementRequest>;
export declare function dtoCreateEntitlementRequestToJSON(dtoCreateEntitlementRequest: DtoCreateEntitlementRequest): string;
//# sourceMappingURL=dto-create-entitlement-request.d.ts.map