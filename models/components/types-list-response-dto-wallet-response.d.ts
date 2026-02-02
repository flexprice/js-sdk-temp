import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoWalletResponse } from "./dto-wallet-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type TypesListResponseDtoWalletResponse = {
    items?: Array<DtoWalletResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const TypesListResponseDtoWalletResponse$inboundSchema: z.ZodType<TypesListResponseDtoWalletResponse, z.ZodTypeDef, unknown>;
export declare function typesListResponseDtoWalletResponseFromJSON(jsonString: string): SafeParseResult<TypesListResponseDtoWalletResponse, SDKValidationError>;
//# sourceMappingURL=types-list-response-dto-wallet-response.d.ts.map