import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoGroupResponse } from "./dtogroupresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListGroupsResponse = {
    items?: Array<DtoGroupResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListGroupsResponse$inboundSchema: z.ZodType<DtoListGroupsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListGroupsResponseFromJSON(jsonString: string): SafeParseResult<DtoListGroupsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistgroupsresponse.d.ts.map