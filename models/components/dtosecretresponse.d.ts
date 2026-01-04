import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesSecretProvider } from "./typessecretprovider.js";
import { TypesSecretType } from "./typessecrettype.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesUserType } from "./typesusertype.js";
export type DtoSecretResponse = {
    createdAt?: string | undefined;
    displayId?: string | undefined;
    expiresAt?: string | undefined;
    id?: string | undefined;
    lastUsedAt?: string | undefined;
    name?: string | undefined;
    provider?: TypesSecretProvider | undefined;
    /**
     * RBAC roles
     */
    roles?: Array<string> | undefined;
    status?: TypesStatus | undefined;
    type?: TypesSecretType | undefined;
    updatedAt?: string | undefined;
    userType?: TypesUserType | undefined;
};
/** @internal */
export declare const DtoSecretResponse$inboundSchema: z.ZodType<DtoSecretResponse, z.ZodTypeDef, unknown>;
export declare function dtoSecretResponseFromJSON(jsonString: string): SafeParseResult<DtoSecretResponse, SDKValidationError>;
//# sourceMappingURL=dtosecretresponse.d.ts.map