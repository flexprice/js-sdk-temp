import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Tenants extends ClientSDK {
    /**
     * Get billing usage for the current tenant
     *
     * @remarks
     * Get the subscription and usage details for the current tenant
     */
    getTenantBilling(options?: RequestOptions): Promise<components.DtoTenantBillingUsage>;
    /**
     * Create a new tenant
     *
     * @remarks
     * Create a new tenant
     */
    postTenants(request: components.DtoCreateTenantRequest, options?: RequestOptions): Promise<components.DtoTenantResponse>;
    /**
     * Update a tenant
     *
     * @remarks
     * Update a tenant's details including name and billing information
     */
    putTenantsUpdate(request: components.DtoUpdateTenantRequest, options?: RequestOptions): Promise<components.DtoTenantResponse>;
    /**
     * Get tenant by ID
     *
     * @remarks
     * Get tenant by ID
     */
    getTenantsId(id: string, options?: RequestOptions): Promise<components.DtoTenantResponse>;
}
//# sourceMappingURL=tenants.d.ts.map