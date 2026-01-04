import * as z from "zod/v3";
export type DtoUpdateAddonRequest = {
    description?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateAddonRequest$Outbound = {
    description?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateAddonRequest$outboundSchema: z.ZodType<DtoUpdateAddonRequest$Outbound, z.ZodTypeDef, DtoUpdateAddonRequest>;
export declare function dtoUpdateAddonRequestToJSON(dtoUpdateAddonRequest: DtoUpdateAddonRequest): string;
//# sourceMappingURL=dtoupdateaddonrequest.d.ts.map