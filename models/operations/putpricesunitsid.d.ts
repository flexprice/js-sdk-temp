import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutPricesUnitsIdRequest = {
    /**
     * Price unit ID
     */
    id: string;
    /**
     * Price unit details to update
     */
    body: components.DtoUpdatePriceUnitRequest;
};
/** @internal */
export type PutPricesUnitsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdatePriceUnitRequest$Outbound;
};
/** @internal */
export declare const PutPricesUnitsIdRequest$outboundSchema: z.ZodType<PutPricesUnitsIdRequest$Outbound, z.ZodTypeDef, PutPricesUnitsIdRequest>;
export declare function putPricesUnitsIdRequestToJSON(putPricesUnitsIdRequest: PutPricesUnitsIdRequest): string;
//# sourceMappingURL=putpricesunitsid.d.ts.map