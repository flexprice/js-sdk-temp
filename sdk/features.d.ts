import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Features extends ClientSDK {
    /**
     * List features
     *
     * @remarks
     * List features with optional filtering
     */
    getFeatures(request: operations.GetFeaturesRequest, options?: RequestOptions): Promise<components.DtoListFeaturesResponse>;
    /**
     * Create a new feature
     *
     * @remarks
     * Create a new feature
     */
    postFeatures(request: components.DtoCreateFeatureRequest, options?: RequestOptions): Promise<components.DtoFeatureResponse>;
    /**
     * List features by filter
     *
     * @remarks
     * List features by filter
     */
    postFeaturesSearch(request: components.TypesFeatureFilter, options?: RequestOptions): Promise<components.DtoListFeaturesResponse>;
    /**
     * Get a feature by ID
     *
     * @remarks
     * Get a feature by ID
     */
    getFeaturesId(id: string, options?: RequestOptions): Promise<components.DtoFeatureResponse>;
    /**
     * Update a feature
     *
     * @remarks
     * Update a feature by ID
     */
    putFeaturesId(id: string, body: components.DtoUpdateFeatureRequest, options?: RequestOptions): Promise<components.DtoFeatureResponse>;
    /**
     * Delete a feature
     *
     * @remarks
     * Delete a feature by ID
     */
    deleteFeaturesId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=features.d.ts.map