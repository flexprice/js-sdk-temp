import * as z from "zod/v3";
export type GetPaymentsIdRequest = {
    /**
     * Payment ID
     */
    id: string;
};
/** @internal */
export type GetPaymentsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPaymentsIdRequest$outboundSchema: z.ZodType<GetPaymentsIdRequest$Outbound, z.ZodTypeDef, GetPaymentsIdRequest>;
export declare function getPaymentsIdRequestToJSON(getPaymentsIdRequest: GetPaymentsIdRequest): string;
//# sourceMappingURL=get-payments-id.d.ts.map