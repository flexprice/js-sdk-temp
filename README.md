# flexprice-sdk-test

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *flexprice-sdk-test* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=flexprice-sdk-test&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/flexprice/develop-cw0). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

FlexPrice API: FlexPrice API Service
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [flexprice-sdk-test](#flexprice-sdk-test)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.addons.getAddons({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `apiKeyAuth` | apiKey | API key |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.addons.getAddons({});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Addons](docs/sdks/addons/README.md)

* [getAddons](docs/sdks/addons/README.md#getaddons) - List addons
* [postAddons](docs/sdks/addons/README.md#postaddons) - Create addon
* [getAddonsLookupLookupKey](docs/sdks/addons/README.md#getaddonslookuplookupkey) - Get addon by lookup key
* [postAddonsSearch](docs/sdks/addons/README.md#postaddonssearch) - List addons by filter
* [getAddonsId](docs/sdks/addons/README.md#getaddonsid) - Get addon
* [putAddonsId](docs/sdks/addons/README.md#putaddonsid) - Update addon
* [deleteAddonsId](docs/sdks/addons/README.md#deleteaddonsid) - Delete addon

### [AlertLogs](docs/sdks/alertlogs/README.md)

* [postAlertSearch](docs/sdks/alertlogs/README.md#postalertsearch) - List alert logs by filter

### [Auth](docs/sdks/auth/README.md)

* [postAuthLogin](docs/sdks/auth/README.md#postauthlogin) - Login
* [postAuthSignup](docs/sdks/auth/README.md#postauthsignup) - Sign up

### [Connections](docs/sdks/connections/README.md)

* [getConnections](docs/sdks/connections/README.md#getconnections) - Get connections
* [postConnectionsSearch](docs/sdks/connections/README.md#postconnectionssearch) - List connections by filter
* [getConnectionsId](docs/sdks/connections/README.md#getconnectionsid) - Get a connection
* [putConnectionsId](docs/sdks/connections/README.md#putconnectionsid) - Update a connection
* [deleteConnectionsId](docs/sdks/connections/README.md#deleteconnectionsid) - Delete a connection

### [Costs](docs/sdks/costs/README.md)

* [postCosts](docs/sdks/costs/README.md#postcosts) - Create a new costsheet
* [getCostsActive](docs/sdks/costs/README.md#getcostsactive) - Get active costsheet for tenant
* [postCostsAnalytics](docs/sdks/costs/README.md#postcostsanalytics) - Get combined revenue and cost analytics
* [postCostsAnalyticsV2](docs/sdks/costs/README.md#postcostsanalyticsv2) - Get combined revenue and cost analytics
* [postCostsSearch](docs/sdks/costs/README.md#postcostssearch) - List costsheets by filter
* [getCostsId](docs/sdks/costs/README.md#getcostsid) - Get a costsheet by ID
* [putCostsId](docs/sdks/costs/README.md#putcostsid) - Update a costsheet
* [deleteCostsId](docs/sdks/costs/README.md#deletecostsid) - Delete a costsheet

### [Coupons](docs/sdks/coupons/README.md)

* [getCoupons](docs/sdks/coupons/README.md#getcoupons) - List coupons with filtering
* [postCoupons](docs/sdks/coupons/README.md#postcoupons) - Create a new coupon
* [getCouponsId](docs/sdks/coupons/README.md#getcouponsid) - Get a coupon by ID
* [putCouponsId](docs/sdks/coupons/README.md#putcouponsid) - Update a coupon
* [deleteCouponsId](docs/sdks/coupons/README.md#deletecouponsid) - Delete a coupon

### [CreditNotes](docs/sdks/creditnotes/README.md)

* [getCreditnotes](docs/sdks/creditnotes/README.md#getcreditnotes) - List credit notes with filtering
* [postCreditnotes](docs/sdks/creditnotes/README.md#postcreditnotes) - Create a new credit note
* [getCreditnotesId](docs/sdks/creditnotes/README.md#getcreditnotesid) - Get a credit note by ID
* [postCreditnotesIdFinalize](docs/sdks/creditnotes/README.md#postcreditnotesidfinalize) - Process a draft credit note
* [postCreditnotesIdVoid](docs/sdks/creditnotes/README.md#postcreditnotesidvoid) - Void a credit note

### [CreditGrants](docs/sdks/creditgrants/README.md)

* [getCreditgrants](docs/sdks/creditgrants/README.md#getcreditgrants) - Get credit grants
* [postCreditgrants](docs/sdks/creditgrants/README.md#postcreditgrants) - Create a new credit grant
* [getCreditgrantsId](docs/sdks/creditgrants/README.md#getcreditgrantsid) - Get a credit grant by ID
* [putCreditgrantsId](docs/sdks/creditgrants/README.md#putcreditgrantsid) - Update a credit grant
* [deleteCreditgrantsId](docs/sdks/creditgrants/README.md#deletecreditgrantsid) - Delete a credit grant
* [getPlansIdCreditgrants](docs/sdks/creditgrants/README.md#getplansidcreditgrants) - Get plan credit grants

### [CustomerPortal](docs/sdks/customerportal/README.md)

* [getPortalExternalId](docs/sdks/customerportal/README.md#getportalexternalid) - Create a customer portal session

### [Customers](docs/sdks/customers/README.md)

* [getCustomers](docs/sdks/customers/README.md#getcustomers) - Get customers
* [putCustomers](docs/sdks/customers/README.md#putcustomers) - Update a customer
* [postCustomers](docs/sdks/customers/README.md#postcustomers) - Create a customer
* [getCustomersExternalExternalId](docs/sdks/customers/README.md#getcustomersexternalexternalid) - Get a customer by external id
* [postCustomersSearch](docs/sdks/customers/README.md#postcustomerssearch) - List customers by filter
* [getCustomersUsage](docs/sdks/customers/README.md#getcustomersusage) - Get customer usage summary
* [getCustomersId](docs/sdks/customers/README.md#getcustomersid) - Get a customer
* [deleteCustomersId](docs/sdks/customers/README.md#deletecustomersid) - Delete a customer
* [getCustomersIdEntitlements](docs/sdks/customers/README.md#getcustomersidentitlements) - Get customer entitlements
* [getCustomersIdGrantsUpcoming](docs/sdks/customers/README.md#getcustomersidgrantsupcoming) - Get upcoming credit grant applications

### [Entitlements](docs/sdks/entitlements/README.md)

* [getAddonsIdEntitlements](docs/sdks/entitlements/README.md#getaddonsidentitlements) - Get addon entitlements
* [getEntitlements](docs/sdks/entitlements/README.md#getentitlements) - Get entitlements
* [postEntitlements](docs/sdks/entitlements/README.md#postentitlements) - Create a new entitlement
* [postEntitlementsBulk](docs/sdks/entitlements/README.md#postentitlementsbulk) - Create multiple entitlements in bulk
* [postEntitlementsSearch](docs/sdks/entitlements/README.md#postentitlementssearch) - List entitlements by filter
* [getEntitlementsId](docs/sdks/entitlements/README.md#getentitlementsid) - Get an entitlement by ID
* [putEntitlementsId](docs/sdks/entitlements/README.md#putentitlementsid) - Update an entitlement
* [deleteEntitlementsId](docs/sdks/entitlements/README.md#deleteentitlementsid) - Delete an entitlement
* [getPlansIdEntitlements](docs/sdks/entitlements/README.md#getplansidentitlements) - Get plan entitlements

### [EntityIntegrationMappings](docs/sdks/entityintegrationmappings/README.md)

* [getEntityIntegrationMappings](docs/sdks/entityintegrationmappings/README.md#getentityintegrationmappings) - List entity integration mappings
* [postEntityIntegrationMappings](docs/sdks/entityintegrationmappings/README.md#postentityintegrationmappings) - Create entity integration mapping
* [getEntityIntegrationMappingsId](docs/sdks/entityintegrationmappings/README.md#getentityintegrationmappingsid) - Get entity integration mapping
* [deleteEntityIntegrationMappingsId](docs/sdks/entityintegrationmappings/README.md#deleteentityintegrationmappingsid) - Delete entity integration mapping

### [Environments](docs/sdks/environments/README.md)

* [getEnvironments](docs/sdks/environments/README.md#getenvironments) - Get environments
* [postEnvironments](docs/sdks/environments/README.md#postenvironments) - Create an environment
* [getEnvironmentsId](docs/sdks/environments/README.md#getenvironmentsid) - Get an environment
* [putEnvironmentsId](docs/sdks/environments/README.md#putenvironmentsid) - Update an environment

### [Events](docs/sdks/events/README.md)

* [postEvents](docs/sdks/events/README.md#postevents) - Ingest event
* [postEventsAnalytics](docs/sdks/events/README.md#posteventsanalytics) - Get usage analytics
* [postEventsBulk](docs/sdks/events/README.md#posteventsbulk) - Bulk Ingest events
* [postEventsHuggingfaceInference](docs/sdks/events/README.md#posteventshuggingfaceinference) - Get hugging face inference data
* [getEventsMonitoring](docs/sdks/events/README.md#geteventsmonitoring) - Get monitoring data
* [postEventsQuery](docs/sdks/events/README.md#posteventsquery) - List raw events
* [postEventsUsage](docs/sdks/events/README.md#posteventsusage) - Get usage statistics
* [postEventsUsageMeter](docs/sdks/events/README.md#posteventsusagemeter) - Get usage by meter
* [getEventsId](docs/sdks/events/README.md#geteventsid) - Get event by ID

### [Features](docs/sdks/features/README.md)

* [getFeatures](docs/sdks/features/README.md#getfeatures) - List features
* [postFeatures](docs/sdks/features/README.md#postfeatures) - Create a new feature
* [postFeaturesSearch](docs/sdks/features/README.md#postfeaturessearch) - List features by filter
* [getFeaturesId](docs/sdks/features/README.md#getfeaturesid) - Get a feature by ID
* [putFeaturesId](docs/sdks/features/README.md#putfeaturesid) - Update a feature
* [deleteFeaturesId](docs/sdks/features/README.md#deletefeaturesid) - Delete a feature

### [Groups](docs/sdks/groups/README.md)

* [postGroups](docs/sdks/groups/README.md#postgroups) - Create a group
* [postGroupsSearch](docs/sdks/groups/README.md#postgroupssearch) - Get groups
* [getGroupsId](docs/sdks/groups/README.md#getgroupsid) - Get a group
* [deleteGroupsId](docs/sdks/groups/README.md#deletegroupsid) - Delete a group

### [Integrations](docs/sdks/integrations/README.md)

* [getSecretsIntegrationsByProviderProvider](docs/sdks/integrations/README.md#getsecretsintegrationsbyproviderprovider) - Get integration details
* [postSecretsIntegrationsCreateProvider](docs/sdks/integrations/README.md#postsecretsintegrationscreateprovider) - Create or update an integration
* [getSecretsIntegrationsLinked](docs/sdks/integrations/README.md#getsecretsintegrationslinked) - List linked integrations
* [deleteSecretsIntegrationsId](docs/sdks/integrations/README.md#deletesecretsintegrationsid) - Delete an integration

### [Invoices](docs/sdks/invoices/README.md)

* [getCustomersIdInvoicesSummary](docs/sdks/invoices/README.md#getcustomersidinvoicessummary) - Get a customer invoice summary
* [getInvoices](docs/sdks/invoices/README.md#getinvoices) - List invoices
* [postInvoices](docs/sdks/invoices/README.md#postinvoices) - Create a new one off invoice
* [postInvoicesPreview](docs/sdks/invoices/README.md#postinvoicespreview) - Get a preview invoice
* [postInvoicesSearch](docs/sdks/invoices/README.md#postinvoicessearch) - List invoices by filter
* [getInvoicesId](docs/sdks/invoices/README.md#getinvoicesid) - Get an invoice by ID
* [putInvoicesId](docs/sdks/invoices/README.md#putinvoicesid) - Update an invoice
* [postInvoicesIdCommsTrigger](docs/sdks/invoices/README.md#postinvoicesidcommstrigger) - Trigger communication webhook for an invoice
* [postInvoicesIdFinalize](docs/sdks/invoices/README.md#postinvoicesidfinalize) - Finalize an invoice
* [putInvoicesIdPayment](docs/sdks/invoices/README.md#putinvoicesidpayment) - Update invoice payment status
* [postInvoicesIdPaymentAttempt](docs/sdks/invoices/README.md#postinvoicesidpaymentattempt) - Attempt payment for an invoice
* [getInvoicesIdPdf](docs/sdks/invoices/README.md#getinvoicesidpdf) - Get PDF for an invoice
* [postInvoicesIdRecalculate](docs/sdks/invoices/README.md#postinvoicesidrecalculate) - Recalculate invoice totals and line items
* [postInvoicesIdVoid](docs/sdks/invoices/README.md#postinvoicesidvoid) - Void an invoice

### [Payments](docs/sdks/payments/README.md)

* [getPayments](docs/sdks/payments/README.md#getpayments) - List payments
* [postPayments](docs/sdks/payments/README.md#postpayments) - Create a new payment
* [getPaymentsId](docs/sdks/payments/README.md#getpaymentsid) - Get a payment by ID
* [putPaymentsId](docs/sdks/payments/README.md#putpaymentsid) - Update a payment
* [deletePaymentsId](docs/sdks/payments/README.md#deletepaymentsid) - Delete a payment
* [postPaymentsIdProcess](docs/sdks/payments/README.md#postpaymentsidprocess) - Process a payment

### [Plans](docs/sdks/plans/README.md)

* [getPlans](docs/sdks/plans/README.md#getplans) - Get plans
* [postPlans](docs/sdks/plans/README.md#postplans) - Create a new plan
* [postPlansSearch](docs/sdks/plans/README.md#postplanssearch) - List plans by filter
* [getPlansId](docs/sdks/plans/README.md#getplansid) - Get a plan
* [putPlansId](docs/sdks/plans/README.md#putplansid) - Update a plan
* [deletePlansId](docs/sdks/plans/README.md#deleteplansid) - Delete a plan
* [postPlansIdSyncSubscriptions](docs/sdks/plans/README.md#postplansidsyncsubscriptions) - Synchronize plan prices

### [PriceUnits](docs/sdks/priceunits/README.md)

* [getPricesUnits](docs/sdks/priceunits/README.md#getpricesunits) - List price units
* [postPricesUnits](docs/sdks/priceunits/README.md#postpricesunits) - Create a new price unit
* [getPricesUnitsCodeCode](docs/sdks/priceunits/README.md#getpricesunitscodecode) - Get a price unit by code
* [postPricesUnitsSearch](docs/sdks/priceunits/README.md#postpricesunitssearch) - List price units by filter
* [getPricesUnitsId](docs/sdks/priceunits/README.md#getpricesunitsid) - Get a price unit by ID
* [putPricesUnitsId](docs/sdks/priceunits/README.md#putpricesunitsid) - Update a price unit
* [deletePricesUnitsId](docs/sdks/priceunits/README.md#deletepricesunitsid) - Delete a price unit

### [Prices](docs/sdks/prices/README.md)

* [getPrices](docs/sdks/prices/README.md#getprices) - Get prices
* [postPrices](docs/sdks/prices/README.md#postprices) - Create a new price
* [postPricesBulk](docs/sdks/prices/README.md#postpricesbulk) - Create multiple prices in bulk
* [getPricesLookupLookupKey](docs/sdks/prices/README.md#getpriceslookuplookupkey) - Get price by lookup key
* [postPricesSearch](docs/sdks/prices/README.md#postpricessearch) - List prices by filter
* [getPricesId](docs/sdks/prices/README.md#getpricesid) - Get a price by ID
* [putPricesId](docs/sdks/prices/README.md#putpricesid) - Update a price
* [deletePricesId](docs/sdks/prices/README.md#deletepricesid) - Delete a price

### [Rbac](docs/sdks/rbac/README.md)

* [getRbacRoles](docs/sdks/rbac/README.md#getrbacroles) - List all RBAC roles
* [getRbacRolesId](docs/sdks/rbac/README.md#getrbacrolesid) - Get a specific RBAC role

### [ScheduledTasks](docs/sdks/scheduledtasks/README.md)

* [getTasksScheduled](docs/sdks/scheduledtasks/README.md#gettasksscheduled) - List scheduled tasks
* [postTasksScheduled](docs/sdks/scheduledtasks/README.md#posttasksscheduled) - Create a scheduled task
* [postTasksScheduledScheduleUpdateBillingPeriod](docs/sdks/scheduledtasks/README.md#posttasksscheduledscheduleupdatebillingperiod) - Schedule update billing period
* [getTasksScheduledId](docs/sdks/scheduledtasks/README.md#gettasksscheduledid) - Get a scheduled task
* [putTasksScheduledId](docs/sdks/scheduledtasks/README.md#puttasksscheduledid) - Update a scheduled task
* [deleteTasksScheduledId](docs/sdks/scheduledtasks/README.md#deletetasksscheduledid) - Delete a scheduled task
* [postTasksScheduledIdRun](docs/sdks/scheduledtasks/README.md#posttasksscheduledidrun) - Trigger force run

### [Secrets](docs/sdks/secrets/README.md)

* [getSecretsApiKeys](docs/sdks/secrets/README.md#getsecretsapikeys) - List API keys
* [postSecretsApiKeys](docs/sdks/secrets/README.md#postsecretsapikeys) - Create a new API key
* [deleteSecretsApiKeysId](docs/sdks/secrets/README.md#deletesecretsapikeysid) - Delete an API key

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [getSubscriptions](docs/sdks/subscriptions/README.md#getsubscriptions) - List subscriptions
* [postSubscriptions](docs/sdks/subscriptions/README.md#postsubscriptions) - Create subscription
* [postSubscriptionsAddon](docs/sdks/subscriptions/README.md#postsubscriptionsaddon) - Add addon to subscription
* [deleteSubscriptionsAddon](docs/sdks/subscriptions/README.md#deletesubscriptionsaddon) - Remove addon from subscription
* [putSubscriptionsLineitemsId](docs/sdks/subscriptions/README.md#putsubscriptionslineitemsid) - Update subscription line item
* [deleteSubscriptionsLineitemsId](docs/sdks/subscriptions/README.md#deletesubscriptionslineitemsid) - Delete subscription line item
* [postSubscriptionsSearch](docs/sdks/subscriptions/README.md#postsubscriptionssearch) - List subscriptions by filter
* [postSubscriptionsUsage](docs/sdks/subscriptions/README.md#postsubscriptionsusage) - Get usage by subscription
* [getSubscriptionsId](docs/sdks/subscriptions/README.md#getsubscriptionsid) - Get subscription
* [postSubscriptionsIdActivate](docs/sdks/subscriptions/README.md#postsubscriptionsidactivate) - Activate draft subscription
* [getSubscriptionsIdAddonsAssociations](docs/sdks/subscriptions/README.md#getsubscriptionsidaddonsassociations) - Get active addon associations
* [postSubscriptionsIdCancel](docs/sdks/subscriptions/README.md#postsubscriptionsidcancel) - Cancel subscription
* [postSubscriptionsIdChangeExecute](docs/sdks/subscriptions/README.md#postsubscriptionsidchangeexecute) - Execute subscription plan change
* [postSubscriptionsIdChangePreview](docs/sdks/subscriptions/README.md#postsubscriptionsidchangepreview) - Preview subscription plan change
* [getSubscriptionsIdEntitlements](docs/sdks/subscriptions/README.md#getsubscriptionsidentitlements) - Get subscription entitlements
* [getSubscriptionsIdGrantsUpcoming](docs/sdks/subscriptions/README.md#getsubscriptionsidgrantsupcoming) - Get upcoming credit grant applications
* [postSubscriptionsIdPause](docs/sdks/subscriptions/README.md#postsubscriptionsidpause) - Pause a subscription
* [getSubscriptionsIdPauses](docs/sdks/subscriptions/README.md#getsubscriptionsidpauses) - List all pauses for a subscription
* [postSubscriptionsIdResume](docs/sdks/subscriptions/README.md#postsubscriptionsidresume) - Resume a paused subscription
* [getSubscriptionsIdV2](docs/sdks/subscriptions/README.md#getsubscriptionsidv2) - Get subscription V2
* [getV1SubscriptionSchedules](docs/sdks/subscriptions/README.md#getv1subscriptionschedules) - List all subscription schedules
* [getV1SubscriptionSchedulesId](docs/sdks/subscriptions/README.md#getv1subscriptionschedulesid) - Get subscription schedule
* [postV1SubscriptionsSchedulesScheduleIdCancel](docs/sdks/subscriptions/README.md#postv1subscriptionsschedulesscheduleidcancel) - Cancel subscription schedule
* [getV1SubscriptionsSubscriptionIdSchedules](docs/sdks/subscriptions/README.md#getv1subscriptionssubscriptionidschedules) - List subscription schedules

### [Tasks](docs/sdks/tasks/README.md)

* [getTasks](docs/sdks/tasks/README.md#gettasks) - List tasks
* [postTasks](docs/sdks/tasks/README.md#posttasks) - Create a new task
* [getTasksResult](docs/sdks/tasks/README.md#gettasksresult) - Get task processing result
* [getTasksId](docs/sdks/tasks/README.md#gettasksid) - Get a task
* [getTasksIdDownload](docs/sdks/tasks/README.md#gettasksiddownload) - Download task export file
* [putTasksIdStatus](docs/sdks/tasks/README.md#puttasksidstatus) - Update task status

### [TaxAssociations](docs/sdks/taxassociations/README.md)

* [getTaxesAssociations](docs/sdks/taxassociations/README.md#gettaxesassociations) - List tax associations
* [postTaxesAssociations](docs/sdks/taxassociations/README.md#posttaxesassociations) - Create Tax Association
* [getTaxesAssociationsId](docs/sdks/taxassociations/README.md#gettaxesassociationsid) - Get Tax Association
* [putTaxesAssociationsId](docs/sdks/taxassociations/README.md#puttaxesassociationsid) - Update tax association
* [deleteTaxesAssociationsId](docs/sdks/taxassociations/README.md#deletetaxesassociationsid) - Delete tax association

### [TaxRates](docs/sdks/taxrates/README.md)

* [getTaxesRates](docs/sdks/taxrates/README.md#gettaxesrates) - Get tax rates
* [postTaxesRates](docs/sdks/taxrates/README.md#posttaxesrates) - Create a tax rate
* [getTaxesRatesId](docs/sdks/taxrates/README.md#gettaxesratesid) - Get a tax rate
* [putTaxesRatesId](docs/sdks/taxrates/README.md#puttaxesratesid) - Update a tax rate
* [deleteTaxesRatesId](docs/sdks/taxrates/README.md#deletetaxesratesid) - Delete a tax rate

### [Tenants](docs/sdks/tenants/README.md)

* [getTenantBilling](docs/sdks/tenants/README.md#gettenantbilling) - Get billing usage for the current tenant
* [postTenants](docs/sdks/tenants/README.md#posttenants) - Create a new tenant
* [putTenantsUpdate](docs/sdks/tenants/README.md#puttenantsupdate) - Update a tenant
* [getTenantsId](docs/sdks/tenants/README.md#gettenantsid) - Get tenant by ID

### [Users](docs/sdks/users/README.md)

* [postUsers](docs/sdks/users/README.md#postusers) - Create service account
* [getUsersMe](docs/sdks/users/README.md#getusersme) - Get user info
* [postUsersSearch](docs/sdks/users/README.md#postuserssearch) - List users with filters

### [Wallets](docs/sdks/wallets/README.md)

* [getCustomersWallets](docs/sdks/wallets/README.md#getcustomerswallets) - Get Customer Wallets
* [getCustomersIdWallets](docs/sdks/wallets/README.md#getcustomersidwallets) - Get wallets by customer ID
* [getWallets](docs/sdks/wallets/README.md#getwallets) - List wallets
* [postWallets](docs/sdks/wallets/README.md#postwallets) - Create a new wallet
* [postWalletsSearch](docs/sdks/wallets/README.md#postwalletssearch) - List wallets by filter
* [postWalletsTransactionsSearch](docs/sdks/wallets/README.md#postwalletstransactionssearch) - List wallet transactions by filter
* [getWalletsId](docs/sdks/wallets/README.md#getwalletsid) - Get wallet by ID
* [putWalletsId](docs/sdks/wallets/README.md#putwalletsid) - Update a wallet
* [getWalletsIdBalanceRealTime](docs/sdks/wallets/README.md#getwalletsidbalancerealtime) - Get wallet balance
* [postWalletsIdTerminate](docs/sdks/wallets/README.md#postwalletsidterminate) - Terminate a wallet
* [postWalletsIdTopUp](docs/sdks/wallets/README.md#postwalletsidtopup) - Top up wallet
* [getWalletsIdTransactions](docs/sdks/wallets/README.md#getwalletsidtransactions) - Get wallet transactions

### [Webhooks](docs/sdks/webhooks/README.md)

* [postWebhooksChargebeeTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhookschargebeetenantidenvironmentid) - Handle Chargebee webhook events
* [postWebhooksHubspotTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhookshubspottenantidenvironmentid) - Handle HubSpot webhook events
* [postWebhooksMoyasarTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhooksmoyasartenantidenvironmentid) - Handle Moyasar webhook events
* [postWebhooksNomodTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhooksnomodtenantidenvironmentid) - Handle Nomod webhook events
* [postWebhooksQuickbooksTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhooksquickbookstenantidenvironmentid) - Handle QuickBooks webhook events
* [postWebhooksRazorpayTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhooksrazorpaytenantidenvironmentid) - Handle Razorpay webhook events
* [postWebhooksStripeTenantIdEnvironmentId](docs/sdks/webhooks/README.md#postwebhooksstripetenantidenvironmentid) - Handle Stripe webhook events

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`addonsDeleteAddonsId`](docs/sdks/addons/README.md#deleteaddonsid) - Delete addon
- [`addonsGetAddons`](docs/sdks/addons/README.md#getaddons) - List addons
- [`addonsGetAddonsId`](docs/sdks/addons/README.md#getaddonsid) - Get addon
- [`addonsGetAddonsLookupLookupKey`](docs/sdks/addons/README.md#getaddonslookuplookupkey) - Get addon by lookup key
- [`addonsPostAddons`](docs/sdks/addons/README.md#postaddons) - Create addon
- [`addonsPostAddonsSearch`](docs/sdks/addons/README.md#postaddonssearch) - List addons by filter
- [`addonsPutAddonsId`](docs/sdks/addons/README.md#putaddonsid) - Update addon
- [`alertLogsPostAlertSearch`](docs/sdks/alertlogs/README.md#postalertsearch) - List alert logs by filter
- [`authPostAuthLogin`](docs/sdks/auth/README.md#postauthlogin) - Login
- [`authPostAuthSignup`](docs/sdks/auth/README.md#postauthsignup) - Sign up
- [`connectionsDeleteConnectionsId`](docs/sdks/connections/README.md#deleteconnectionsid) - Delete a connection
- [`connectionsGetConnections`](docs/sdks/connections/README.md#getconnections) - Get connections
- [`connectionsGetConnectionsId`](docs/sdks/connections/README.md#getconnectionsid) - Get a connection
- [`connectionsPostConnectionsSearch`](docs/sdks/connections/README.md#postconnectionssearch) - List connections by filter
- [`connectionsPutConnectionsId`](docs/sdks/connections/README.md#putconnectionsid) - Update a connection
- [`costsDeleteCostsId`](docs/sdks/costs/README.md#deletecostsid) - Delete a costsheet
- [`costsGetCostsActive`](docs/sdks/costs/README.md#getcostsactive) - Get active costsheet for tenant
- [`costsGetCostsId`](docs/sdks/costs/README.md#getcostsid) - Get a costsheet by ID
- [`costsPostCosts`](docs/sdks/costs/README.md#postcosts) - Create a new costsheet
- [`costsPostCostsAnalytics`](docs/sdks/costs/README.md#postcostsanalytics) - Get combined revenue and cost analytics
- [`costsPostCostsAnalyticsV2`](docs/sdks/costs/README.md#postcostsanalyticsv2) - Get combined revenue and cost analytics
- [`costsPostCostsSearch`](docs/sdks/costs/README.md#postcostssearch) - List costsheets by filter
- [`costsPutCostsId`](docs/sdks/costs/README.md#putcostsid) - Update a costsheet
- [`couponsDeleteCouponsId`](docs/sdks/coupons/README.md#deletecouponsid) - Delete a coupon
- [`couponsGetCoupons`](docs/sdks/coupons/README.md#getcoupons) - List coupons with filtering
- [`couponsGetCouponsId`](docs/sdks/coupons/README.md#getcouponsid) - Get a coupon by ID
- [`couponsPostCoupons`](docs/sdks/coupons/README.md#postcoupons) - Create a new coupon
- [`couponsPutCouponsId`](docs/sdks/coupons/README.md#putcouponsid) - Update a coupon
- [`creditGrantsDeleteCreditgrantsId`](docs/sdks/creditgrants/README.md#deletecreditgrantsid) - Delete a credit grant
- [`creditGrantsGetCreditgrants`](docs/sdks/creditgrants/README.md#getcreditgrants) - Get credit grants
- [`creditGrantsGetCreditgrantsId`](docs/sdks/creditgrants/README.md#getcreditgrantsid) - Get a credit grant by ID
- [`creditGrantsGetPlansIdCreditgrants`](docs/sdks/creditgrants/README.md#getplansidcreditgrants) - Get plan credit grants
- [`creditGrantsPostCreditgrants`](docs/sdks/creditgrants/README.md#postcreditgrants) - Create a new credit grant
- [`creditGrantsPutCreditgrantsId`](docs/sdks/creditgrants/README.md#putcreditgrantsid) - Update a credit grant
- [`creditNotesGetCreditnotes`](docs/sdks/creditnotes/README.md#getcreditnotes) - List credit notes with filtering
- [`creditNotesGetCreditnotesId`](docs/sdks/creditnotes/README.md#getcreditnotesid) - Get a credit note by ID
- [`creditNotesPostCreditnotes`](docs/sdks/creditnotes/README.md#postcreditnotes) - Create a new credit note
- [`creditNotesPostCreditnotesIdFinalize`](docs/sdks/creditnotes/README.md#postcreditnotesidfinalize) - Process a draft credit note
- [`creditNotesPostCreditnotesIdVoid`](docs/sdks/creditnotes/README.md#postcreditnotesidvoid) - Void a credit note
- [`customerPortalGetPortalExternalId`](docs/sdks/customerportal/README.md#getportalexternalid) - Create a customer portal session
- [`customersDeleteCustomersId`](docs/sdks/customers/README.md#deletecustomersid) - Delete a customer
- [`customersGetCustomers`](docs/sdks/customers/README.md#getcustomers) - Get customers
- [`customersGetCustomersExternalExternalId`](docs/sdks/customers/README.md#getcustomersexternalexternalid) - Get a customer by external id
- [`customersGetCustomersId`](docs/sdks/customers/README.md#getcustomersid) - Get a customer
- [`customersGetCustomersIdEntitlements`](docs/sdks/customers/README.md#getcustomersidentitlements) - Get customer entitlements
- [`customersGetCustomersIdGrantsUpcoming`](docs/sdks/customers/README.md#getcustomersidgrantsupcoming) - Get upcoming credit grant applications
- [`customersGetCustomersUsage`](docs/sdks/customers/README.md#getcustomersusage) - Get customer usage summary
- [`customersPostCustomers`](docs/sdks/customers/README.md#postcustomers) - Create a customer
- [`customersPostCustomersSearch`](docs/sdks/customers/README.md#postcustomerssearch) - List customers by filter
- [`customersPutCustomers`](docs/sdks/customers/README.md#putcustomers) - Update a customer
- [`entitlementsDeleteEntitlementsId`](docs/sdks/entitlements/README.md#deleteentitlementsid) - Delete an entitlement
- [`entitlementsGetAddonsIdEntitlements`](docs/sdks/entitlements/README.md#getaddonsidentitlements) - Get addon entitlements
- [`entitlementsGetEntitlements`](docs/sdks/entitlements/README.md#getentitlements) - Get entitlements
- [`entitlementsGetEntitlementsId`](docs/sdks/entitlements/README.md#getentitlementsid) - Get an entitlement by ID
- [`entitlementsGetPlansIdEntitlements`](docs/sdks/entitlements/README.md#getplansidentitlements) - Get plan entitlements
- [`entitlementsPostEntitlements`](docs/sdks/entitlements/README.md#postentitlements) - Create a new entitlement
- [`entitlementsPostEntitlementsBulk`](docs/sdks/entitlements/README.md#postentitlementsbulk) - Create multiple entitlements in bulk
- [`entitlementsPostEntitlementsSearch`](docs/sdks/entitlements/README.md#postentitlementssearch) - List entitlements by filter
- [`entitlementsPutEntitlementsId`](docs/sdks/entitlements/README.md#putentitlementsid) - Update an entitlement
- [`entityIntegrationMappingsDeleteEntityIntegrationMappingsId`](docs/sdks/entityintegrationmappings/README.md#deleteentityintegrationmappingsid) - Delete entity integration mapping
- [`entityIntegrationMappingsGetEntityIntegrationMappings`](docs/sdks/entityintegrationmappings/README.md#getentityintegrationmappings) - List entity integration mappings
- [`entityIntegrationMappingsGetEntityIntegrationMappingsId`](docs/sdks/entityintegrationmappings/README.md#getentityintegrationmappingsid) - Get entity integration mapping
- [`entityIntegrationMappingsPostEntityIntegrationMappings`](docs/sdks/entityintegrationmappings/README.md#postentityintegrationmappings) - Create entity integration mapping
- [`environmentsGetEnvironments`](docs/sdks/environments/README.md#getenvironments) - Get environments
- [`environmentsGetEnvironmentsId`](docs/sdks/environments/README.md#getenvironmentsid) - Get an environment
- [`environmentsPostEnvironments`](docs/sdks/environments/README.md#postenvironments) - Create an environment
- [`environmentsPutEnvironmentsId`](docs/sdks/environments/README.md#putenvironmentsid) - Update an environment
- [`eventsGetEventsId`](docs/sdks/events/README.md#geteventsid) - Get event by ID
- [`eventsGetEventsMonitoring`](docs/sdks/events/README.md#geteventsmonitoring) - Get monitoring data
- [`eventsPostEvents`](docs/sdks/events/README.md#postevents) - Ingest event
- [`eventsPostEventsAnalytics`](docs/sdks/events/README.md#posteventsanalytics) - Get usage analytics
- [`eventsPostEventsBulk`](docs/sdks/events/README.md#posteventsbulk) - Bulk Ingest events
- [`eventsPostEventsHuggingfaceInference`](docs/sdks/events/README.md#posteventshuggingfaceinference) - Get hugging face inference data
- [`eventsPostEventsQuery`](docs/sdks/events/README.md#posteventsquery) - List raw events
- [`eventsPostEventsUsage`](docs/sdks/events/README.md#posteventsusage) - Get usage statistics
- [`eventsPostEventsUsageMeter`](docs/sdks/events/README.md#posteventsusagemeter) - Get usage by meter
- [`featuresDeleteFeaturesId`](docs/sdks/features/README.md#deletefeaturesid) - Delete a feature
- [`featuresGetFeatures`](docs/sdks/features/README.md#getfeatures) - List features
- [`featuresGetFeaturesId`](docs/sdks/features/README.md#getfeaturesid) - Get a feature by ID
- [`featuresPostFeatures`](docs/sdks/features/README.md#postfeatures) - Create a new feature
- [`featuresPostFeaturesSearch`](docs/sdks/features/README.md#postfeaturessearch) - List features by filter
- [`featuresPutFeaturesId`](docs/sdks/features/README.md#putfeaturesid) - Update a feature
- [`groupsDeleteGroupsId`](docs/sdks/groups/README.md#deletegroupsid) - Delete a group
- [`groupsGetGroupsId`](docs/sdks/groups/README.md#getgroupsid) - Get a group
- [`groupsPostGroups`](docs/sdks/groups/README.md#postgroups) - Create a group
- [`groupsPostGroupsSearch`](docs/sdks/groups/README.md#postgroupssearch) - Get groups
- [`integrationsDeleteSecretsIntegrationsId`](docs/sdks/integrations/README.md#deletesecretsintegrationsid) - Delete an integration
- [`integrationsGetSecretsIntegrationsByProviderProvider`](docs/sdks/integrations/README.md#getsecretsintegrationsbyproviderprovider) - Get integration details
- [`integrationsGetSecretsIntegrationsLinked`](docs/sdks/integrations/README.md#getsecretsintegrationslinked) - List linked integrations
- [`integrationsPostSecretsIntegrationsCreateProvider`](docs/sdks/integrations/README.md#postsecretsintegrationscreateprovider) - Create or update an integration
- [`invoicesGetCustomersIdInvoicesSummary`](docs/sdks/invoices/README.md#getcustomersidinvoicessummary) - Get a customer invoice summary
- [`invoicesGetInvoices`](docs/sdks/invoices/README.md#getinvoices) - List invoices
- [`invoicesGetInvoicesId`](docs/sdks/invoices/README.md#getinvoicesid) - Get an invoice by ID
- [`invoicesGetInvoicesIdPdf`](docs/sdks/invoices/README.md#getinvoicesidpdf) - Get PDF for an invoice
- [`invoicesPostInvoices`](docs/sdks/invoices/README.md#postinvoices) - Create a new one off invoice
- [`invoicesPostInvoicesIdCommsTrigger`](docs/sdks/invoices/README.md#postinvoicesidcommstrigger) - Trigger communication webhook for an invoice
- [`invoicesPostInvoicesIdFinalize`](docs/sdks/invoices/README.md#postinvoicesidfinalize) - Finalize an invoice
- [`invoicesPostInvoicesIdPaymentAttempt`](docs/sdks/invoices/README.md#postinvoicesidpaymentattempt) - Attempt payment for an invoice
- [`invoicesPostInvoicesIdRecalculate`](docs/sdks/invoices/README.md#postinvoicesidrecalculate) - Recalculate invoice totals and line items
- [`invoicesPostInvoicesIdVoid`](docs/sdks/invoices/README.md#postinvoicesidvoid) - Void an invoice
- [`invoicesPostInvoicesPreview`](docs/sdks/invoices/README.md#postinvoicespreview) - Get a preview invoice
- [`invoicesPostInvoicesSearch`](docs/sdks/invoices/README.md#postinvoicessearch) - List invoices by filter
- [`invoicesPutInvoicesId`](docs/sdks/invoices/README.md#putinvoicesid) - Update an invoice
- [`invoicesPutInvoicesIdPayment`](docs/sdks/invoices/README.md#putinvoicesidpayment) - Update invoice payment status
- [`paymentsDeletePaymentsId`](docs/sdks/payments/README.md#deletepaymentsid) - Delete a payment
- [`paymentsGetPayments`](docs/sdks/payments/README.md#getpayments) - List payments
- [`paymentsGetPaymentsId`](docs/sdks/payments/README.md#getpaymentsid) - Get a payment by ID
- [`paymentsPostPayments`](docs/sdks/payments/README.md#postpayments) - Create a new payment
- [`paymentsPostPaymentsIdProcess`](docs/sdks/payments/README.md#postpaymentsidprocess) - Process a payment
- [`paymentsPutPaymentsId`](docs/sdks/payments/README.md#putpaymentsid) - Update a payment
- [`plansDeletePlansId`](docs/sdks/plans/README.md#deleteplansid) - Delete a plan
- [`plansGetPlans`](docs/sdks/plans/README.md#getplans) - Get plans
- [`plansGetPlansId`](docs/sdks/plans/README.md#getplansid) - Get a plan
- [`plansPostPlans`](docs/sdks/plans/README.md#postplans) - Create a new plan
- [`plansPostPlansIdSyncSubscriptions`](docs/sdks/plans/README.md#postplansidsyncsubscriptions) - Synchronize plan prices
- [`plansPostPlansSearch`](docs/sdks/plans/README.md#postplanssearch) - List plans by filter
- [`plansPutPlansId`](docs/sdks/plans/README.md#putplansid) - Update a plan
- [`pricesDeletePricesId`](docs/sdks/prices/README.md#deletepricesid) - Delete a price
- [`pricesGetPrices`](docs/sdks/prices/README.md#getprices) - Get prices
- [`pricesGetPricesId`](docs/sdks/prices/README.md#getpricesid) - Get a price by ID
- [`pricesGetPricesLookupLookupKey`](docs/sdks/prices/README.md#getpriceslookuplookupkey) - Get price by lookup key
- [`pricesPostPrices`](docs/sdks/prices/README.md#postprices) - Create a new price
- [`pricesPostPricesBulk`](docs/sdks/prices/README.md#postpricesbulk) - Create multiple prices in bulk
- [`pricesPostPricesSearch`](docs/sdks/prices/README.md#postpricessearch) - List prices by filter
- [`pricesPutPricesId`](docs/sdks/prices/README.md#putpricesid) - Update a price
- [`priceUnitsDeletePricesUnitsId`](docs/sdks/priceunits/README.md#deletepricesunitsid) - Delete a price unit
- [`priceUnitsGetPricesUnits`](docs/sdks/priceunits/README.md#getpricesunits) - List price units
- [`priceUnitsGetPricesUnitsCodeCode`](docs/sdks/priceunits/README.md#getpricesunitscodecode) - Get a price unit by code
- [`priceUnitsGetPricesUnitsId`](docs/sdks/priceunits/README.md#getpricesunitsid) - Get a price unit by ID
- [`priceUnitsPostPricesUnits`](docs/sdks/priceunits/README.md#postpricesunits) - Create a new price unit
- [`priceUnitsPostPricesUnitsSearch`](docs/sdks/priceunits/README.md#postpricesunitssearch) - List price units by filter
- [`priceUnitsPutPricesUnitsId`](docs/sdks/priceunits/README.md#putpricesunitsid) - Update a price unit
- [`rbacGetRBACRoles`](docs/sdks/rbac/README.md#getrbacroles) - List all RBAC roles
- [`rbacGetRBACRolesId`](docs/sdks/rbac/README.md#getrbacrolesid) - Get a specific RBAC role
- [`scheduledTasksDeleteTasksScheduledId`](docs/sdks/scheduledtasks/README.md#deletetasksscheduledid) - Delete a scheduled task
- [`scheduledTasksGetTasksScheduled`](docs/sdks/scheduledtasks/README.md#gettasksscheduled) - List scheduled tasks
- [`scheduledTasksGetTasksScheduledId`](docs/sdks/scheduledtasks/README.md#gettasksscheduledid) - Get a scheduled task
- [`scheduledTasksPostTasksScheduled`](docs/sdks/scheduledtasks/README.md#posttasksscheduled) - Create a scheduled task
- [`scheduledTasksPostTasksScheduledIdRun`](docs/sdks/scheduledtasks/README.md#posttasksscheduledidrun) - Trigger force run
- [`scheduledTasksPostTasksScheduledScheduleUpdateBillingPeriod`](docs/sdks/scheduledtasks/README.md#posttasksscheduledscheduleupdatebillingperiod) - Schedule update billing period
- [`scheduledTasksPutTasksScheduledId`](docs/sdks/scheduledtasks/README.md#puttasksscheduledid) - Update a scheduled task
- [`secretsDeleteSecretsApiKeysId`](docs/sdks/secrets/README.md#deletesecretsapikeysid) - Delete an API key
- [`secretsGetSecretsApiKeys`](docs/sdks/secrets/README.md#getsecretsapikeys) - List API keys
- [`secretsPostSecretsApiKeys`](docs/sdks/secrets/README.md#postsecretsapikeys) - Create a new API key
- [`subscriptionsDeleteSubscriptionsAddon`](docs/sdks/subscriptions/README.md#deletesubscriptionsaddon) - Remove addon from subscription
- [`subscriptionsDeleteSubscriptionsLineitemsId`](docs/sdks/subscriptions/README.md#deletesubscriptionslineitemsid) - Delete subscription line item
- [`subscriptionsGetSubscriptions`](docs/sdks/subscriptions/README.md#getsubscriptions) - List subscriptions
- [`subscriptionsGetSubscriptionsId`](docs/sdks/subscriptions/README.md#getsubscriptionsid) - Get subscription
- [`subscriptionsGetSubscriptionsIdAddonsAssociations`](docs/sdks/subscriptions/README.md#getsubscriptionsidaddonsassociations) - Get active addon associations
- [`subscriptionsGetSubscriptionsIdEntitlements`](docs/sdks/subscriptions/README.md#getsubscriptionsidentitlements) - Get subscription entitlements
- [`subscriptionsGetSubscriptionsIdGrantsUpcoming`](docs/sdks/subscriptions/README.md#getsubscriptionsidgrantsupcoming) - Get upcoming credit grant applications
- [`subscriptionsGetSubscriptionsIdPauses`](docs/sdks/subscriptions/README.md#getsubscriptionsidpauses) - List all pauses for a subscription
- [`subscriptionsGetSubscriptionsIdV2`](docs/sdks/subscriptions/README.md#getsubscriptionsidv2) - Get subscription V2
- [`subscriptionsGetV1SubscriptionSchedules`](docs/sdks/subscriptions/README.md#getv1subscriptionschedules) - List all subscription schedules
- [`subscriptionsGetV1SubscriptionSchedulesId`](docs/sdks/subscriptions/README.md#getv1subscriptionschedulesid) - Get subscription schedule
- [`subscriptionsGetV1SubscriptionsSubscriptionIdSchedules`](docs/sdks/subscriptions/README.md#getv1subscriptionssubscriptionidschedules) - List subscription schedules
- [`subscriptionsPostSubscriptions`](docs/sdks/subscriptions/README.md#postsubscriptions) - Create subscription
- [`subscriptionsPostSubscriptionsAddon`](docs/sdks/subscriptions/README.md#postsubscriptionsaddon) - Add addon to subscription
- [`subscriptionsPostSubscriptionsIdActivate`](docs/sdks/subscriptions/README.md#postsubscriptionsidactivate) - Activate draft subscription
- [`subscriptionsPostSubscriptionsIdCancel`](docs/sdks/subscriptions/README.md#postsubscriptionsidcancel) - Cancel subscription
- [`subscriptionsPostSubscriptionsIdChangeExecute`](docs/sdks/subscriptions/README.md#postsubscriptionsidchangeexecute) - Execute subscription plan change
- [`subscriptionsPostSubscriptionsIdChangePreview`](docs/sdks/subscriptions/README.md#postsubscriptionsidchangepreview) - Preview subscription plan change
- [`subscriptionsPostSubscriptionsIdPause`](docs/sdks/subscriptions/README.md#postsubscriptionsidpause) - Pause a subscription
- [`subscriptionsPostSubscriptionsIdResume`](docs/sdks/subscriptions/README.md#postsubscriptionsidresume) - Resume a paused subscription
- [`subscriptionsPostSubscriptionsSearch`](docs/sdks/subscriptions/README.md#postsubscriptionssearch) - List subscriptions by filter
- [`subscriptionsPostSubscriptionsUsage`](docs/sdks/subscriptions/README.md#postsubscriptionsusage) - Get usage by subscription
- [`subscriptionsPostV1SubscriptionsSchedulesScheduleIdCancel`](docs/sdks/subscriptions/README.md#postv1subscriptionsschedulesscheduleidcancel) - Cancel subscription schedule
- [`subscriptionsPutSubscriptionsLineitemsId`](docs/sdks/subscriptions/README.md#putsubscriptionslineitemsid) - Update subscription line item
- [`tasksGetTasks`](docs/sdks/tasks/README.md#gettasks) - List tasks
- [`tasksGetTasksId`](docs/sdks/tasks/README.md#gettasksid) - Get a task
- [`tasksGetTasksIdDownload`](docs/sdks/tasks/README.md#gettasksiddownload) - Download task export file
- [`tasksGetTasksResult`](docs/sdks/tasks/README.md#gettasksresult) - Get task processing result
- [`tasksPostTasks`](docs/sdks/tasks/README.md#posttasks) - Create a new task
- [`tasksPutTasksIdStatus`](docs/sdks/tasks/README.md#puttasksidstatus) - Update task status
- [`taxAssociationsDeleteTaxesAssociationsId`](docs/sdks/taxassociations/README.md#deletetaxesassociationsid) - Delete tax association
- [`taxAssociationsGetTaxesAssociations`](docs/sdks/taxassociations/README.md#gettaxesassociations) - List tax associations
- [`taxAssociationsGetTaxesAssociationsId`](docs/sdks/taxassociations/README.md#gettaxesassociationsid) - Get Tax Association
- [`taxAssociationsPostTaxesAssociations`](docs/sdks/taxassociations/README.md#posttaxesassociations) - Create Tax Association
- [`taxAssociationsPutTaxesAssociationsId`](docs/sdks/taxassociations/README.md#puttaxesassociationsid) - Update tax association
- [`taxRatesDeleteTaxesRatesId`](docs/sdks/taxrates/README.md#deletetaxesratesid) - Delete a tax rate
- [`taxRatesGetTaxesRates`](docs/sdks/taxrates/README.md#gettaxesrates) - Get tax rates
- [`taxRatesGetTaxesRatesId`](docs/sdks/taxrates/README.md#gettaxesratesid) - Get a tax rate
- [`taxRatesPostTaxesRates`](docs/sdks/taxrates/README.md#posttaxesrates) - Create a tax rate
- [`taxRatesPutTaxesRatesId`](docs/sdks/taxrates/README.md#puttaxesratesid) - Update a tax rate
- [`tenantsGetTenantBilling`](docs/sdks/tenants/README.md#gettenantbilling) - Get billing usage for the current tenant
- [`tenantsGetTenantsId`](docs/sdks/tenants/README.md#gettenantsid) - Get tenant by ID
- [`tenantsPostTenants`](docs/sdks/tenants/README.md#posttenants) - Create a new tenant
- [`tenantsPutTenantsUpdate`](docs/sdks/tenants/README.md#puttenantsupdate) - Update a tenant
- [`usersGetUsersMe`](docs/sdks/users/README.md#getusersme) - Get user info
- [`usersPostUsers`](docs/sdks/users/README.md#postusers) - Create service account
- [`usersPostUsersSearch`](docs/sdks/users/README.md#postuserssearch) - List users with filters
- [`walletsGetCustomersIdWallets`](docs/sdks/wallets/README.md#getcustomersidwallets) - Get wallets by customer ID
- [`walletsGetCustomersWallets`](docs/sdks/wallets/README.md#getcustomerswallets) - Get Customer Wallets
- [`walletsGetWallets`](docs/sdks/wallets/README.md#getwallets) - List wallets
- [`walletsGetWalletsId`](docs/sdks/wallets/README.md#getwalletsid) - Get wallet by ID
- [`walletsGetWalletsIdBalanceRealTime`](docs/sdks/wallets/README.md#getwalletsidbalancerealtime) - Get wallet balance
- [`walletsGetWalletsIdTransactions`](docs/sdks/wallets/README.md#getwalletsidtransactions) - Get wallet transactions
- [`walletsPostWallets`](docs/sdks/wallets/README.md#postwallets) - Create a new wallet
- [`walletsPostWalletsIdTerminate`](docs/sdks/wallets/README.md#postwalletsidterminate) - Terminate a wallet
- [`walletsPostWalletsIdTopUp`](docs/sdks/wallets/README.md#postwalletsidtopup) - Top up wallet
- [`walletsPostWalletsSearch`](docs/sdks/wallets/README.md#postwalletssearch) - List wallets by filter
- [`walletsPostWalletsTransactionsSearch`](docs/sdks/wallets/README.md#postwalletstransactionssearch) - List wallet transactions by filter
- [`walletsPutWalletsId`](docs/sdks/wallets/README.md#putwalletsid) - Update a wallet
- [`webhooksPostWebhooksChargebeeTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhookschargebeetenantidenvironmentid) - Handle Chargebee webhook events
- [`webhooksPostWebhooksHubspotTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhookshubspottenantidenvironmentid) - Handle HubSpot webhook events
- [`webhooksPostWebhooksMoyasarTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhooksmoyasartenantidenvironmentid) - Handle Moyasar webhook events
- [`webhooksPostWebhooksNomodTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhooksnomodtenantidenvironmentid) - Handle Nomod webhook events
- [`webhooksPostWebhooksQuickbooksTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhooksquickbookstenantidenvironmentid) - Handle QuickBooks webhook events
- [`webhooksPostWebhooksRazorpayTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhooksrazorpaytenantidenvironmentid) - Handle Razorpay webhook events
- [`webhooksPostWebhooksStripeTenantIdEnvironmentId`](docs/sdks/webhooks/README.md#postwebhooksstripetenantidenvironmentid) - Handle Stripe webhook events

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { FlexPrice } from "flexprice-sdk-test";
import { openAsBlob } from "node:fs";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.events.postEventsAnalytics(
    await openAsBlob("example.file"),
  );

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.addons.getAddons({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { FlexPrice } from "flexprice-sdk-test";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await flexPrice.addons.getAddons({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`FlexPriceError`](./src/models/errors/flex-price-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { FlexPrice } from "flexprice-sdk-test";
import * as errors from "flexprice-sdk-test/models/errors";

const flexPrice = new FlexPrice({
  serverURL: "https://api.example.com",
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  try {
    const result = await flexPrice.addons.getAddons({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.FlexPriceError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorsErrorResponse) {
        console.log(error.data$.error); // components.ErrorsErrorDetail
        console.log(error.data$.success); // boolean
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`FlexPriceError`](./src/models/errors/flex-price-error.ts): The base class for HTTP error responses.
  * [`ErrorsErrorResponse`](./src/models/errors/errors-error-response.ts): *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`FlexPriceError`](./src/models/errors/flex-price-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { FlexPrice } from "flexprice-sdk-test";
import { ProxyAgent } from "undici";
import { HTTPClient } from "flexprice-sdk-test/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new FlexPrice({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { FlexPrice } from "flexprice-sdk-test";

const sdk = new FlexPrice({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=flexprice-sdk-test&utm_campaign=typescript)
