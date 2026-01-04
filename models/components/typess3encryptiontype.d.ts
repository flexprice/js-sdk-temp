import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesS3EncryptionType: {
    readonly Aes256: "AES256";
    readonly AwsKms: "aws:kms";
    readonly AwsKmsDsse: "aws:kms:dsse";
};
export type TypesS3EncryptionType = ClosedEnum<typeof TypesS3EncryptionType>;
/** @internal */
export declare const TypesS3EncryptionType$inboundSchema: z.ZodNativeEnum<typeof TypesS3EncryptionType>;
/** @internal */
export declare const TypesS3EncryptionType$outboundSchema: z.ZodNativeEnum<typeof TypesS3EncryptionType>;
//# sourceMappingURL=typess3encryptiontype.d.ts.map