import * as z from "zod/v3";
export type DtoUpdateCouponRequest = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateCouponRequest$Outbound = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateCouponRequest$outboundSchema: z.ZodType<DtoUpdateCouponRequest$Outbound, z.ZodTypeDef, DtoUpdateCouponRequest>;
export declare function dtoUpdateCouponRequestToJSON(dtoUpdateCouponRequest: DtoUpdateCouponRequest): string;
//# sourceMappingURL=dtoupdatecouponrequest.d.ts.map