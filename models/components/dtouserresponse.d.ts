import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoTenantResponse } from "./dtotenantresponse.js";
import { TypesUserType } from "./typesusertype.js";
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
//# sourceMappingURL=dtouserresponse.d.ts.map