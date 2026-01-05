import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class CustomerDashboard extends ClientSDK {
    /**
     * Create a customer dashboard session
     *
     * @remarks
     * Generate a dashboard URL/token for a customer to access their billing information
     */
    getCustomerDashboardExternalId(options?: RequestOptions): Promise<components.DtoDashboardSessionResponse>;
    /**
     * Get customer analytics
     *
     * @remarks
     * Get usage analytics for the authenticated customer
     */
    postCustomerDashboardAnalytics(security: operations.PostCustomerDashboardAnalyticsSecurity, request: components.DtoDashboardAnalyticsRequest, options?: RequestOptions): Promise<components.DtoGetUsageAnalyticsResponse>;
    /**
     * Get customer cost analytics
     *
     * @remarks
     * Get cost analytics for the authenticated customer
     */
    postCustomerDashboardCostAnalytics(security: operations.PostCustomerDashboardCostAnalyticsSecurity, request: components.DtoDashboardCostAnalyticsRequest, options?: RequestOptions): Promise<components.DtoGetDetailedCostAnalyticsResponse>;
    /**
     * Get customer information
     *
     * @remarks
     * Get the authenticated customer's information
     */
    getCustomerDashboardInfo(security: operations.GetCustomerDashboardInfoSecurity, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * Update customer information
     *
     * @remarks
     * Update the authenticated customer's profile information
     */
    putCustomerDashboardInfo(security: operations.PutCustomerDashboardInfoSecurity, request: components.DtoUpdateCustomerRequest, options?: RequestOptions): Promise<components.DtoCustomerResponse>;
    /**
     * Get customer invoices
     *
     * @remarks
     * Get all invoices for the authenticated customer with pagination
     */
    postCustomerDashboardInvoices(security: operations.PostCustomerDashboardInvoicesSecurity, request: components.DtoDashboardPaginatedRequest, options?: RequestOptions): Promise<components.DtoListInvoicesResponse>;
    /**
     * Get invoice by ID
     *
     * @remarks
     * Get a specific invoice for the authenticated customer
     */
    getCustomerDashboardInvoicesId(security: operations.GetCustomerDashboardInvoicesIdSecurity, id: string, options?: RequestOptions): Promise<components.DtoInvoiceResponse>;
    /**
     * Get customer subscriptions
     *
     * @remarks
     * Get all subscriptions for the authenticated customer with pagination
     */
    postCustomerDashboardSubscriptions(security: operations.PostCustomerDashboardSubscriptionsSecurity, request: components.DtoDashboardPaginatedRequest, options?: RequestOptions): Promise<components.DtoListSubscriptionsResponse>;
    /**
     * Get subscription by ID
     *
     * @remarks
     * Get a specific subscription for the authenticated customer
     */
    getCustomerDashboardSubscriptionsId(security: operations.GetCustomerDashboardSubscriptionsIdSecurity, id: string, options?: RequestOptions): Promise<components.DtoSubscriptionResponse>;
    /**
     * Get customer usage summary
     *
     * @remarks
     * Get usage summary for the authenticated customer's metered features
     */
    getCustomerDashboardUsage(security: operations.GetCustomerDashboardUsageSecurity, request: operations.GetCustomerDashboardUsageRequest, options?: RequestOptions): Promise<components.DtoCustomerUsageSummaryResponse>;
    /**
     * Get customer wallets
     *
     * @remarks
     * Get all wallet balances for the authenticated customer
     */
    postCustomerDashboardWallets(security: operations.PostCustomerDashboardWalletsSecurity, options?: RequestOptions): Promise<Array<components.DtoWalletBalanceResponse>>;
    /**
     * Get wallet by ID
     *
     * @remarks
     * Get a specific wallet for the authenticated customer
     */
    getCustomerDashboardWalletsId(security: operations.GetCustomerDashboardWalletsIdSecurity, id: string, options?: RequestOptions): Promise<components.DtoWalletBalanceResponse>;
}
//# sourceMappingURL=customerdashboard.d.ts.map