import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoUserResponse } from "./dtouserresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListUsersResponse = {
    items?: Array<DtoUserResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListUsersResponse$inboundSchema: z.ZodType<DtoListUsersResponse, z.ZodTypeDef, unknown>;
export declare function dtoListUsersResponseFromJSON(jsonString: string): SafeParseResult<DtoListUsersResponse, SDKValidationError>;
//# sourceMappingURL=dtolistusersresponse.d.ts.map