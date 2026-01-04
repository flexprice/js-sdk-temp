import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Secrets extends ClientSDK {
    /**
     * List API keys
     *
     * @remarks
     * Get a paginated list of API keys
     */
    getSecretsApiKeys(limit?: number | undefined, offset?: number | undefined, status?: string | undefined, options?: RequestOptions): Promise<components.DtoListSecretsResponse>;
    /**
     * Create a new API key
     *
     * @remarks
     * Create a new API key. Provide 'service_account_id' in body to create API key for a service account, otherwise creates for authenticated user.
     */
    postSecretsApiKeys(request: components.DtoCreateAPIKeyRequest, options?: RequestOptions): Promise<components.DtoCreateAPIKeyResponse>;
    /**
     * Delete an API key
     *
     * @remarks
     * Delete an API key by ID
     */
    deleteSecretsApiKeysId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=secrets.d.ts.map