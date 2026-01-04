import * as z from "zod/v3";
import { TypesCouponCadence } from "./typescouponcadence.js";
import { TypesCouponType } from "./typescoupontype.js";
export type DtoCreateCouponRequest = {
    amountOff?: string | undefined;
    cadence: TypesCouponCadence;
    currency?: string | undefined;
    durationInPeriods?: number | undefined;
    maxRedemptions?: number | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
    percentageOff?: string | undefined;
    redeemAfter?: string | undefined;
    redeemBefore?: string | undefined;
    rules?: {
        [k: string]: any;
    } | undefined;
    type: TypesCouponType;
};
/** @internal */
export type DtoCreateCouponRequest$Outbound = {
    amount_off?: string | undefined;
    cadence: string;
    currency?: string | undefined;
    duration_in_periods?: number | undefined;
    max_redemptions?: number | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
    percentage_off?: string | undefined;
    redeem_after?: string | undefined;
    redeem_before?: string | undefined;
    rules?: {
        [k: string]: any;
    } | undefined;
    type: string;
};
/** @internal */
export declare const DtoCreateCouponRequest$outboundSchema: z.ZodType<DtoCreateCouponRequest$Outbound, z.ZodTypeDef, DtoCreateCouponRequest>;
export declare function dtoCreateCouponRequestToJSON(dtoCreateCouponRequest: DtoCreateCouponRequest): string;
//# sourceMappingURL=dtocreatecouponrequest.d.ts.map