import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoTaxAssociationResponse } from "./dtotaxassociationresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListTaxAssociationsResponse = {
    items?: Array<DtoTaxAssociationResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListTaxAssociationsResponse$inboundSchema: z.ZodType<DtoListTaxAssociationsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListTaxAssociationsResponseFromJSON(jsonString: string): SafeParseResult<DtoListTaxAssociationsResponse, SDKValidationError>;
//# sourceMappingURL=dtolisttaxassociationsresponse.d.ts.map