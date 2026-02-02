import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesSecretProvider } from "./types-secret-provider.js";
import { TypesSecretType } from "./types-secret-type.js";
import { TypesStatus } from "./types-status.js";
import { TypesUserType } from "./types-user-type.js";
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
//# sourceMappingURL=dto-secret-response.d.ts.map