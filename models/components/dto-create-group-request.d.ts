import * as z from "zod/v3";
export type DtoCreateGroupRequest = {
    entityType: string;
    lookupKey: string;
    name: string;
};
/** @internal */
export type DtoCreateGroupRequest$Outbound = {
    entity_type: string;
    lookup_key: string;
    name: string;
};
/** @internal */
export declare const DtoCreateGroupRequest$outboundSchema: z.ZodType<DtoCreateGroupRequest$Outbound, z.ZodTypeDef, DtoCreateGroupRequest>;
export declare function dtoCreateGroupRequestToJSON(dtoCreateGroupRequest: DtoCreateGroupRequest): string;
//# sourceMappingURL=dto-create-group-request.d.ts.map