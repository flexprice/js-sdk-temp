import * as z from "zod/v3";
export type DtoTaxAssociationUpdateRequest = {
    autoApply?: boolean | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
};
/** @internal */
export type DtoTaxAssociationUpdateRequest$Outbound = {
    auto_apply?: boolean | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
};
/** @internal */
export declare const DtoTaxAssociationUpdateRequest$outboundSchema: z.ZodType<DtoTaxAssociationUpdateRequest$Outbound, z.ZodTypeDef, DtoTaxAssociationUpdateRequest>;
export declare function dtoTaxAssociationUpdateRequestToJSON(dtoTaxAssociationUpdateRequest: DtoTaxAssociationUpdateRequest): string;
//# sourceMappingURL=dtotaxassociationupdaterequest.d.ts.map