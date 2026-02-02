import * as z from "zod/v3";
export type GetInvoicesIdRequest = {
    /**
     * Invoice ID
     */
    id: string;
    /**
     * Include source-level price breakdown for usage line items (legacy)
     */
    expandBySource?: boolean | undefined;
    /**
     * Group usage breakdown by specified fields (e.g., source, feature_id, properties.org_id)
     */
    groupBy?: Array<string> | undefined;
};
/** @internal */
export type GetInvoicesIdRequest$Outbound = {
    id: string;
    expand_by_source?: boolean | undefined;
    group_by?: Array<string> | undefined;
};
/** @internal */
export declare const GetInvoicesIdRequest$outboundSchema: z.ZodType<GetInvoicesIdRequest$Outbound, z.ZodTypeDef, GetInvoicesIdRequest>;
export declare function getInvoicesIdRequestToJSON(getInvoicesIdRequest: GetInvoicesIdRequest): string;
//# sourceMappingURL=get-invoices-id.d.ts.map