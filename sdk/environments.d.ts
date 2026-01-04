import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Environments extends ClientSDK {
    /**
     * Get environments
     *
     * @remarks
     * Get environments
     */
    getEnvironments(request: operations.GetEnvironmentsRequest, options?: RequestOptions): Promise<components.DtoListEnvironmentsResponse>;
    /**
     * Create an environment
     *
     * @remarks
     * Create an environment
     */
    postEnvironments(request: components.DtoCreateEnvironmentRequest, options?: RequestOptions): Promise<components.DtoEnvironmentResponse>;
    /**
     * Get an environment
     *
     * @remarks
     * Get an environment
     */
    getEnvironmentsId(id: string, options?: RequestOptions): Promise<components.DtoEnvironmentResponse>;
    /**
     * Update an environment
     *
     * @remarks
     * Update an environment
     */
    putEnvironmentsId(id: string, body: components.DtoUpdateEnvironmentRequest, options?: RequestOptions): Promise<components.DtoEnvironmentResponse>;
}
//# sourceMappingURL=environments.d.ts.map