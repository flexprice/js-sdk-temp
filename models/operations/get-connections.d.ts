import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetConnectionsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetConnectionsOrder = ClosedEnum<typeof GetConnectionsOrder>;
export declare const ProviderType: {
    readonly Flexprice: "flexprice";
    readonly Stripe: "stripe";
    readonly S3: "s3";
    readonly Hubspot: "hubspot";
    readonly Razorpay: "razorpay";
    readonly Chargebee: "chargebee";
    readonly Quickbooks: "quickbooks";
    readonly Nomod: "nomod";
    readonly Moyasar: "moyasar";
};
export type ProviderType = ClosedEnum<typeof ProviderType>;
export declare const GetConnectionsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetConnectionsStatus = ClosedEnum<typeof GetConnectionsStatus>;
export type GetConnectionsRequest = {
    connectionIds?: Array<string> | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetConnectionsOrder | undefined;
    providerType?: ProviderType | undefined;
    startTime?: string | undefined;
    status?: GetConnectionsStatus | undefined;
};
/** @internal */
export declare const GetConnectionsOrder$outboundSchema: z.ZodNativeEnum<typeof GetConnectionsOrder>;
/** @internal */
export declare const ProviderType$outboundSchema: z.ZodNativeEnum<typeof ProviderType>;
/** @internal */
export declare const GetConnectionsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConnectionsStatus>;
/** @internal */
export type GetConnectionsRequest$Outbound = {
    connection_ids?: Array<string> | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    provider_type?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetConnectionsRequest$outboundSchema: z.ZodType<GetConnectionsRequest$Outbound, z.ZodTypeDef, GetConnectionsRequest>;
export declare function getConnectionsRequestToJSON(getConnectionsRequest: GetConnectionsRequest): string;
//# sourceMappingURL=get-connections.d.ts.map