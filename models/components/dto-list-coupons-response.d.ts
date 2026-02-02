import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCouponResponse } from "./dto-coupon-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListCouponsResponse = {
    items?: Array<DtoCouponResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCouponsResponse$inboundSchema: z.ZodType<DtoListCouponsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCouponsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCouponsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-coupons-response.d.ts.map