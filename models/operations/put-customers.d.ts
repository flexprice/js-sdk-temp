import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutCustomersRequest = {
    /**
     * Customer ID
     */
    id?: string | undefined;
    /**
     * Customer External ID
     */
    externalCustomerId?: string | undefined;
    /**
     * Customer
     */
    body: components.DtoUpdateCustomerRequest;
};
/** @internal */
export type PutCustomersRequest$Outbound = {
    id?: string | undefined;
    external_customer_id?: string | undefined;
    body: components.DtoUpdateCustomerRequest$Outbound;
};
/** @internal */
export declare const PutCustomersRequest$outboundSchema: z.ZodType<PutCustomersRequest$Outbound, z.ZodTypeDef, PutCustomersRequest>;
export declare function putCustomersRequestToJSON(putCustomersRequest: PutCustomersRequest): string;
//# sourceMappingURL=put-customers.d.ts.map