import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutCostsIdRequest = {
    /**
     * Costsheet ID
     */
    id: string;
    /**
     * Costsheet configuration
     */
    body: components.DtoUpdateCostsheetRequest;
};
/** @internal */
export type PutCostsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateCostsheetRequest$Outbound;
};
/** @internal */
export declare const PutCostsIdRequest$outboundSchema: z.ZodType<PutCostsIdRequest$Outbound, z.ZodTypeDef, PutCostsIdRequest>;
export declare function putCostsIdRequestToJSON(putCostsIdRequest: PutCostsIdRequest): string;
//# sourceMappingURL=put-costs-id.d.ts.map