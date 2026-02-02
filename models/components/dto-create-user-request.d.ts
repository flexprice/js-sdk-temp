import * as z from "zod/v3";
import { TypesUserType } from "./types-user-type.js";
export type DtoCreateUserRequest = {
    /**
     * Roles are required
     */
    roles: Array<string>;
    type: TypesUserType;
};
/** @internal */
export type DtoCreateUserRequest$Outbound = {
    roles: Array<string>;
    type: string;
};
/** @internal */
export declare const DtoCreateUserRequest$outboundSchema: z.ZodType<DtoCreateUserRequest$Outbound, z.ZodTypeDef, DtoCreateUserRequest>;
export declare function dtoCreateUserRequestToJSON(dtoCreateUserRequest: DtoCreateUserRequest): string;
//# sourceMappingURL=dto-create-user-request.d.ts.map