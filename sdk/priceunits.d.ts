import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class PriceUnits extends ClientSDK {
    /**
     * List price units
     *
     * @remarks
     * Get a paginated list of price units with optional filtering
     */
    getPricesUnits(request: operations.GetPricesUnitsRequest, options?: RequestOptions): Promise<components.DtoListPriceUnitsResponse>;
    /**
     * Create a new price unit
     *
     * @remarks
     * Create a new price unit with the provided details
     */
    postPricesUnits(request: components.DtoCreatePriceUnitRequest, options?: RequestOptions): Promise<components.DtoCreatePriceUnitResponse>;
    /**
     * Get a price unit by code
     *
     * @remarks
     * Get a price unit by code
     */
    getPricesUnitsCodeCode(code: string, options?: RequestOptions): Promise<components.DtoPriceUnitResponse>;
    /**
     * List price units by filter
     *
     * @remarks
     * List price units by filter
     */
    postPricesUnitsSearch(request: components.TypesFilter, options?: RequestOptions): Promise<components.DtoListPriceUnitsResponse>;
    /**
     * Get a price unit by ID
     *
     * @remarks
     * Get a price unit by ID
     */
    getPricesUnitsId(id: string, options?: RequestOptions): Promise<components.DtoPriceUnitResponse>;
    /**
     * Update a price unit
     *
     * @remarks
     * Update an existing price unit with the provided details. Only name and metadata can be updated.
     */
    putPricesUnitsId(id: string, body: components.DtoUpdatePriceUnitRequest, options?: RequestOptions): Promise<components.DtoPriceUnitResponse>;
    /**
     * Delete a price unit
     *
     * @remarks
     * Delete an existing price unit.
     */
    deletePricesUnitsId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=priceunits.d.ts.map