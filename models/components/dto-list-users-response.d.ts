import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoUserResponse } from "./dto-user-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListUsersResponse = {
    items?: Array<DtoUserResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListUsersResponse$inboundSchema: z.ZodType<DtoListUsersResponse, z.ZodTypeDef, unknown>;
export declare function dtoListUsersResponseFromJSON(jsonString: string): SafeParseResult<DtoListUsersResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-users-response.d.ts.map