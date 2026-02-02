import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCustomerResponse } from "./dto-customer-response.js";
import { DtoFeatureResponse } from "./dto-feature-response.js";
import { DtoWalletResponse } from "./dto-wallet-response.js";
import { TypesAlertEntityType } from "./types-alert-entity-type.js";
import { TypesAlertInfo } from "./types-alert-info.js";
import { TypesAlertState } from "./types-alert-state.js";
import { TypesAlertType } from "./types-alert-type.js";
export type DtoAlertLogResponse = {
    alertInfo?: TypesAlertInfo | undefined;
    alertStatus?: TypesAlertState | undefined;
    alertType?: TypesAlertType | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Customer response object containing all customer information
     */
    customer?: DtoCustomerResponse | undefined;
    customerId?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesAlertEntityType | undefined;
    environmentId?: string | undefined;
    feature?: DtoFeatureResponse | undefined;
    id?: string | undefined;
    parentEntityId?: string | undefined;
    parentEntityType?: string | undefined;
    status?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    wallet?: DtoWalletResponse | undefined;
};
/** @internal */
export declare const DtoAlertLogResponse$inboundSchema: z.ZodType<DtoAlertLogResponse, z.ZodTypeDef, unknown>;
export declare function dtoAlertLogResponseFromJSON(jsonString: string): SafeParseResult<DtoAlertLogResponse, SDKValidationError>;
//# sourceMappingURL=dto-alert-log-response.d.ts.map