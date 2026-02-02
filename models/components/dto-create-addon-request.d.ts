import * as z from "zod/v3";
import { TypesAddonType } from "./types-addon-type.js";
export type DtoCreateAddonRequest = {
    description?: string | undefined;
    lookupKey: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name: string;
    type: TypesAddonType;
};
/** @internal */
export type DtoCreateAddonRequest$Outbound = {
    description?: string | undefined;
    lookup_key: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name: string;
    type: string;
};
/** @internal */
export declare const DtoCreateAddonRequest$outboundSchema: z.ZodType<DtoCreateAddonRequest$Outbound, z.ZodTypeDef, DtoCreateAddonRequest>;
export declare function dtoCreateAddonRequestToJSON(dtoCreateAddonRequest: DtoCreateAddonRequest): string;
//# sourceMappingURL=dto-create-addon-request.d.ts.map