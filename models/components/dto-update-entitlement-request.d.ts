import * as z from "zod/v3";
import { TypesEntitlementUsageResetPeriod } from "./types-entitlement-usage-reset-period.js";
export type DtoUpdateEntitlementRequest = {
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    staticValue?: string | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesEntitlementUsageResetPeriod | undefined;
};
/** @internal */
export type DtoUpdateEntitlementRequest$Outbound = {
    is_enabled?: boolean | undefined;
    is_soft_limit?: boolean | undefined;
    static_value?: string | undefined;
    usage_limit?: number | undefined;
    usage_reset_period?: string | undefined;
};
/** @internal */
export declare const DtoUpdateEntitlementRequest$outboundSchema: z.ZodType<DtoUpdateEntitlementRequest$Outbound, z.ZodTypeDef, DtoUpdateEntitlementRequest>;
export declare function dtoUpdateEntitlementRequestToJSON(dtoUpdateEntitlementRequest: DtoUpdateEntitlementRequest): string;
//# sourceMappingURL=dto-update-entitlement-request.d.ts.map