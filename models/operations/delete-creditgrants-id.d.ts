import * as z from "zod/v3";
import * as components from "../components/index.js";
export type DeleteCreditgrantsIdRequest = {
    /**
     * Credit Grant ID
     */
    id: string;
    /**
     * Optional: effective_date for subscription-scoped grants
     */
    body?: components.DtoDeleteCreditGrantRequest | undefined;
};
/** @internal */
export type DeleteCreditgrantsIdRequest$Outbound = {
    id: string;
    body?: components.DtoDeleteCreditGrantRequest$Outbound | undefined;
};
/** @internal */
export declare const DeleteCreditgrantsIdRequest$outboundSchema: z.ZodType<DeleteCreditgrantsIdRequest$Outbound, z.ZodTypeDef, DeleteCreditgrantsIdRequest>;
export declare function deleteCreditgrantsIdRequestToJSON(deleteCreditgrantsIdRequest: DeleteCreditgrantsIdRequest): string;
//# sourceMappingURL=delete-creditgrants-id.d.ts.map