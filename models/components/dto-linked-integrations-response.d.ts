import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoLinkedIntegrationsResponse = {
    providers?: Array<string> | undefined;
};
/** @internal */
export declare const DtoLinkedIntegrationsResponse$inboundSchema: z.ZodType<DtoLinkedIntegrationsResponse, z.ZodTypeDef, unknown>;
export declare function dtoLinkedIntegrationsResponseFromJSON(jsonString: string): SafeParseResult<DtoLinkedIntegrationsResponse, SDKValidationError>;
//# sourceMappingURL=dto-linked-integrations-response.d.ts.map