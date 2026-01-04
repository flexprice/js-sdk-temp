import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TaxRates extends ClientSDK {
    /**
     * Get tax rates
     *
     * @remarks
     * Get tax rates
     */
    getTaxesRates(request: operations.GetTaxesRatesRequest, options?: RequestOptions): Promise<Array<components.DtoTaxRateResponse>>;
    /**
     * Create a tax rate
     *
     * @remarks
     * Create a tax rate
     */
    postTaxesRates(request: components.DtoCreateTaxRateRequest, options?: RequestOptions): Promise<components.DtoTaxRateResponse>;
    /**
     * Get a tax rate
     *
     * @remarks
     * Get a tax rate
     */
    getTaxesRatesId(id: string, options?: RequestOptions): Promise<components.DtoTaxRateResponse>;
    /**
     * Update a tax rate
     *
     * @remarks
     * Update a tax rate
     */
    putTaxesRatesId(id: string, body: components.DtoUpdateTaxRateRequest, options?: RequestOptions): Promise<components.DtoTaxRateResponse>;
    /**
     * Delete a tax rate
     *
     * @remarks
     * Delete a tax rate
     */
    deleteTaxesRatesId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=taxrates.d.ts.map