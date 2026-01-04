import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class TaxAssociations extends ClientSDK {
    /**
     * List tax associations
     *
     * @remarks
     * List tax associations
     */
    getTaxesAssociations(entityType?: string | undefined, entityId?: string | undefined, taxRateId?: string | undefined, options?: RequestOptions): Promise<components.DtoListTaxAssociationsResponse>;
    /**
     * Create Tax Association
     *
     * @remarks
     * Create a new tax association
     */
    postTaxesAssociations(request: components.DtoCreateTaxAssociationRequest, options?: RequestOptions): Promise<components.DtoTaxAssociationResponse>;
    /**
     * Get Tax Association
     *
     * @remarks
     * Get a tax association by ID
     */
    getTaxesAssociationsId(id: string, options?: RequestOptions): Promise<components.DtoTaxAssociationResponse>;
    /**
     * Update tax association
     *
     * @remarks
     * Update a tax association by ID
     */
    putTaxesAssociationsId(id: string, body: components.DtoTaxAssociationUpdateRequest, options?: RequestOptions): Promise<components.DtoTaxAssociationResponse>;
    /**
     * Delete tax association
     *
     * @remarks
     * Delete a tax association by ID
     */
    deleteTaxesAssociationsId(id: string, options?: RequestOptions): Promise<components.DtoTaxAssociationResponse>;
}
//# sourceMappingURL=taxassociations.d.ts.map