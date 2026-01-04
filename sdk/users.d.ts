import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Users extends ClientSDK {
    /**
     * Create service account
     *
     * @remarks
     * Create a new service account with required roles. Only service accounts can be created via this endpoint.
     */
    postUsers(request: components.DtoCreateUserRequest, options?: RequestOptions): Promise<components.DtoUserResponse>;
    /**
     * Get user info
     *
     * @remarks
     * Get the current user's information
     */
    getUsersMe(options?: RequestOptions): Promise<components.DtoUserResponse>;
    /**
     * List users with filters
     *
     * @remarks
     * Search and filter users by type (user/service_account), roles, etc.
     */
    postUsersSearch(request: components.TypesUserFilter, options?: RequestOptions): Promise<components.DtoListUsersResponse>;
}
//# sourceMappingURL=users.d.ts.map