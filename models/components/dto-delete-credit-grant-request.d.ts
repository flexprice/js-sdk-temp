import * as z from "zod/v3";
export type DtoDeleteCreditGrantRequest = {
    /**
     * EffectiveDate is optional; when set (subscription scope) the grant end date is set to this time.
     */
    effectiveDate?: string | undefined;
};
/** @internal */
export type DtoDeleteCreditGrantRequest$Outbound = {
    effective_date?: string | undefined;
};
/** @internal */
export declare const DtoDeleteCreditGrantRequest$outboundSchema: z.ZodType<DtoDeleteCreditGrantRequest$Outbound, z.ZodTypeDef, DtoDeleteCreditGrantRequest>;
export declare function dtoDeleteCreditGrantRequestToJSON(dtoDeleteCreditGrantRequest: DtoDeleteCreditGrantRequest): string;
//# sourceMappingURL=dto-delete-credit-grant-request.d.ts.map