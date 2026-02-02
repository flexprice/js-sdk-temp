import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEnvironmentResponse } from "./dto-environment-response.js";
export type DtoListEnvironmentsResponse = {
    environments?: Array<DtoEnvironmentResponse> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
};
/** @internal */
export declare const DtoListEnvironmentsResponse$inboundSchema: z.ZodType<DtoListEnvironmentsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListEnvironmentsResponseFromJSON(jsonString: string): SafeParseResult<DtoListEnvironmentsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-environments-response.d.ts.map