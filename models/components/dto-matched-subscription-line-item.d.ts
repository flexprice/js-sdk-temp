import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { SubscriptionSubscriptionLineItem } from "./subscription-subscription-line-item.js";
export type DtoMatchedSubscriptionLineItem = {
    endDate?: string | undefined;
    isActiveForEvent?: boolean | undefined;
    priceId?: string | undefined;
    startDate?: string | undefined;
    subLineItemId?: string | undefined;
    subscriptionId?: string | undefined;
    subscriptionLineItem?: SubscriptionSubscriptionLineItem | undefined;
    timestampWithinRange?: boolean | undefined;
};
/** @internal */
export declare const DtoMatchedSubscriptionLineItem$inboundSchema: z.ZodType<DtoMatchedSubscriptionLineItem, z.ZodTypeDef, unknown>;
export declare function dtoMatchedSubscriptionLineItemFromJSON(jsonString: string): SafeParseResult<DtoMatchedSubscriptionLineItem, SDKValidationError>;
//# sourceMappingURL=dto-matched-subscription-line-item.d.ts.map