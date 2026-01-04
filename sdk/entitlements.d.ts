import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Entitlements extends ClientSDK {
    /**
     * Get addon entitlements
     *
     * @remarks
     * Get all entitlements for an addon
     */
    getAddonsIdEntitlements(id: string, options?: RequestOptions): Promise<components.DtoListEntitlementsResponse>;
    /**
     * Get entitlements
     *
     * @remarks
     * Get entitlements with the specified filter
     */
    getEntitlements(request: operations.GetEntitlementsRequest, options?: RequestOptions): Promise<components.DtoListEntitlementsResponse>;
    /**
     * Create a new entitlement
     *
     * @remarks
     * Create a new entitlement with the specified configuration
     */
    postEntitlements(request: components.DtoCreateEntitlementRequest, options?: RequestOptions): Promise<components.DtoEntitlementResponse>;
    /**
     * Create multiple entitlements in bulk
     *
     * @remarks
     * Create multiple entitlements with the specified configurations
     */
    postEntitlementsBulk(request: components.DtoCreateBulkEntitlementRequest, options?: RequestOptions): Promise<components.DtoCreateBulkEntitlementResponse>;
    /**
     * List entitlements by filter
     *
     * @remarks
     * List entitlements by filter
     */
    postEntitlementsSearch(request: components.TypesEntitlementFilter, options?: RequestOptions): Promise<components.DtoListEntitlementsResponse>;
    /**
     * Get an entitlement by ID
     *
     * @remarks
     * Get an entitlement by ID
     */
    getEntitlementsId(id: string, options?: RequestOptions): Promise<components.DtoEntitlementResponse>;
    /**
     * Update an entitlement
     *
     * @remarks
     * Update an entitlement with the specified configuration
     */
    putEntitlementsId(id: string, body: components.DtoUpdateEntitlementRequest, options?: RequestOptions): Promise<components.DtoEntitlementResponse>;
    /**
     * Delete an entitlement
     *
     * @remarks
     * Delete an entitlement
     */
    deleteEntitlementsId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Get plan entitlements
     *
     * @remarks
     * Get all entitlements for a plan
     */
    getPlansIdEntitlements(id: string, options?: RequestOptions): Promise<components.DtoPlanResponse>;
}
//# sourceMappingURL=entitlements.d.ts.map