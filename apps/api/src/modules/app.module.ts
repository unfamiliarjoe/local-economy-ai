import { Module } from "@nestjs/common";
import { HealthController } from "./health/health.controller";
import { AuthController } from "./auth/auth.controller";
import { TenancyController } from "./tenancy/tenancy.controller";
import { AiController } from "./ai/ai.controller";
import { DashboardController } from "./dashboard/dashboard.controller";
import { NotificationsController } from "./notifications/notifications.controller";
import { TasksController } from "./tasks/tasks.controller";
import { DocumentsController } from "./documents/documents.controller";
import { SearchController } from "./search/search.controller";
import { MeController } from "./me/me.controller";
import { ContactController } from "./contact/contact.controller";
import { SettingsController } from "./settings/settings.controller";
import { APP_GUARD } from "@nestjs/core";
import { RbacGuard } from "./rbac/rbac.guard";
import { PermitsController } from "./permits/permits.controller";
import { ZoningController } from "./zoning/zoning.controller";
import { InfrastructureController } from "./infrastructure/infrastructure.controller";
import { ServiceRequestsController } from "./service-requests/service-requests.controller";
import { BenefitsController } from "./benefits/benefits.controller";
import { ProcurementController } from "./procurement/procurement.controller";
import { GrantsController } from "./grants/grants.controller";
import { BusinessLicensingController } from "./business-licensing/business-licensing.controller";
import { EconomicDevelopmentController } from "./economic-development/economic-development.controller";
import { RecordsRequestsController } from "./records-requests/records-requests.controller";
import { LegislativeController } from "./legislative/legislative.controller";
import { CourtsController } from "./courts/courts.controller";
import { PublicSafetyController } from "./public-safety/public-safety.controller";
import { ExecutiveController } from "./executive/executive.controller";
import { WorkflowsController } from "./workflows/workflows.controller";
import { CodeEnforcementController } from "./code-enforcement/code-enforcement.controller";
import { InspectionsController } from "./inspections/inspections.controller";
import { UtilitiesController } from "./utilities/utilities.controller";
import { AssetsController } from "./assets/assets.controller";
import { CommunicationsController } from "./communications/communications.controller";
import { EmergencyManagementController } from "./emergency-management/emergency-management.controller";
import { CapitalPlanningController } from "./capital-planning/capital-planning.controller";
import { FinanceController } from "./finance/finance.controller";
import { ClerkController } from "./clerk/clerk.controller";
import { BoardsController } from "./boards/boards.controller";
import { IntegrationsController } from "./integrations/integrations.controller";
import { ComplianceController } from "./compliance/compliance.controller";
import { MapController } from "./map/map.controller";
import { ContractsController } from "./contracts/contracts.controller";
import { VendorPerformanceController } from "./vendor-performance/vendor-performance.controller";
import { FundingController } from "./funding/funding.controller";
import { ConstituentsController } from "./constituents/constituents.controller";
import { WorkforceController } from "./workforce/workforce.controller";
import { StrategyController } from "./strategy/strategy.controller";
import { OnboardingController } from "./onboarding/onboarding.controller";
import { ReportsController } from "./reports/reports.controller";
import { PaymentsController } from "./payments/payments.controller";
import { RegionalController } from "./regional/regional.controller";
import { MarketplaceController } from "./marketplace/marketplace.controller";

@Module({
  controllers: [
    HealthController,
    AuthController,
    TenancyController,
    AiController,
    DashboardController,
    NotificationsController,
    TasksController,
    DocumentsController,
    SearchController,
    MeController,
    ContactController,
    SettingsController,
    PermitsController,
    ZoningController,
    InfrastructureController,
    ServiceRequestsController,
    BenefitsController,
    ProcurementController,
    GrantsController,
    BusinessLicensingController,
    EconomicDevelopmentController,
    RecordsRequestsController,
    LegislativeController,
    CourtsController,
    PublicSafetyController,
    ExecutiveController,
    WorkflowsController,
    CodeEnforcementController,
    InspectionsController,
    UtilitiesController,
    AssetsController,
    CommunicationsController,
    EmergencyManagementController,
    CapitalPlanningController,
    FinanceController,
    ClerkController,
    BoardsController,
    IntegrationsController,
    ComplianceController,
    MapController,
    ContractsController,
    VendorPerformanceController,
    FundingController,
    ConstituentsController,
    WorkforceController,
    StrategyController,
    OnboardingController,
    ReportsController,
    PaymentsController,
    RegionalController,
    MarketplaceController
  ],
  providers: [{ provide: APP_GUARD, useClass: RbacGuard }]
})
export class AppModule {}
