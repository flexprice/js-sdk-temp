import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTenantResponse } from "./dto-tenant-response.js";
import { TypesUserType } from "./types-user-type.js";
export type DtoUserResponse = {
    /**
     * Empty for service accounts
     */
    email?: string | undefined;
    id?: string | undefined;
    roles?: Array<string> | undefined;
    tenant?: DtoTenantResponse | undefined;
    type?: TypesUserType | undefined;
};
/** @internal */
export declare const DtoUserResponse$inboundSchema: z.ZodType<DtoUserResponse, z.ZodTypeDef, unknown>;
export declare function dtoUserResponseFromJSON(jsonString: string): SafeParseResult<DtoUserResponse, SDKValidationError>;
//# sourceMappingURL=dto-user-response.d.ts.map