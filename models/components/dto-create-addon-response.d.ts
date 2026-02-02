import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntitlementResponse } from "./dto-entitlement-response.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { TypesAddonType } from "./types-addon-type.js";
import { TypesStatus } from "./types-status.js";
export type DtoCreateAddonResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    entitlements?: Array<DtoEntitlementResponse> | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
    /**
     * Optional expanded fields
     */
    prices?: Array<DtoPriceResponse> | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    type?: TypesAddonType | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCreateAddonResponse$inboundSchema: z.ZodType<DtoCreateAddonResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateAddonResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateAddonResponse, SDKValidationError>;
//# sourceMappingURL=dto-create-addon-response.d.ts.map