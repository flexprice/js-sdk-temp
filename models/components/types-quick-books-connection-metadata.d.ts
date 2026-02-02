import * as z from "zod/v3";
export type TypesQuickBooksConnectionMetadata = {
    /**
     * Managed internally - set after auth code exchange or token refresh
     */
    accessToken?: string | undefined;
    /**
     * Optional - for initial setup via auth code (will be cleared after token exchange)
     */
    authCode?: string | undefined;
    /**
     * Required for initial connection setup
     */
    clientId?: string | undefined;
    /**
     * OAuth Client Secret (encrypted)
     */
    clientSecret?: string | undefined;
    /**
     * "sandbox" or "production"
     */
    environment?: string | undefined;
    /**
     * Optional configuration
     */
    incomeAccountId?: string | undefined;
    /**
     * Temporary OAuth session data (only used during OAuth flow, cleared after completion)
     */
    oauthSessionData?: string | undefined;
    /**
     * QuickBooks Company ID (not encrypted)
     */
    realmId?: string | undefined;
    /**
     * OAuth Redirect URI (temporary)
     */
    redirectUri?: string | undefined;
    /**
     * OAuth Refresh Token (encrypted)
     */
    refreshToken?: string | undefined;
    /**
     * Webhook security
     */
    webhookVerifierToken?: string | undefined;
};
/** @internal */
export type TypesQuickBooksConnectionMetadata$Outbound = {
    access_token?: string | undefined;
    auth_code?: string | undefined;
    client_id?: string | undefined;
    client_secret?: string | undefined;
    environment?: string | undefined;
    income_account_id?: string | undefined;
    oauth_session_data?: string | undefined;
    realm_id?: string | undefined;
    redirect_uri?: string | undefined;
    refresh_token?: string | undefined;
    webhook_verifier_token?: string | undefined;
};
/** @internal */
export declare const TypesQuickBooksConnectionMetadata$outboundSchema: z.ZodType<TypesQuickBooksConnectionMetadata$Outbound, z.ZodTypeDef, TypesQuickBooksConnectionMetadata>;
export declare function typesQuickBooksConnectionMetadataToJSON(typesQuickBooksConnectionMetadata: TypesQuickBooksConnectionMetadata): string;
//# sourceMappingURL=types-quick-books-connection-metadata.d.ts.map