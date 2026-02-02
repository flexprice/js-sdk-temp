import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTaxAssociationResponse } from "./dto-tax-association-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListTaxAssociationsResponse = {
    items?: Array<DtoTaxAssociationResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListTaxAssociationsResponse$inboundSchema: z.ZodType<DtoListTaxAssociationsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListTaxAssociationsResponseFromJSON(jsonString: string): SafeParseResult<DtoListTaxAssociationsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-tax-associations-response.d.ts.map