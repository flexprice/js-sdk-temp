import * as z from "zod/v3";
import { GithubComFlexpriceFlexpriceInternalTypesValue, GithubComFlexpriceFlexpriceInternalTypesValue$Outbound } from "./github-com-flexprice-flexprice-internal-types-value.js";
import { TypesDataType } from "./types-data-type.js";
import { TypesFilterOperatorType } from "./types-filter-operator-type.js";
export type TypesFilterCondition = {
    dataType?: TypesDataType | undefined;
    field?: string | undefined;
    operator?: TypesFilterOperatorType | undefined;
    value?: GithubComFlexpriceFlexpriceInternalTypesValue | undefined;
};
/** @internal */
export type TypesFilterCondition$Outbound = {
    data_type?: string | undefined;
    field?: string | undefined;
    operator?: string | undefined;
    value?: GithubComFlexpriceFlexpriceInternalTypesValue$Outbound | undefined;
};
/** @internal */
export declare const TypesFilterCondition$outboundSchema: z.ZodType<TypesFilterCondition$Outbound, z.ZodTypeDef, TypesFilterCondition>;
export declare function typesFilterConditionToJSON(typesFilterCondition: TypesFilterCondition): string;
//# sourceMappingURL=types-filter-condition.d.ts.map