import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPlanResponse } from "./dtoplanresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListPlansResponse = {
    items?: Array<DtoPlanResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPlansResponse$inboundSchema: z.ZodType<DtoListPlansResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPlansResponseFromJSON(jsonString: string): SafeParseResult<DtoListPlansResponse, SDKValidationError>;
//# sourceMappingURL=dtolistplansresponse.d.ts.map