import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAddonResponse } from "./dto-addon-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListAddonsResponse = {
    items?: Array<DtoAddonResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListAddonsResponse$inboundSchema: z.ZodType<DtoListAddonsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListAddonsResponseFromJSON(jsonString: string): SafeParseResult<DtoListAddonsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-addons-response.d.ts.map