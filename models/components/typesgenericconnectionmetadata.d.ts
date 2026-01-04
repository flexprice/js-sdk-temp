import * as z from "zod/v3";
export type TypesGenericConnectionMetadata = {
    data?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export type TypesGenericConnectionMetadata$Outbound = {
    data?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const TypesGenericConnectionMetadata$outboundSchema: z.ZodType<TypesGenericConnectionMetadata$Outbound, z.ZodTypeDef, TypesGenericConnectionMetadata>;
export declare function typesGenericConnectionMetadataToJSON(typesGenericConnectionMetadata: TypesGenericConnectionMetadata): string;
//# sourceMappingURL=typesgenericconnectionmetadata.d.ts.map