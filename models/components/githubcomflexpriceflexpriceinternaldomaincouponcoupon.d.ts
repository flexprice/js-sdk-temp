import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesCouponCadence } from "./typescouponcadence.js";
import { TypesCouponType } from "./typescoupontype.js";
import { TypesStatus } from "./typesstatus.js";
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
//# sourceMappingURL=githubcomflexpriceflexpriceinternaldomaincouponcoupon.d.ts.map