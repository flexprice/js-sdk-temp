import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAddonResponse } from "./dtoaddonresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListAddonsResponse = {
    items?: Array<DtoAddonResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListAddonsResponse$inboundSchema: z.ZodType<DtoListAddonsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListAddonsResponseFromJSON(jsonString: string): SafeParseResult<DtoListAddonsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistaddonsresponse.d.ts.map