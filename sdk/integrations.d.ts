import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Integrations extends ClientSDK {
    /**
     * Get integration details
     *
     * @remarks
     * Get details of a specific integration
     */
    getSecretsIntegrationsByProviderProvider(provider: string, options?: RequestOptions): Promise<components.DtoSecretResponse>;
    /**
     * Create or update an integration
     *
     * @remarks
     * Create or update integration credentials
     */
    postSecretsIntegrationsCreateProvider(provider: string, body: components.DtoCreateIntegrationRequest, options?: RequestOptions): Promise<components.DtoSecretResponse>;
    /**
     * List linked integrations
     *
     * @remarks
     * Get a list of unique providers which have a valid linked integration secret
     */
    getSecretsIntegrationsLinked(options?: RequestOptions): Promise<components.DtoLinkedIntegrationsResponse>;
    /**
     * Delete an integration
     *
     * @remarks
     * Delete integration credentials
     */
    deleteSecretsIntegrationsId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=integrations.d.ts.map