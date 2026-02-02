import * as z from "zod/v3";
export type DtoOverrideEntitlementRequest = {
    /**
     * EntitlementID references the plan/addon entitlement to override
     */
    entitlementId: string;
    /**
     * IsEnabled determines if the entitlement is enabled or disabled
     */
    isEnabled?: boolean | undefined;
    /**
     * StaticValue is the static value for static features
     */
    staticValue?: string | undefined;
    /**
     * UsageLimit is the new usage limit (only these 3 fields can be overridden)
     *
     * @remarks
     * For metered features, nil means unlimited usage
     */
    usageLimit?: number | undefined;
};
/** @internal */
export type DtoOverrideEntitlementRequest$Outbound = {
    entitlement_id: string;
    is_enabled?: boolean | undefined;
    static_value?: string | undefined;
    usage_limit?: number | undefined;
};
/** @internal */
export declare const DtoOverrideEntitlementRequest$outboundSchema: z.ZodType<DtoOverrideEntitlementRequest$Outbound, z.ZodTypeDef, DtoOverrideEntitlementRequest>;
export declare function dtoOverrideEntitlementRequestToJSON(dtoOverrideEntitlementRequest: DtoOverrideEntitlementRequest): string;
//# sourceMappingURL=dto-override-entitlement-request.d.ts.map