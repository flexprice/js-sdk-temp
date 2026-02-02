import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoConnectionResponse } from "./dto-connection-response.js";
export type DtoListConnectionsResponse = {
    connections?: Array<DtoConnectionResponse> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
};
/** @internal */
export declare const DtoListConnectionsResponse$inboundSchema: z.ZodType<DtoListConnectionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListConnectionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListConnectionsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-connections-response.d.ts.map