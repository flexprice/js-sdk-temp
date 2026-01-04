import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCouponResponse } from "./dtocouponresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListCouponsResponse = {
    items?: Array<DtoCouponResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCouponsResponse$inboundSchema: z.ZodType<DtoListCouponsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCouponsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCouponsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcouponsresponse.d.ts.map