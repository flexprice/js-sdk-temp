import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCreditGrantApplicationResponse } from "./dto-credit-grant-application-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListCreditGrantApplicationsResponse = {
    items?: Array<DtoCreditGrantApplicationResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditGrantApplicationsResponse$inboundSchema: z.ZodType<DtoListCreditGrantApplicationsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditGrantApplicationsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditGrantApplicationsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-credit-grant-applications-response.d.ts.map