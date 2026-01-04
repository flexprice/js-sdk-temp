import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Subscriptions extends ClientSDK {
    /**
     * List subscriptions
     *
     * @remarks
     * Get subscriptions with optional filtering
     */
    getSubscriptions(request: operations.GetSubscriptionsRequest, options?: RequestOptions): Promise<components.DtoListSubscriptionsResponse>;
    /**
     * Create subscription
     *
     * @remarks
     * Create a new subscription
     */
    postSubscriptions(request: components.DtoCreateSubscriptionRequest, options?: RequestOptions): Promise<components.DtoSubscriptionResponse>;
    /**
     * Add addon to subscription
     *
     * @remarks
     * Add an addon to a subscription
     */
    postSubscriptionsAddon(request: components.DtoAddAddonRequest, options?: RequestOptions): Promise<components.DtoAddonAssociationResponse>;
    /**
     * Remove addon from subscription
     *
     * @remarks
     * Remove an addon from a subscription
     */
    deleteSubscriptionsAddon(request: components.DtoRemoveAddonRequest, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Update subscription line item
     *
     * @remarks
     * Update a subscription line item by terminating the existing one and creating a new one
     */
    putSubscriptionsLineitemsId(id: string, body: components.DtoUpdateSubscriptionLineItemRequest, options?: RequestOptions): Promise<components.DtoSubscriptionLineItemResponse>;
    /**
     * Delete subscription line item
     *
     * @remarks
     * Delete a subscription line item by setting its end date
     */
    deleteSubscriptionsLineitemsId(id: string, body: components.DtoDeleteSubscriptionLineItemRequest, options?: RequestOptions): Promise<components.DtoSubscriptionLineItemResponse>;
    /**
     * List subscriptions by filter
     *
     * @remarks
     * List subscriptions by filter
     */
    postSubscriptionsSearch(request: components.TypesSubscriptionFilter, options?: RequestOptions): Promise<components.DtoListSubscriptionsResponse>;
    /**
     * Get usage by subscription
     *
     * @remarks
     * Get usage for a subscription
     */
    postSubscriptionsUsage(request: components.DtoGetUsageBySubscriptionRequest, options?: RequestOptions): Promise<components.DtoGetUsageBySubscriptionResponse>;
    /**
     * Get subscription
     *
     * @remarks
     * Get a subscription by ID
     */
    getSubscriptionsId(id: string, options?: RequestOptions): Promise<components.DtoSubscriptionResponse>;
    /**
     * Activate draft subscription
     *
     * @remarks
     * Activate a draft subscription with a new start date
     */
    postSubscriptionsIdActivate(id: string, body: components.DtoActivateDraftSubscriptionRequest, options?: RequestOptions): Promise<components.DtoSubscriptionResponse>;
    /**
     * Get active addon associations
     *
     * @remarks
     * Get active addon associations for a subscription
     */
    getSubscriptionsIdAddonsAssociations(id: string, options?: RequestOptions): Promise<Array<components.DtoAddonAssociationResponse>>;
    /**
     * Cancel subscription
     *
     * @remarks
     * Cancel a subscription with enhanced proration support
     */
    postSubscriptionsIdCancel(id: string, body: components.DtoCancelSubscriptionRequest, options?: RequestOptions): Promise<components.DtoCancelSubscriptionResponse>;
    /**
     * Execute subscription plan change
     *
     * @remarks
     * Execute a subscription plan change, including proration and invoice generation
     */
    postSubscriptionsIdChangeExecute(id: string, body: components.DtoSubscriptionChangeRequest, options?: RequestOptions): Promise<components.DtoSubscriptionChangeExecuteResponse>;
    /**
     * Preview subscription plan change
     *
     * @remarks
     * Preview the impact of changing a subscription's plan, including proration calculations
     */
    postSubscriptionsIdChangePreview(id: string, body: components.DtoSubscriptionChangeRequest, options?: RequestOptions): Promise<components.DtoSubscriptionChangePreviewResponse>;
    /**
     * Get subscription entitlements
     *
     * @remarks
     * Get all entitlements for a subscription
     */
    getSubscriptionsIdEntitlements(id: string, featureIds?: Array<string> | undefined, options?: RequestOptions): Promise<components.DtoSubscriptionEntitlementsResponse>;
    /**
     * Get upcoming credit grant applications
     *
     * @remarks
     * Get upcoming credit grant applications for a subscription
     */
    getSubscriptionsIdGrantsUpcoming(id: string, options?: RequestOptions): Promise<components.DtoListCreditGrantApplicationsResponse>;
    /**
     * Pause a subscription
     *
     * @remarks
     * Pause a subscription with the specified parameters
     */
    postSubscriptionsIdPause(id: string, body: components.DtoPauseSubscriptionRequest, options?: RequestOptions): Promise<components.DtoSubscriptionPauseResponse>;
    /**
     * List all pauses for a subscription
     *
     * @remarks
     * List all pauses for a subscription
     */
    getSubscriptionsIdPauses(id: string, options?: RequestOptions): Promise<Array<components.DtoListSubscriptionPausesResponse>>;
    /**
     * Resume a paused subscription
     *
     * @remarks
     * Resume a paused subscription with the specified parameters
     */
    postSubscriptionsIdResume(id: string, body: components.DtoResumeSubscriptionRequest, options?: RequestOptions): Promise<components.DtoSubscriptionPauseResponse>;
}
//# sourceMappingURL=subscriptions.d.ts.map