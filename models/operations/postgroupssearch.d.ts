import * as z from "zod/v3";
export type PostGroupsSearchRequest = {
    /**
     * Filter by entity type (e.g., 'price')
     */
    entityType?: string | undefined;
    /**
     * Filter by group name (contains search)
     */
    name?: string | undefined;
    /**
     * Filter by lookup key (exact match)
     */
    lookupKey?: string | undefined;
    /**
     * Number of items to return (default: 20)
     */
    limit?: number | undefined;
    /**
     * Number of items to skip (default: 0)
     */
    offset?: number | undefined;
    /**
     * Field to sort by (name, created_at, updated_at)
     */
    sortBy?: string | undefined;
    /**
     * Sort order (asc, desc)
     */
    sortOrder?: string | undefined;
};
/** @internal */
export type PostGroupsSearchRequest$Outbound = {
    entity_type?: string | undefined;
    name?: string | undefined;
    lookup_key?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort_by?: string | undefined;
    sort_order?: string | undefined;
};
/** @internal */
export declare const PostGroupsSearchRequest$outboundSchema: z.ZodType<PostGroupsSearchRequest$Outbound, z.ZodTypeDef, PostGroupsSearchRequest>;
export declare function postGroupsSearchRequestToJSON(postGroupsSearchRequest: PostGroupsSearchRequest): string;
//# sourceMappingURL=postgroupssearch.d.ts.map