import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoSubscriptionPauseResponse } from "./dtosubscriptionpauseresponse.js";
/**
 * Response object for listing subscription pauses with total count
 */
export type DtoListSubscriptionPausesResponse = {
    /**
     * List of subscription pause objects
     *
     * @remarks
     * @Description Array of subscription pauses
     */
    items?: Array<DtoSubscriptionPauseResponse> | undefined;
    /**
     * Total number of pauses
     *
     * @remarks
     * @Description Total count of subscription pauses in the response
     */
    total?: number | undefined;
};
/** @internal */
export declare const DtoListSubscriptionPausesResponse$inboundSchema: z.ZodType<DtoListSubscriptionPausesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListSubscriptionPausesResponseFromJSON(jsonString: string): SafeParseResult<DtoListSubscriptionPausesResponse, SDKValidationError>;
//# sourceMappingURL=dtolistsubscriptionpausesresponse.d.ts.map