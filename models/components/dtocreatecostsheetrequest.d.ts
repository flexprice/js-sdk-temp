import * as z from "zod/v3";
export type DtoCreateCostsheetRequest = {
    description?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
};
/** @internal */
export type DtoCreateCostsheetRequest$Outbound = {
    description?: string | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
};
/** @internal */
export declare const DtoCreateCostsheetRequest$outboundSchema: z.ZodType<DtoCreateCostsheetRequest$Outbound, z.ZodTypeDef, DtoCreateCostsheetRequest>;
export declare function dtoCreateCostsheetRequestToJSON(dtoCreateCostsheetRequest: DtoCreateCostsheetRequest): string;
//# sourceMappingURL=dtocreatecostsheetrequest.d.ts.map