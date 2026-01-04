import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Customers extends ClientSDK {
    /**
     * Get customers
     *
     * @remarks
     * Get customers
     */
    getCustomers(request: operations.GetCustomersRequest, options?: RequestOptions): Promise<components.DtoListCustomersResponse>;
    /**
     * Create a customer
     *
     * @remarks
     * Create a customer
     */
    postCustomers(request: components.DtoCreateCustomerRequest, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * Get a customer by external id
     *
     * @remarks
     * Get a customer by external id
     */
    getCustomersExternalExternalId(externalId: string, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * List customers by filter
     *
     * @remarks
     * List customers by filter
     */
    postCustomersSearch(request: components.TypesCustomerFilter, options?: RequestOptions): Promise<components.DtoListCustomersResponse>;
    /**
     * Get customer usage summary
     *
     * @remarks
     * Get customer usage summary by customer_id or customer_lookup_key (external_customer_id)
     */
    getCustomersUsage(request: operations.GetCustomersUsageRequest, options?: RequestOptions): Promise<components.DtoCustomerUsageSummaryResponse>;
    /**
     * Get a customer
     *
     * @remarks
     * Get a customer
     */
    getCustomersId(id: string, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * Update a customer
     *
     * @remarks
     * Update a customer
     */
    putCustomersId(id: string, body: components.DtoUpdateCustomerRequest, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * Delete a customer
     *
     * @remarks
     * Delete a customer
     */
    deleteCustomersId(id: string, options?: RequestOptions): Promise<void>;
    /**
     * Get customer entitlements
     *
     * @remarks
     * Get customer entitlements
     */
    getCustomersIdEntitlements(id: string, featureIds?: Array<string> | undefined, subscriptionIds?: Array<string> | undefined, options?: RequestOptions): Promise<components.DtoCustomerEntitlementsResponse>;
    /**
     * Get upcoming credit grant applications
     *
     * @remarks
     * Get upcoming credit grant applications for a customer
     */
    getCustomersIdGrantsUpcoming(id: string, options?: RequestOptions): Promise<components.DtoListCreditGrantApplicationsResponse>;
}
//# sourceMappingURL=customers.d.ts.map