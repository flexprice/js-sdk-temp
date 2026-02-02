import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Wallets extends ClientSDK {
    /**
     * Get Customer Wallets
     *
     * @remarks
     * Get all wallets for a customer by lookup key or id
     */
    getCustomersWallets(request: operations.GetCustomersWalletsRequest, options?: RequestOptions): Promise<Array<components.DtoWalletResponse>>;
    /**
     * Get wallets by customer ID
     *
     * @remarks
     * Get all wallets for a customer
     */
    getCustomersIdWallets(id: string, options?: RequestOptions): Promise<Array<components.DtoWalletResponse>>;
    /**
     * List wallets
     *
     * @remarks
     * List wallets with optional filtering
     */
    getWallets(request: operations.GetWalletsRequest, options?: RequestOptions): Promise<components.TypesListResponseDtoWalletResponse>;
    /**
     * Create a new wallet
     *
     * @remarks
     * Create a new wallet for a customer
     */
    postWallets(request: components.DtoCreateWalletRequest, options?: RequestOptions): Promise<components.DtoWalletResponse>;
    /**
     * List wallets by filter
     *
     * @remarks
     * List wallets by filter
     */
    postWalletsSearch(request?: components.TypesWalletFilter | undefined, options?: RequestOptions): Promise<components.TypesListResponseDtoWalletResponse>;
    /**
     * List wallet transactions by filter
     *
     * @remarks
     * List wallet transactions by filter
     */
    postWalletsTransactionsSearch(expand?: string | undefined, body?: components.TypesWalletTransactionFilter | undefined, options?: RequestOptions): Promise<components.DtoListWalletTransactionsResponse>;
    /**
     * Get wallet by ID
     *
     * @remarks
     * Get a wallet by its ID
     */
    getWalletsId(id: string, options?: RequestOptions): Promise<components.DtoWalletResponse>;
    /**
     * Update a wallet
     *
     * @remarks
     * Update a wallet's details including auto top-up configuration
     */
    putWalletsId(id: string, body: components.DtoUpdateWalletRequest, options?: RequestOptions): Promise<components.DtoWalletResponse>;
    /**
     * Get wallet balance
     *
     * @remarks
     * Get real-time balance of a wallet
     */
    getWalletsIdBalanceRealTime(id: string, expand?: string | undefined, options?: RequestOptions): Promise<components.DtoWalletBalanceResponse>;
    /**
     * Terminate a wallet
     *
     * @remarks
     * Terminates a wallet by closing it and debiting remaining balance
     */
    postWalletsIdTerminate(id: string, options?: RequestOptions): Promise<components.DtoWalletResponse>;
    /**
     * Top up wallet
     *
     * @remarks
     * Add credits to a wallet
     */
    postWalletsIdTopUp(id: string, body: components.DtoTopUpWalletRequest, options?: RequestOptions): Promise<components.DtoTopUpWalletResponse>;
    /**
     * Get wallet transactions
     *
     * @remarks
     * Get transactions for a wallet with pagination
     */
    getWalletsIdTransactions(request: operations.GetWalletsIdTransactionsRequest, options?: RequestOptions): Promise<components.DtoListWalletTransactionsResponse>;
}
//# sourceMappingURL=wallets.d.ts.map