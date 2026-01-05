import * as z from "zod/v3";
export type DtoDashboardPaginatedRequest = {
    limit?: number | undefined;
    page?: number | undefined;
};
/** @internal */
export type DtoDashboardPaginatedRequest$Outbound = {
    limit?: number | undefined;
    page?: number | undefined;
};
/** @internal */
export declare const DtoDashboardPaginatedRequest$outboundSchema: z.ZodType<DtoDashboardPaginatedRequest$Outbound, z.ZodTypeDef, DtoDashboardPaginatedRequest>;
export declare function dtoDashboardPaginatedRequestToJSON(dtoDashboardPaginatedRequest: DtoDashboardPaginatedRequest): string;
//# sourceMappingURL=dtodashboardpaginatedrequest.d.ts.map