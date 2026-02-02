import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostWalletsTransactionsSearchRequest = {
    /**
     * Expand fields (e.g., customer,created_by_user,wallet)
     */
    expand?: string | undefined;
    /**
     * Filter
     */
    body?: components.TypesWalletTransactionFilter | undefined;
};
/** @internal */
export type PostWalletsTransactionsSearchRequest$Outbound = {
    expand?: string | undefined;
    body?: components.TypesWalletTransactionFilter$Outbound | undefined;
};
/** @internal */
export declare const PostWalletsTransactionsSearchRequest$outboundSchema: z.ZodType<PostWalletsTransactionsSearchRequest$Outbound, z.ZodTypeDef, PostWalletsTransactionsSearchRequest>;
export declare function postWalletsTransactionsSearchRequestToJSON(postWalletsTransactionsSearchRequest: PostWalletsTransactionsSearchRequest): string;
//# sourceMappingURL=post-wallets-transactions-search.d.ts.map