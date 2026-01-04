import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoConnectionResponse } from "./dtoconnectionresponse.js";
export type DtoListConnectionsResponse = {
    connections?: Array<DtoConnectionResponse> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
};
/** @internal */
export declare const DtoListConnectionsResponse$inboundSchema: z.ZodType<DtoListConnectionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListConnectionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListConnectionsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistconnectionsresponse.d.ts.map