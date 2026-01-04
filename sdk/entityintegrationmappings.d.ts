import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class EntityIntegrationMappings extends ClientSDK {
    /**
     * List entity integration mappings
     *
     * @remarks
     * Retrieve a list of entity integration mappings with optional filtering
     */
    getEntityIntegrationMappings(request: operations.GetEntityIntegrationMappingsRequest, options?: RequestOptions): Promise<components.DtoListEntityIntegrationMappingsResponse>;
    /**
     * Create entity integration mapping
     *
     * @remarks
     * Create a new entity integration mapping
     */
    postEntityIntegrationMappings(request: components.DtoCreateEntityIntegrationMappingRequest, options?: RequestOptions): Promise<components.DtoEntityIntegrationMappingResponse>;
    /**
     * Get entity integration mapping
     *
     * @remarks
     * Retrieve a specific entity integration mapping by ID
     */
    getEntityIntegrationMappingsId(id: string, options?: RequestOptions): Promise<components.DtoEntityIntegrationMappingResponse>;
    /**
     * Delete entity integration mapping
     *
     * @remarks
     * Delete an entity integration mapping
     */
    deleteEntityIntegrationMappingsId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=entityintegrationmappings.d.ts.map