import * as z from "zod/v3";
import * as components from "../components/index.js";
import { FlexPriceError } from "./flexpriceerror.js";
export type ErrorsErrorResponseData = {
    error?: components.ErrorsErrorDetail | undefined;
    success?: boolean | undefined;
};
export declare class ErrorsErrorResponse extends FlexPriceError {
    error?: components.ErrorsErrorDetail | undefined;
    success?: boolean | undefined;
    /** The original data that was passed to this error instance. */
    data$: ErrorsErrorResponseData;
    constructor(err: ErrorsErrorResponseData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ErrorsErrorResponse$inboundSchema: z.ZodType<ErrorsErrorResponse, z.ZodTypeDef, unknown>;
//# sourceMappingURL=errorserrorresponse.d.ts.map