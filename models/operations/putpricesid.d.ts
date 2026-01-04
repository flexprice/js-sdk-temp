import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutPricesIdRequest = {
    /**
     * Price ID
     */
    id: string;
    /**
     * Price configuration
     */
    body: components.DtoUpdatePriceRequest;
};
/** @internal */
export type PutPricesIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdatePriceRequest$Outbound;
};
/** @internal */
export declare const PutPricesIdRequest$outboundSchema: z.ZodType<PutPricesIdRequest$Outbound, z.ZodTypeDef, PutPricesIdRequest>;
export declare function putPricesIdRequestToJSON(putPricesIdRequest: PutPricesIdRequest): string;
//# sourceMappingURL=putpricesid.d.ts.map