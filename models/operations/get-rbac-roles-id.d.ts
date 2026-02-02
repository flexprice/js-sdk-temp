import * as z from "zod/v3";
export type GetRbacRolesIdRequest = {
    /**
     * Role ID
     */
    id: string;
};
/** @internal */
export type GetRbacRolesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetRbacRolesIdRequest$outboundSchema: z.ZodType<GetRbacRolesIdRequest$Outbound, z.ZodTypeDef, GetRbacRolesIdRequest>;
export declare function getRbacRolesIdRequestToJSON(getRbacRolesIdRequest: GetRbacRolesIdRequest): string;
//# sourceMappingURL=get-rbac-roles-id.d.ts.map