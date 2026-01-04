import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCustomerResponse } from "./dtocustomerresponse.js";
import { DtoFeatureResponse } from "./dtofeatureresponse.js";
import { DtoWalletResponse } from "./dtowalletresponse.js";
import { TypesAlertEntityType } from "./typesalertentitytype.js";
import { TypesAlertInfo } from "./typesalertinfo.js";
import { TypesAlertState } from "./typesalertstate.js";
import { TypesAlertType } from "./typesalerttype.js";
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
//# sourceMappingURL=dtoalertlogresponse.d.ts.map