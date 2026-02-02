import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesCouponCadence } from "./types-coupon-cadence.js";
import { TypesCouponType } from "./types-coupon-type.js";
import { TypesStatus } from "./types-status.js";
export type GithubComFlexpriceFlexpriceInternalDomainCouponCoupon = {
    amountOff?: string | undefined;
    cadence?: TypesCouponCadence | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    durationInPeriods?: number | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    maxRedemptions?: number | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    percentageOff?: string | undefined;
    redeemAfter?: string | undefined;
    redeemBefore?: string | undefined;
    rules?: {
        [k: string]: any;
    } | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    totalRedemptions?: number | undefined;
    type?: TypesCouponType | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const GithubComFlexpriceFlexpriceInternalDomainCouponCoupon$inboundSchema: z.ZodType<GithubComFlexpriceFlexpriceInternalDomainCouponCoupon, z.ZodTypeDef, unknown>;
export declare function githubComFlexpriceFlexpriceInternalDomainCouponCouponFromJSON(jsonString: string): SafeParseResult<GithubComFlexpriceFlexpriceInternalDomainCouponCoupon, SDKValidationError>;
//# sourceMappingURL=github-com-flexprice-flexprice-internal-domain-coupon-coupon.d.ts.map