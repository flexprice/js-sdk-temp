import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCreditGrantResponse } from "./dto-credit-grant-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListCreditGrantsResponse = {
    items?: Array<DtoCreditGrantResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditGrantsResponse$inboundSchema: z.ZodType<DtoListCreditGrantsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditGrantsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditGrantsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-credit-grants-response.d.ts.map