import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Groups extends ClientSDK {
    /**
     * Create a group
     *
     * @remarks
     * Create a new group for organizing entities (prices, plans, customers, etc.)
     */
    postGroups(request: components.DtoCreateGroupRequest, options?: RequestOptions): Promise<components.DtoGroupResponse>;
    /**
     * Get groups
     *
     * @remarks
     * Get groups with optional filtering via query parameters
     */
    postGroupsSearch(request: operations.PostGroupsSearchRequest, options?: RequestOptions): Promise<components.DtoListGroupsResponse>;
    /**
     * Get a group
     *
     * @remarks
     * Get a group by ID
     */
    getGroupsId(id: string, options?: RequestOptions): Promise<components.DtoGroupResponse>;
    /**
     * Delete a group
     *
     * @remarks
     * Delete a group and remove all entity associations
     */
    deleteGroupsId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=groups.d.ts.map