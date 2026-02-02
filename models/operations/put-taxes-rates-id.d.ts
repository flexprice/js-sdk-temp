import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutTaxesRatesIdRequest = {
    /**
     * Tax rate ID
     */
    id: string;
    /**
     * Tax rate to update
     */
    body: components.DtoUpdateTaxRateRequest;
};
/** @internal */
export type PutTaxesRatesIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateTaxRateRequest$Outbound;
};
/** @internal */
export declare const PutTaxesRatesIdRequest$outboundSchema: z.ZodType<PutTaxesRatesIdRequest$Outbound, z.ZodTypeDef, PutTaxesRatesIdRequest>;
export declare function putTaxesRatesIdRequestToJSON(putTaxesRatesIdRequest: PutTaxesRatesIdRequest): string;
//# sourceMappingURL=put-taxes-rates-id.d.ts.map