import * as z from "zod/v3";
export type DtoAddAddonRequest = {
    addonId: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    startDate?: string | undefined;
    subscriptionId: string;
};
/** @internal */
export type DtoAddAddonRequest$Outbound = {
    addon_id: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    start_date?: string | undefined;
    subscription_id: string;
};
/** @internal */
export declare const DtoAddAddonRequest$outboundSchema: z.ZodType<DtoAddAddonRequest$Outbound, z.ZodTypeDef, DtoAddAddonRequest>;
export declare function dtoAddAddonRequestToJSON(dtoAddAddonRequest: DtoAddAddonRequest): string;
//# sourceMappingURL=dtoaddaddonrequest.d.ts.map