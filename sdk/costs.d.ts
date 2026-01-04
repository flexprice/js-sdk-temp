import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Costs extends ClientSDK {
    /**
     * Create a new costsheet
     *
     * @remarks
     * Create a new costsheet with the specified name
     */
    postCosts(request: components.DtoCreateCostsheetRequest, options?: RequestOptions): Promise<components.DtoCreateCostsheetResponse>;
    /**
     * Get active costsheet for tenant
     *
     * @remarks
     * Get the active costsheet for the current tenant
     */
    getCostsActive(options?: RequestOptions): Promise<components.DtoCostsheetResponse>;
    /**
     * Get combined revenue and cost analytics
     *
     * @remarks
     * Retrieve combined analytics with ROI, margin, and detailed breakdowns. If start_time and end_time are not provided, defaults to last 7 days.
     */
    postCostsAnalytics(request: components.DtoGetCostAnalyticsRequest, options?: RequestOptions): Promise<components.DtoGetDetailedCostAnalyticsResponse>;
    /**
     * Get combined revenue and cost analytics
     *
     * @remarks
     * Retrieve combined analytics with ROI, margin, and detailed breakdowns. If start_time and end_time are not provided, defaults to last 7 days.
     */
    postCostsAnalyticsV2(request: components.DtoGetCostAnalyticsRequest, options?: RequestOptions): Promise<components.DtoGetDetailedCostAnalyticsResponse>;
    /**
     * List costsheets by filter
     *
     * @remarks
     * List costsheet records by filter with POST body
     */
    postCostsSearch(request: components.CostsheetFilter, options?: RequestOptions): Promise<components.DtoListCostsheetResponse>;
    /**
     * Get a costsheet by ID
     *
     * @remarks
     * Get a costsheet by ID with optional price expansion
     */
    getCostsId(id: string, expand?: string | undefined, options?: RequestOptions): Promise<components.DtoGetCostsheetResponse>;
    /**
     * Update a costsheet
     *
     * @remarks
     * Update a costsheet with the specified configuration
     */
    putCostsId(id: string, body: components.DtoUpdateCostsheetRequest, options?: RequestOptions): Promise<components.DtoUpdateCostsheetResponse>;
    /**
     * Delete a costsheet
     *
     * @remarks
     * Soft delete a costsheet by setting its status to deleted
     */
    deleteCostsId(id: string, options?: RequestOptions): Promise<components.DtoDeleteCostsheetResponse>;
}
//# sourceMappingURL=costs.d.ts.map