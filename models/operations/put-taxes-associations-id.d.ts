import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutTaxesAssociationsIdRequest = {
    /**
     * Tax Config ID
     */
    id: string;
    /**
     * Tax Config Request
     */
    body: components.DtoTaxAssociationUpdateRequest;
};
/** @internal */
export type PutTaxesAssociationsIdRequest$Outbound = {
    id: string;
    body: components.DtoTaxAssociationUpdateRequest$Outbound;
};
/** @internal */
export declare const PutTaxesAssociationsIdRequest$outboundSchema: z.ZodType<PutTaxesAssociationsIdRequest$Outbound, z.ZodTypeDef, PutTaxesAssociationsIdRequest>;
export declare function putTaxesAssociationsIdRequestToJSON(putTaxesAssociationsIdRequest: PutTaxesAssociationsIdRequest): string;
//# sourceMappingURL=put-taxes-associations-id.d.ts.map