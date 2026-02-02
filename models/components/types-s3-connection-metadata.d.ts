import * as z from "zod/v3";
export type TypesS3ConnectionMetadata = {
    /**
     * AWS access key (encrypted)
     */
    awsAccessKeyId?: string | undefined;
    /**
     * AWS secret access key (encrypted)
     */
    awsSecretAccessKey?: string | undefined;
    /**
     * AWS session token for temporary credentials (encrypted)
     */
    awsSessionToken?: string | undefined;
};
/** @internal */
export type TypesS3ConnectionMetadata$Outbound = {
    aws_access_key_id?: string | undefined;
    aws_secret_access_key?: string | undefined;
    aws_session_token?: string | undefined;
};
/** @internal */
export declare const TypesS3ConnectionMetadata$outboundSchema: z.ZodType<TypesS3ConnectionMetadata$Outbound, z.ZodTypeDef, TypesS3ConnectionMetadata>;
export declare function typesS3ConnectionMetadataToJSON(typesS3ConnectionMetadata: TypesS3ConnectionMetadata): string;
//# sourceMappingURL=types-s3-connection-metadata.d.ts.map