import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesCouponType } from "./types-coupon-type.js";
import { TypesStatus } from "./types-status.js";
export type DtoCouponApplicationResponse = {
    appliedAt?: string | undefined;
    couponAssociationId?: string | undefined;
    couponId?: string | undefined;
    couponSnapshot?: {
        [k: string]: any;
    } | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    discountPercentage?: string | undefined;
    discountType?: TypesCouponType | undefined;
    discountedAmount?: string | undefined;
    environmentId?: string | undefined;
    finalPrice?: string | undefined;
    id?: string | undefined;
    invoiceId?: string | undefined;
    invoiceLineItemId?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    originalPrice?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCouponApplicationResponse$inboundSchema: z.ZodType<DtoCouponApplicationResponse, z.ZodTypeDef, unknown>;
export declare function dtoCouponApplicationResponseFromJSON(jsonString: string): SafeParseResult<DtoCouponApplicationResponse, SDKValidationError>;
//# sourceMappingURL=dto-coupon-application-response.d.ts.map