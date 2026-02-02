import * as z from "zod/v3";
import { DtoCreatePriceRequest, DtoCreatePriceRequest$Outbound } from "./dto-create-price-request.js";
export type DtoCreateBulkPriceRequest = {
    items: Array<DtoCreatePriceRequest>;
};
/** @internal */
export type DtoCreateBulkPriceRequest$Outbound = {
    items: Array<DtoCreatePriceRequest$Outbound>;
};
/** @internal */
export declare const DtoCreateBulkPriceRequest$outboundSchema: z.ZodType<DtoCreateBulkPriceRequest$Outbound, z.ZodTypeDef, DtoCreateBulkPriceRequest>;
export declare function dtoCreateBulkPriceRequestToJSON(dtoCreateBulkPriceRequest: DtoCreateBulkPriceRequest): string;
//# sourceMappingURL=dto-create-bulk-price-request.d.ts.map