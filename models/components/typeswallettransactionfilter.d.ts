import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesTransactionReason } from "./typestransactionreason.js";
import { TypesTransactionStatus } from "./typestransactionstatus.js";
import { TypesTransactionType } from "./typestransactiontype.js";
export declare const TypesWalletTransactionFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesWalletTransactionFilterOrder = ClosedEnum<typeof TypesWalletTransactionFilterOrder>;
export type TypesWalletTransactionFilter = {
    createdBy?: string | undefined;
    creditsAvailableGt?: number | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    expiryDateAfter?: string | undefined;
    expiryDateBefore?: string | undefined;
    /**
     * filters allows complex filtering based on multiple fields
     */
    filters?: Array<TypesFilterCondition> | undefined;
    id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesWalletTransactionFilterOrder | undefined;
    priority?: number | undefined;
    referenceId?: string | undefined;
    referenceType?: string | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
    transactionReason?: TypesTransactionReason | undefined;
    transactionStatus?: TypesTransactionStatus | undefined;
    type?: TypesTransactionType | undefined;
};
/** @internal */
export declare const TypesWalletTransactionFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesWalletTransactionFilterOrder>;
/** @internal */
export type TypesWalletTransactionFilter$Outbound = {
    created_by?: string | undefined;
    credits_available_gt?: number | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    expiry_date_after?: string | undefined;
    expiry_date_before?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    priority?: number | undefined;
    reference_id?: string | undefined;
    reference_type?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    transaction_reason?: string | undefined;
    transaction_status?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TypesWalletTransactionFilter$outboundSchema: z.ZodType<TypesWalletTransactionFilter$Outbound, z.ZodTypeDef, TypesWalletTransactionFilter>;
export declare function typesWalletTransactionFilterToJSON(typesWalletTransactionFilter: TypesWalletTransactionFilter): string;
//# sourceMappingURL=typeswallettransactionfilter.d.ts.map