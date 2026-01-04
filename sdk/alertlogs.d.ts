import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class AlertLogs extends ClientSDK {
    /**
     * List alert logs by filter
     *
     * @remarks
     * List alert logs by filter with optional expand for customer, wallet, and feature
     */
    postAlertSearch(request: components.TypesAlertLogFilter, options?: RequestOptions): Promise<components.DtoListAlertLogsResponse>;
}
//# sourceMappingURL=alertlogs.d.ts.map