import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEntityIntegrationMappingResponse } from "./dtoentityintegrationmappingresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListEntityIntegrationMappingsResponse = {
    items?: Array<DtoEntityIntegrationMappingResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListEntityIntegrationMappingsResponse$inboundSchema: z.ZodType<DtoListEntityIntegrationMappingsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListEntityIntegrationMappingsResponseFromJSON(jsonString: string): SafeParseResult<DtoListEntityIntegrationMappingsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistentityintegrationmappingsresponse.d.ts.map