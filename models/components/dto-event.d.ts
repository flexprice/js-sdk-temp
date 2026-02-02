import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoEvent = {
    customerId?: string | undefined;
    environmentId?: string | undefined;
    eventName?: string | undefined;
    externalCustomerId?: string | undefined;
    id?: string | undefined;
    properties?: {
        [k: string]: any;
    } | undefined;
    source?: string | undefined;
    timestamp?: string | undefined;
};
/** @internal */
export declare const DtoEvent$inboundSchema: z.ZodType<DtoEvent, z.ZodTypeDef, unknown>;
export declare function dtoEventFromJSON(jsonString: string): SafeParseResult<DtoEvent, SDKValidationError>;
//# sourceMappingURL=dto-event.d.ts.map