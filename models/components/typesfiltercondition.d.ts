import * as z from "zod/v3";
import { GithubComFlexpriceFlexpriceInternalTypesValue, GithubComFlexpriceFlexpriceInternalTypesValue$Outbound } from "./githubcomflexpriceflexpriceinternaltypesvalue.js";
import { TypesDataType } from "./typesdatatype.js";
import { TypesFilterOperatorType } from "./typesfilteroperatortype.js";
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
//# sourceMappingURL=typesfiltercondition.d.ts.map