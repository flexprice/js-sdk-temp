import * as z from "zod/v3";
export type PostCustomerDashboardSubscriptionsSecurity = {
    bearerAuth: string;
};
/** @internal */
export type PostCustomerDashboardSubscriptionsSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const PostCustomerDashboardSubscriptionsSecurity$outboundSchema: z.ZodType<PostCustomerDashboardSubscriptionsSecurity$Outbound, z.ZodTypeDef, PostCustomerDashboardSubscriptionsSecurity>;
export declare function postCustomerDashboardSubscriptionsSecurityToJSON(postCustomerDashboardSubscriptionsSecurity: PostCustomerDashboardSubscriptionsSecurity): string;
//# sourceMappingURL=postcustomerdashboardsubscriptions.d.ts.map