import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { TypesStatus } from "./types-status.js";
export type DtoCostsheetResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    /**
     * Associated prices
     */
    prices?: Array<DtoPriceResponse> | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCostsheetResponse$inboundSchema: z.ZodType<DtoCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dto-costsheet-response.d.ts.map