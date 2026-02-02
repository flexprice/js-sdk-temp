import * as z from "zod/v3";
export type DtoUpdateCostsheetRequest = {
    description?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateCostsheetRequest$Outbound = {
    description?: string | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateCostsheetRequest$outboundSchema: z.ZodType<DtoUpdateCostsheetRequest$Outbound, z.ZodTypeDef, DtoUpdateCostsheetRequest>;
export declare function dtoUpdateCostsheetRequestToJSON(dtoUpdateCostsheetRequest: DtoUpdateCostsheetRequest): string;
//# sourceMappingURL=dto-update-costsheet-request.d.ts.map