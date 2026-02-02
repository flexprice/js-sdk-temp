import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class CustomerPortal extends ClientSDK {
    /**
     * Create a customer portal session
     *
     * @remarks
     * Generate a dashboard URL/token for a customer to access their billing information
     */
    getPortalExternalId(externalId: string, options?: RequestOptions): Promise<components.DtoPortalSessionResponse>;
}
//# sourceMappingURL=customer-portal.d.ts.map