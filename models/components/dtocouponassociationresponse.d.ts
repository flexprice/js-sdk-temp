import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { GithubComFlexpriceFlexpriceInternalDomainCouponCoupon } from "./githubcomflexpriceflexpriceinternaldomaincouponcoupon.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoCouponAssociationResponse = {
    coupon?: GithubComFlexpriceFlexpriceInternalDomainCouponCoupon | undefined;
    couponId?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Optional
     */
    endDate?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    /**
     * Mandatory
     */
    subscriptionId?: string | undefined;
    /**
     * Optional
     */
    subscriptionLineItemId?: string | undefined;
    /**
     * Optional
     */
    subscriptionPhaseId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCouponAssociationResponse$inboundSchema: z.ZodType<DtoCouponAssociationResponse, z.ZodTypeDef, unknown>;
export declare function dtoCouponAssociationResponseFromJSON(jsonString: string): SafeParseResult<DtoCouponAssociationResponse, SDKValidationError>;
//# sourceMappingURL=dtocouponassociationresponse.d.ts.map