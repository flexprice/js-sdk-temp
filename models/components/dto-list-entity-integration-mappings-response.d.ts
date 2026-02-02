import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntityIntegrationMappingResponse } from "./dto-entity-integration-mapping-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListEntityIntegrationMappingsResponse = {
    items?: Array<DtoEntityIntegrationMappingResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListEntityIntegrationMappingsResponse$inboundSchema: z.ZodType<DtoListEntityIntegrationMappingsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListEntityIntegrationMappingsResponseFromJSON(jsonString: string): SafeParseResult<DtoListEntityIntegrationMappingsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-entity-integration-mappings-response.d.ts.map