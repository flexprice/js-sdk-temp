# CustomerDashboard

## Overview

### Available Operations

* [getCustomerDashboardExternalId](#getcustomerdashboardexternalid) - Create a customer dashboard session
* [postCustomerDashboardAnalytics](#postcustomerdashboardanalytics) - Get customer analytics
* [postCustomerDashboardCostAnalytics](#postcustomerdashboardcostanalytics) - Get customer cost analytics
* [getCustomerDashboardInfo](#getcustomerdashboardinfo) - Get customer information
* [putCustomerDashboardInfo](#putcustomerdashboardinfo) - Update customer information
* [postCustomerDashboardInvoices](#postcustomerdashboardinvoices) - Get customer invoices
* [getCustomerDashboardInvoicesId](#getcustomerdashboardinvoicesid) - Get invoice by ID
* [postCustomerDashboardSubscriptions](#postcustomerdashboardsubscriptions) - Get customer subscriptions
* [getCustomerDashboardSubscriptionsId](#getcustomerdashboardsubscriptionsid) - Get subscription by ID
* [getCustomerDashboardUsage](#getcustomerdashboardusage) - Get customer usage summary
* [postCustomerDashboardWallets](#postcustomerdashboardwallets) - Get customer wallets
* [getCustomerDashboardWalletsId](#getcustomerdashboardwalletsid) - Get wallet by ID

## getCustomerDashboardExternalId

Generate a dashboard URL/token for a customer to access their billing information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/:external_id" method="get" path="/customer-dashboard/:external_id" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardExternalId();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardExternalId } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardExternalId.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardExternalId(flexPrice);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardExternalId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoDashboardSessionResponse](../../models/components/dtodashboardsessionresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 400, 404                   | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## postCustomerDashboardAnalytics

Get usage analytics for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/customer-dashboard/analytics" method="post" path="/customer-dashboard/analytics" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.postCustomerDashboardAnalytics({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    endTime: "2024-01-31T23:59:59Z",
    expand: [
      "price",
      "meter",
      "feature",
    ],
    featureIds: [
      "feat_123",
      "feat_456",
    ],
    groupBy: [
      "source",
      "feature_id",
    ],
    sources: [
      "api",
      "web",
    ],
    startTime: "2024-01-01T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPostCustomerDashboardAnalytics } from "flexprice-sdk-test/funcs/customerDashboardPostCustomerDashboardAnalytics.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPostCustomerDashboardAnalytics(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    endTime: "2024-01-31T23:59:59Z",
    expand: [
      "price",
      "meter",
      "feature",
    ],
    featureIds: [
      "feat_123",
      "feat_456",
    ],
    groupBy: [
      "source",
      "feature_id",
    ],
    sources: [
      "api",
      "web",
    ],
    startTime: "2024-01-01T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPostCustomerDashboardAnalytics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DtoDashboardAnalyticsRequest](../../models/components/dtodashboardanalyticsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCustomerDashboardAnalyticsSecurity](../../models/operations/postcustomerdashboardanalyticssecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoGetUsageAnalyticsResponse](../../models/components/dtogetusageanalyticsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## postCustomerDashboardCostAnalytics

Get cost analytics for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/customer-dashboard/cost-analytics" method="post" path="/customer-dashboard/cost-analytics" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.postCustomerDashboardCostAnalytics({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    endTime: "2024-01-31T23:59:59Z",
    featureIds: [
      "feat_123",
      "feat_456",
    ],
    startTime: "2024-01-01T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPostCustomerDashboardCostAnalytics } from "flexprice-sdk-test/funcs/customerDashboardPostCustomerDashboardCostAnalytics.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPostCustomerDashboardCostAnalytics(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    endTime: "2024-01-31T23:59:59Z",
    featureIds: [
      "feat_123",
      "feat_456",
    ],
    startTime: "2024-01-01T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPostCustomerDashboardCostAnalytics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DtoDashboardCostAnalyticsRequest](../../models/components/dtodashboardcostanalyticsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCustomerDashboardCostAnalyticsSecurity](../../models/operations/postcustomerdashboardcostanalyticssecurity.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoGetDetailedCostAnalyticsResponse](../../models/components/dtogetdetailedcostanalyticsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCustomerDashboardInfo

Get the authenticated customer's information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/info" method="get" path="/customer-dashboard/info" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardInfo({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardInfo } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardInfo.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardInfo(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCustomerDashboardInfoSecurity](../../models/operations/getcustomerdashboardinfosecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoCustomerResponse](../../models/components/dtocustomerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## putCustomerDashboardInfo

Update the authenticated customer's profile information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/customer-dashboard/info" method="put" path="/customer-dashboard/info" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.putCustomerDashboardInfo({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPutCustomerDashboardInfo } from "flexprice-sdk-test/funcs/customerDashboardPutCustomerDashboardInfo.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPutCustomerDashboardInfo(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPutCustomerDashboardInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DtoUpdateCustomerRequest](../../models/components/dtoupdatecustomerrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PutCustomerDashboardInfoSecurity](../../models/operations/putcustomerdashboardinfosecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoCustomerResponse](../../models/components/dtocustomerresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 400, 401                   | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## postCustomerDashboardInvoices

Get all invoices for the authenticated customer with pagination

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/customer-dashboard/invoices" method="post" path="/customer-dashboard/invoices" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.postCustomerDashboardInvoices({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 20,
    page: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPostCustomerDashboardInvoices } from "flexprice-sdk-test/funcs/customerDashboardPostCustomerDashboardInvoices.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPostCustomerDashboardInvoices(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 20,
    page: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPostCustomerDashboardInvoices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DtoDashboardPaginatedRequest](../../models/components/dtodashboardpaginatedrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCustomerDashboardInvoicesSecurity](../../models/operations/postcustomerdashboardinvoicessecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoListInvoicesResponse](../../models/components/dtolistinvoicesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCustomerDashboardInvoicesId

Get a specific invoice for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/invoices/{id}" method="get" path="/customer-dashboard/invoices/{id}" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardInvoicesId({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardInvoicesId } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardInvoicesId.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardInvoicesId(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardInvoicesId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCustomerDashboardInvoicesIdSecurity](../../models/operations/getcustomerdashboardinvoicesidsecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Invoice ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoInvoiceResponse](../../models/components/dtoinvoiceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401, 404                   | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## postCustomerDashboardSubscriptions

Get all subscriptions for the authenticated customer with pagination

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/customer-dashboard/subscriptions" method="post" path="/customer-dashboard/subscriptions" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.postCustomerDashboardSubscriptions({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 20,
    page: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPostCustomerDashboardSubscriptions } from "flexprice-sdk-test/funcs/customerDashboardPostCustomerDashboardSubscriptions.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPostCustomerDashboardSubscriptions(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 20,
    page: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPostCustomerDashboardSubscriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DtoDashboardPaginatedRequest](../../models/components/dtodashboardpaginatedrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PostCustomerDashboardSubscriptionsSecurity](../../models/operations/postcustomerdashboardsubscriptionssecurity.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoListSubscriptionsResponse](../../models/components/dtolistsubscriptionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCustomerDashboardSubscriptionsId

Get a specific subscription for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/subscriptions/{id}" method="get" path="/customer-dashboard/subscriptions/{id}" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardSubscriptionsId({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardSubscriptionsId } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardSubscriptionsId.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardSubscriptionsId(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardSubscriptionsId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCustomerDashboardSubscriptionsIdSecurity](../../models/operations/getcustomerdashboardsubscriptionsidsecurity.md)                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Subscription ID                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoSubscriptionResponse](../../models/components/dtosubscriptionresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401, 404                   | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCustomerDashboardUsage

Get usage summary for the authenticated customer's metered features

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/usage" method="get" path="/customer-dashboard/usage" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardUsage({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardUsage } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardUsage.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardUsage(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerDashboardUsageRequest](../../models/operations/getcustomerdashboardusagerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetCustomerDashboardUsageSecurity](../../models/operations/getcustomerdashboardusagesecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoCustomerUsageSummaryResponse](../../models/components/dtocustomerusagesummaryresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## postCustomerDashboardWallets

Get all wallet balances for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/customer-dashboard/wallets" method="post" path="/customer-dashboard/wallets" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.postCustomerDashboardWallets({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardPostCustomerDashboardWallets } from "flexprice-sdk-test/funcs/customerDashboardPostCustomerDashboardWallets.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardPostCustomerDashboardWallets(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardPostCustomerDashboardWallets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.PostCustomerDashboardWalletsSecurity](../../models/operations/postcustomerdashboardwalletssecurity.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoWalletBalanceResponse[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401                        | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getCustomerDashboardWalletsId

Get a specific wallet for the authenticated customer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/customer-dashboard/wallets/{id}" method="get" path="/customer-dashboard/wallets/{id}" -->
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await flexPrice.customerDashboard.getCustomerDashboardWalletsId({
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FlexPriceCore } from "flexprice-sdk-test/core.js";
import { customerDashboardGetCustomerDashboardWalletsId } from "flexprice-sdk-test/funcs/customerDashboardGetCustomerDashboardWalletsId.js";

// Use `FlexPriceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const flexPrice = new FlexPriceCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await customerDashboardGetCustomerDashboardWalletsId(flexPrice, {
    bearerAuth: "<YOUR_API_KEY_HERE>",
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerDashboardGetCustomerDashboardWalletsId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetCustomerDashboardWalletsIdSecurity](../../models/operations/getcustomerdashboardwalletsidsecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Wallet ID                                                                                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DtoWalletBalanceResponse](../../models/components/dtowalletbalanceresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorsErrorResponse | 401, 404                   | application/json           |
| errors.ErrorsErrorResponse | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |