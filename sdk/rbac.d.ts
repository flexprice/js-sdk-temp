import { ClientSDK, RequestOptions } from "../lib/sdks.js";
export declare class Rbac extends ClientSDK {
    /**
     * List all RBAC roles
     *
     * @remarks
     * Returns all available roles with their permissions, names, and descriptions
     */
    getRbacRoles(options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
    /**
     * Get a specific RBAC role
     *
     * @remarks
     * Returns details of a specific role including permissions, name, and description
     */
    getRbacRolesId(id: string, options?: RequestOptions): Promise<{
        [k: string]: any;
    }>;
}
//# sourceMappingURL=rbac.d.ts.map