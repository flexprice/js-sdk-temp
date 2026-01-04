import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoWalletResponse } from "./dtowalletresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type TypesListResponseDtoWalletResponse = {
    items?: Array<DtoWalletResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const TypesListResponseDtoWalletResponse$inboundSchema: z.ZodType<TypesListResponseDtoWalletResponse, z.ZodTypeDef, unknown>;
export declare function typesListResponseDtoWalletResponseFromJSON(jsonString: string): SafeParseResult<TypesListResponseDtoWalletResponse, SDKValidationError>;
//# sourceMappingURL=typeslistresponsedtowalletresponse.d.ts.map