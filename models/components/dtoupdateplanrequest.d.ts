import * as z from "zod/v3";
export type DtoUpdatePlanRequest = {
    description?: string | undefined;
    displayOrder?: number | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdatePlanRequest$Outbound = {
    description?: string | undefined;
    display_order?: number | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdatePlanRequest$outboundSchema: z.ZodType<DtoUpdatePlanRequest$Outbound, z.ZodTypeDef, DtoUpdatePlanRequest>;
export declare function dtoUpdatePlanRequestToJSON(dtoUpdatePlanRequest: DtoUpdatePlanRequest): string;
//# sourceMappingURL=dtoupdateplanrequest.d.ts.map