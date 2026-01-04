import { FlexPriceError } from "./flexpriceerror.js";
/** The fallback error class if no more specific error class is matched */
export declare class SDKError extends FlexPriceError {
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
//# sourceMappingURL=sdkerror.d.ts.map