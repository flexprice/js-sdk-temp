import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoGroupResponse = {
    createdAt?: string | undefined;
    entityIds?: Array<string> | undefined;
    entityType?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    status?: string | undefined;
    updatedAt?: string | undefined;
};
/** @internal */
export declare const DtoGroupResponse$inboundSchema: z.ZodType<DtoGroupResponse, z.ZodTypeDef, unknown>;
export declare function dtoGroupResponseFromJSON(jsonString: string): SafeParseResult<DtoGroupResponse, SDKValidationError>;
//# sourceMappingURL=dtogroupresponse.d.ts.map