import * as z from "zod/v3";
export type DtoCreatePlanRequest = {
    description?: string | undefined;
    displayOrder?: number | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
};
/** @internal */
export type DtoCreatePlanRequest$Outbound = {
    description?: string | undefined;
    display_order?: number | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
};
/** @internal */
export declare const DtoCreatePlanRequest$outboundSchema: z.ZodType<DtoCreatePlanRequest$Outbound, z.ZodTypeDef, DtoCreatePlanRequest>;
export declare function dtoCreatePlanRequestToJSON(dtoCreatePlanRequest: DtoCreatePlanRequest): string;
//# sourceMappingURL=dtocreateplanrequest.d.ts.map