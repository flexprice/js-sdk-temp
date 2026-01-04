import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPriceResponse } from "./dtopriceresponse.js";
import { TypesStatus } from "./typesstatus.js";
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
//# sourceMappingURL=dtocostsheetresponse.d.ts.map