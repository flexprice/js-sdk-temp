import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutCreditgrantsIdRequest = {
    /**
     * Credit Grant ID
     */
    id: string;
    /**
     * Credit Grant configuration
     */
    body: components.DtoUpdateCreditGrantRequest;
};
/** @internal */
export type PutCreditgrantsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateCreditGrantRequest$Outbound;
};
/** @internal */
export declare const PutCreditgrantsIdRequest$outboundSchema: z.ZodType<PutCreditgrantsIdRequest$Outbound, z.ZodTypeDef, PutCreditgrantsIdRequest>;
export declare function putCreditgrantsIdRequestToJSON(putCreditgrantsIdRequest: PutCreditgrantsIdRequest): string;
//# sourceMappingURL=putcreditgrantsid.d.ts.map