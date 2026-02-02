import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesStatus } from "./types-status.js";
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
//# sourceMappingURL=dto-price-unit-response.d.ts.map