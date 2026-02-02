import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAddonResponse } from "./dto-addon-response.js";
import { DtoSubscriptionResponse } from "./dto-subscription-response.js";
import { TypesAddonAssociationEntityType } from "./types-addon-association-entity-type.js";
import { TypesAddonStatus } from "./types-addon-status.js";
import { TypesStatus } from "./types-status.js";
export type DtoAddonAssociationResponse = {
    addon?: DtoAddonResponse | undefined;
    addonId?: string | undefined;
    addonStatus?: TypesAddonStatus | undefined;
    cancellationReason?: string | undefined;
    cancelledAt?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    endDate?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesAddonAssociationEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    subscription?: DtoSubscriptionResponse | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoAddonAssociationResponse$inboundSchema: z.ZodType<DtoAddonAssociationResponse, z.ZodTypeDef, unknown>;
export declare function dtoAddonAssociationResponseFromJSON(jsonString: string): SafeParseResult<DtoAddonAssociationResponse, SDKValidationError>;
//# sourceMappingURL=dto-addon-association-response.d.ts.map