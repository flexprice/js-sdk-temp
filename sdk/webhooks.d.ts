import { ClientSDK, RequestOptions } from "../lib/sdks.js";
export declare class Webhooks extends ClientSDK {
    /**
     * Handle Chargebee webhook events
     *
     * @remarks
     * Process incoming Chargebee webhook events for payment status updates
     */
    postWebhooksChargebeeTenantIdEnvironmentId(tenantId: string, environmentId: string, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Handle HubSpot webhook events
     *
     * @remarks
     * Process incoming HubSpot webhook events for deal closed won and customer creation
     */
    postWebhooksHubspotTenantIdEnvironmentId(tenantId: string, environmentId: string, xHubSpotSignatureV3: string, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Handle Nomod webhook events
     *
     * @remarks
     * Process incoming Nomod webhook events for payment and invoice payments
     */
    postWebhooksNomodTenantIdEnvironmentId(tenantId: string, environmentId: string, xApiKey?: string | undefined, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Handle QuickBooks webhook events
     *
     * @remarks
     * Process incoming QuickBooks webhook events for payment sync
     */
    postWebhooksQuickbooksTenantIdEnvironmentId(tenantId: string, environmentId: string, intuitSignature?: string | undefined, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Handle Razorpay webhook events
     *
     * @remarks
     * Process incoming Razorpay webhook events for payment capture and failure
     */
    postWebhooksRazorpayTenantIdEnvironmentId(tenantId: string, environmentId: string, xRazorpaySignature: string, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Handle Stripe webhook events
     *
     * @remarks
     * Process incoming Stripe webhook events for payment status updates and customer creation
     */
    postWebhooksStripeTenantIdEnvironmentId(tenantId: string, environmentId: string, stripeSignature: string, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
}
//# sourceMappingURL=webhooks.d.ts.map