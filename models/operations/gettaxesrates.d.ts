import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetTaxesRatesOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetTaxesRatesOrder = ClosedEnum<typeof GetTaxesRatesOrder>;
export declare const GetTaxesRatesScope: {
    readonly Internal: "INTERNAL";
    readonly External: "EXTERNAL";
    readonly Onetime: "ONETIME";
};
export type GetTaxesRatesScope = ClosedEnum<typeof GetTaxesRatesScope>;
export declare const GetTaxesRatesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetTaxesRatesStatus = ClosedEnum<typeof GetTaxesRatesStatus>;
export type GetTaxesRatesRequest = {
    endTime?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetTaxesRatesOrder | undefined;
    scope?: GetTaxesRatesScope | undefined;
    startTime?: string | undefined;
    status?: GetTaxesRatesStatus | undefined;
    taxrateCodes?: Array<string> | undefined;
    taxrateIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetTaxesRatesOrder$outboundSchema: z.ZodNativeEnum<typeof GetTaxesRatesOrder>;
/** @internal */
export declare const GetTaxesRatesScope$outboundSchema: z.ZodNativeEnum<typeof GetTaxesRatesScope>;
/** @internal */
export declare const GetTaxesRatesStatus$outboundSchema: z.ZodNativeEnum<typeof GetTaxesRatesStatus>;
/** @internal */
export type GetTaxesRatesRequest$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    scope?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    taxrate_codes?: Array<string> | undefined;
    taxrate_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetTaxesRatesRequest$outboundSchema: z.ZodType<GetTaxesRatesRequest$Outbound, z.ZodTypeDef, GetTaxesRatesRequest>;
export declare function getTaxesRatesRequestToJSON(getTaxesRatesRequest: GetTaxesRatesRequest): string;
//# sourceMappingURL=gettaxesrates.d.ts.map