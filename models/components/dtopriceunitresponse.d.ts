import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoPriceUnitResponse = {
    baseCurrency?: string | undefined;
    code?: string | undefined;
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    status?: TypesStatus | undefined;
    symbol?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoPriceUnitResponse$inboundSchema: z.ZodType<DtoPriceUnitResponse, z.ZodTypeDef, unknown>;
export declare function dtoPriceUnitResponseFromJSON(jsonString: string): SafeParseResult<DtoPriceUnitResponse, SDKValidationError>;
//# sourceMappingURL=dtopriceunitresponse.d.ts.map