import * as z from "zod/v3";
import { TypesTaxRateEntityType } from "./typestaxrateentitytype.js";
export type DtoCreateTaxAssociationRequest = {
    autoApply?: boolean | undefined;
    currency?: string | undefined;
    entityId: string;
    entityType: TypesTaxRateEntityType;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    taxRateCode: string;
};
/** @internal */
export type DtoCreateTaxAssociationRequest$Outbound = {
    auto_apply?: boolean | undefined;
    currency?: string | undefined;
    entity_id: string;
    entity_type: string;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    tax_rate_code: string;
};
/** @internal */
export declare const DtoCreateTaxAssociationRequest$outboundSchema: z.ZodType<DtoCreateTaxAssociationRequest$Outbound, z.ZodTypeDef, DtoCreateTaxAssociationRequest>;
export declare function dtoCreateTaxAssociationRequestToJSON(dtoCreateTaxAssociationRequest: DtoCreateTaxAssociationRequest): string;
//# sourceMappingURL=dtocreatetaxassociationrequest.d.ts.map