import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/v1"];
export type SDKOptions = {
    apiKeyAuth?: string | (() => Promise<string>) | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number | undefined;
    /**
     * Specifies the server URL to be used by the SDK
     */
    serverURL: string;
    /**
     * Allows overriding the default user agent used by the SDK
     */
    userAgent?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "1.0";
    readonly sdkVersion: "1.0.59";
    readonly genVersion: "2.794.1";
    readonly userAgent: "speakeasy-sdk/typescript 1.0.59 2.794.1 1.0 flexprice-sdk-test";
};
//# sourceMappingURL=config.d.ts.map