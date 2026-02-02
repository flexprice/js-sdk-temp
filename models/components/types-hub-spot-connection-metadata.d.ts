import * as z from "zod/v3";
export type TypesHubSpotConnectionMetadata = {
    /**
     * Private App Access Token (encrypted)
     */
    accessToken?: string | undefined;
    /**
     * HubSpot App ID (optional, not encrypted)
     */
    appId?: string | undefined;
    /**
     * Private App Client Secret for webhook verification (encrypted)
     */
    clientSecret?: string | undefined;
};
/** @internal */
export type TypesHubSpotConnectionMetadata$Outbound = {
    access_token?: string | undefined;
    app_id?: string | undefined;
    client_secret?: string | undefined;
};
/** @internal */
export declare const TypesHubSpotConnectionMetadata$outboundSchema: z.ZodType<TypesHubSpotConnectionMetadata$Outbound, z.ZodTypeDef, TypesHubSpotConnectionMetadata>;
export declare function typesHubSpotConnectionMetadataToJSON(typesHubSpotConnectionMetadata: TypesHubSpotConnectionMetadata): string;
//# sourceMappingURL=types-hub-spot-connection-metadata.d.ts.map