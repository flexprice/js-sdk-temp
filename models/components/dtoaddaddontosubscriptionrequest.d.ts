import * as z from "zod/v3";
export type DtoAddAddonToSubscriptionRequest = {
    addonId: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    startDate?: string | undefined;
};
/** @internal */
export type DtoAddAddonToSubscriptionRequest$Outbound = {
    addon_id: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    start_date?: string | undefined;
};
/** @internal */
export declare const DtoAddAddonToSubscriptionRequest$outboundSchema: z.ZodType<DtoAddAddonToSubscriptionRequest$Outbound, z.ZodTypeDef, DtoAddAddonToSubscriptionRequest>;
export declare function dtoAddAddonToSubscriptionRequestToJSON(dtoAddAddonToSubscriptionRequest: DtoAddAddonToSubscriptionRequest): string;
//# sourceMappingURL=dtoaddaddontosubscriptionrequest.d.ts.map