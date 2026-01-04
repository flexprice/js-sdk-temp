import * as z from "zod/v3";
export type DtoRemoveAddonRequest = {
    addonAssociationId: string;
    reason?: string | undefined;
};
/** @internal */
export type DtoRemoveAddonRequest$Outbound = {
    addon_association_id: string;
    reason?: string | undefined;
};
/** @internal */
export declare const DtoRemoveAddonRequest$outboundSchema: z.ZodType<DtoRemoveAddonRequest$Outbound, z.ZodTypeDef, DtoRemoveAddonRequest>;
export declare function dtoRemoveAddonRequestToJSON(dtoRemoveAddonRequest: DtoRemoveAddonRequest): string;
//# sourceMappingURL=dtoremoveaddonrequest.d.ts.map