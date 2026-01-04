import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Addons extends ClientSDK {
    /**
     * List addons
     *
     * @remarks
     * Get addons with optional filtering
     */
    getAddons(request: operations.GetAddonsRequest, options?: RequestOptions): Promise<components.DtoListAddonsResponse>;
    /**
     * Create addon
     *
     * @remarks
     * Create a new addon
     */
    postAddons(request: components.DtoCreateAddonRequest, options?: RequestOptions): Promise<components.DtoCreateAddonResponse>;
    /**
     * Get addon by lookup key
     *
     * @remarks
     * Get an addon by lookup key
     */
    getAddonsLookupLookupKey(lookupKey: string, options?: RequestOptions): Promise<components.DtoAddonResponse>;
    /**
     * List addons by filter
     *
     * @remarks
     * List addons by filter
     */
    postAddonsSearch(request: components.TypesAddonFilter, options?: RequestOptions): Promise<components.DtoListAddonsResponse>;
    /**
     * Get addon
     *
     * @remarks
     * Get an addon by ID
     */
    getAddonsId(id: string, options?: RequestOptions): Promise<components.DtoAddonResponse>;
    /**
     * Update addon
     *
     * @remarks
     * Update an existing addon
     */
    putAddonsId(id: string, body: components.DtoUpdateAddonRequest, options?: RequestOptions): Promise<components.DtoAddonResponse>;
    /**
     * Delete addon
     *
     * @remarks
     * Delete an addon
     */
    deleteAddonsId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
}
//# sourceMappingURL=addons.d.ts.map