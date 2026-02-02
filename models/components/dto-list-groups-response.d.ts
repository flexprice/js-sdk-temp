import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoGroupResponse } from "./dto-group-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListGroupsResponse = {
    items?: Array<DtoGroupResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListGroupsResponse$inboundSchema: z.ZodType<DtoListGroupsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListGroupsResponseFromJSON(jsonString: string): SafeParseResult<DtoListGroupsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-groups-response.d.ts.map