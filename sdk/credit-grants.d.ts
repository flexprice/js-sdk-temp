import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class CreditGrants extends ClientSDK {
    /**
     * Get credit grants
     *
     * @remarks
     * Get credit grants with the specified filter
     */
    getCreditgrants(request: operations.GetCreditgrantsRequest, options?: RequestOptions): Promise<components.DtoListCreditGrantsResponse>;
    /**
     * Create a new credit grant
     *
     * @remarks
     * Create a new credit grant with the specified configuration
     */
    postCreditgrants(request: components.DtoCreateCreditGrantRequest, options?: RequestOptions): Promise<components.DtoCreditGrantResponse>;
    /**
     * Get a credit grant by ID
     *
     * @remarks
     * Get a credit grant by ID
     */
    getCreditgrantsId(id: string, options?: RequestOptions): Promise<components.DtoCreditGrantResponse>;
    /**
     * Update a credit grant
     *
     * @remarks
     * Update a credit grant with the specified configuration
     */
    putCreditgrantsId(id: string, body: components.DtoUpdateCreditGrantRequest, options?: RequestOptions): Promise<components.DtoCreditGrantResponse>;
    /**
     * Delete a credit grant
     *
     * @remarks
     * Delete a credit grant
     */
    deleteCreditgrantsId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Get plan credit grants
     *
     * @remarks
     * Get all credit grants for a plan
     */
    getPlansIdCreditgrants(id: string, options?: RequestOptions): Promise<components.DtoListCreditGrantsResponse>;
}
//# sourceMappingURL=credit-grants.d.ts.map