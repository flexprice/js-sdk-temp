import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutCustomersIdRequest = {
    /**
     * Customer ID
     */
    id: string;
    /**
     * Customer
     */
    body: components.DtoUpdateCustomerRequest;
};
/** @internal */
export type PutCustomersIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateCustomerRequest$Outbound;
};
/** @internal */
export declare const PutCustomersIdRequest$outboundSchema: z.ZodType<PutCustomersIdRequest$Outbound, z.ZodTypeDef, PutCustomersIdRequest>;
export declare function putCustomersIdRequestToJSON(putCustomersIdRequest: PutCustomersIdRequest): string;
//# sourceMappingURL=putcustomersid.d.ts.map