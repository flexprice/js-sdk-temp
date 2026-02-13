import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Prices extends ClientSDK {
    /**
     * Get prices
     *
     * @remarks
     * Get prices with the specified filter
     */
    getPrices(request: operations.GetPricesRequest, options?: RequestOptions): Promise<components.DtoListPricesResponse>;
    /**
     * Create a new price
     *
     * @remarks
     * Create a new price with the specified configuration. Supports both regular and price unit configurations.
     */
    postPrices(request: components.DtoCreatePriceRequest, options?: RequestOptions): Promise<components.DtoPriceResponse>;
    /**
     * Create multiple prices in bulk
     *
     * @remarks
     * Create multiple prices with the specified configurations. Supports both regular and price unit configurations.
     */
    postPricesBulk(request: components.DtoCreateBulkPriceRequest, options?: RequestOptions): Promise<components.DtoCreateBulkPriceResponse>;
    /**
     * Get price by lookup key
     *
     * @remarks
     * Get price by lookup key
     */
    getPricesLookupLookupKey(lookupKey: string, options?: RequestOptions): Promise<components.DtoPriceResponse>;
    /**
     * List prices by filter
     *
     * @remarks
     * List prices with filter
     */
    postPricesSearch(request: components.TypesPriceFilter, options?: RequestOptions): Promise<components.DtoListPricesResponse>;
    /**
     * Get a price by ID
     *
     * @remarks
     * Get a price by ID with expanded meter and price unit information
     */
    getPricesId(id: string, options?: RequestOptions): Promise<components.DtoPriceResponse>;
    /**
     * Update a price
     *
     * @remarks
     * Update a price with the specified configuration
     */
    putPricesId(id: string, body: components.DtoUpdatePriceRequest, options?: RequestOptions): Promise<components.DtoPriceResponse>;
    /**
     * Delete a price
     *
     * @remarks
     * Delete a price
     */
    deletePricesId(id: string, body: components.DtoDeletePriceRequest, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=prices.d.ts.map