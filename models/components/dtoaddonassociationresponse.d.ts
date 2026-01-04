import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAddonResponse } from "./dtoaddonresponse.js";
import { DtoSubscriptionResponse } from "./dtosubscriptionresponse.js";
import { TypesAddonAssociationEntityType } from "./typesaddonassociationentitytype.js";
import { TypesAddonStatus } from "./typesaddonstatus.js";
import { TypesStatus } from "./typesstatus.js";
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
//# sourceMappingURL=dtoaddonassociationresponse.d.ts.map