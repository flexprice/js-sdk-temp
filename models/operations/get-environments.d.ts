import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetEnvironmentsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetEnvironmentsStatus = ClosedEnum<typeof GetEnvironmentsStatus>;
export type GetEnvironmentsRequest = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: GetEnvironmentsStatus | undefined;
};
/** @internal */
export declare const GetEnvironmentsStatus$outboundSchema: z.ZodNativeEnum<typeof GetEnvironmentsStatus>;
/** @internal */
export type GetEnvironmentsRequest$Outbound = {
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetEnvironmentsRequest$outboundSchema: z.ZodType<GetEnvironmentsRequest$Outbound, z.ZodTypeDef, GetEnvironmentsRequest>;
export declare function getEnvironmentsRequestToJSON(getEnvironmentsRequest: GetEnvironmentsRequest): string;
//# sourceMappingURL=get-environments.d.ts.map