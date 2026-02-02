import * as z from "zod/v3";
import * as components from "../components/index.js";
export type DeletePricesIdRequest = {
    /**
     * Price ID
     */
    id: string;
    /**
     * Delete Price Request
     */
    body: components.DtoDeletePriceRequest;
};
/** @internal */
export type DeletePricesIdRequest$Outbound = {
    id: string;
    body: components.DtoDeletePriceRequest$Outbound;
};
/** @internal */
export declare const DeletePricesIdRequest$outboundSchema: z.ZodType<DeletePricesIdRequest$Outbound, z.ZodTypeDef, DeletePricesIdRequest>;
export declare function deletePricesIdRequestToJSON(deletePricesIdRequest: DeletePricesIdRequest): string;
//# sourceMappingURL=delete-prices-id.d.ts.map