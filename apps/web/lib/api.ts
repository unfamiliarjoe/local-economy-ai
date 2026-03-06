const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

type Query = Record<string, string | number | undefined>;

function buildQuery(params: Query) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === "") return;
    qs.set(key, String(value));
  });
  const out = qs.toString();
  return out ? `?${out}` : "";
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = { "x-correlation-id": crypto.randomUUID(), ...(init?.headers || {}) } as HeadersInit;
  const res = await fetch(`${API}${path}`, { ...init, headers, cache: "no-store" }).catch(() => null);
  if (!res || !res.ok) return {} as T;
  return (await res.json()) as T;
}

export const api = {
  staffSummary: () => request<any>("/dashboard/staff-summary", { headers: { "x-demo-role": "staff" } }),
  residentSummary: () => request<any>("/dashboard/resident-summary", { headers: { "x-demo-role": "resident" } }),
  businessSummary: () => request<any>("/dashboard/business-summary", { headers: { "x-demo-role": "vendor" } }),
  executiveSummary: () => request<any>("/executive/summary", { headers: { "x-demo-role": "staff" } }),

  notifications: (role = "staff") => request<any[]>("/notifications", { headers: { "x-demo-role": role } }),
  tasks: () => request<any[]>("/tasks", { headers: { "x-demo-role": "staff" } }),

  documents: (role = "staff") => request<any[]>("/documents", { headers: { "x-demo-role": role } }),
  documentDetail: (id: string, role = "staff") => request<any>(`/documents/${id}`, { headers: { "x-demo-role": role } }),

  permits: () => request<any[]>("/permits", { headers: { "x-demo-role": "staff" } }),
  permitDetail: (id: string, role = "staff") => request<any>(`/permits/${id}`, { headers: { "x-demo-role": role } }),
  zoningCases: () => request<any[]>("/zoning-cases", { headers: { "x-demo-role": "staff" } }),
  zoningDetail: (id: string) => request<any>(`/zoning-cases/${id}`, { headers: { "x-demo-role": "staff" } }),
  projects: () => request<any[]>("/infrastructure/projects", { headers: { "x-demo-role": "staff" } }),
  projectDetail: (id: string) => request<any>(`/infrastructure/projects/${id}`, { headers: { "x-demo-role": "staff" } }),
  workOrders: () => request<any[]>("/infrastructure/work-orders", { headers: { "x-demo-role": "staff" } }),
  workOrderDetail: (id: string) => request<any>(`/infrastructure/work-orders/${id}`, { headers: { "x-demo-role": "staff" } }),
  maintenanceRequests: () => request<any[]>("/infrastructure/maintenance-requests", { headers: { "x-demo-role": "staff" } }),

  serviceRequests: (role = "staff") => request<any[]>("/service-requests", { headers: { "x-demo-role": role } }),
  serviceRequestDetail: (id: string, role = "staff") => request<any>(`/service-requests/${id}`, { headers: { "x-demo-role": role } }),
  createServiceRequest: (payload: any) => request<any>("/service-requests", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": "resident" }, body: JSON.stringify(payload) }),

  benefitsPrograms: () => request<any[]>("/benefits/programs", { headers: { "x-demo-role": "staff" } }),
  benefitsApps: (role = "staff") => request<any[]>("/benefits/applications", { headers: { "x-demo-role": role } }),
  benefitsAppDetail: (id: string, role = "staff") => request<any>(`/benefits/applications/${id}`, { headers: { "x-demo-role": role } }),
  createBenefitsApp: (payload: any) => request<any>("/benefits/applications", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": "resident" }, body: JSON.stringify(payload) }),

  solicitations: (role = "staff") => request<any[]>("/procurement/solicitations", { headers: { "x-demo-role": role } }),
  solicitationDetail: (id: string, role = "staff") => request<any>(`/procurement/solicitations/${id}`, { headers: { "x-demo-role": role } }),
  bids: (role = "staff") => request<any[]>("/procurement/bids", { headers: { "x-demo-role": role } }),
  submitBid: (payload: any) => request<any>("/procurement/bids", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": "vendor" }, body: JSON.stringify(payload) }),

  grantPrograms: (role = "staff") => request<any[]>("/grants/programs", { headers: { "x-demo-role": role } }),
  grantApps: (role = "staff") => request<any[]>("/grants/applications", { headers: { "x-demo-role": role } }),
  grantAppDetail: (id: string, role = "staff") => request<any>(`/grants/applications/${id}`, { headers: { "x-demo-role": role } }),
  createGrantApp: (payload: any, role = "resident") => request<any>("/grants/applications", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": role }, body: JSON.stringify(payload) }),

  licenseTypes: (role = "staff") => request<any[]>("/business-licensing/license-types", { headers: { "x-demo-role": role } }),
  licenseApps: (role = "staff") => request<any[]>("/business-licensing/applications", { headers: { "x-demo-role": role } }),
  licenseAppDetail: (id: string, role = "staff") => request<any>(`/business-licensing/applications/${id}`, { headers: { "x-demo-role": role } }),
  createLicenseApp: (payload: any) => request<any>("/business-licensing/applications", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": "vendor" }, body: JSON.stringify(payload) }),

  econProjects: () => request<any[]>("/economic-development/projects", { headers: { "x-demo-role": "staff" } }),
  econProjectDetail: (id: string) => request<any>(`/economic-development/projects/${id}`, { headers: { "x-demo-role": "staff" } }),
  econCases: () => request<any[]>("/economic-development/cases", { headers: { "x-demo-role": "staff" } }),
  econPrograms: (role = "staff") => request<any[]>("/economic-development/programs", { headers: { "x-demo-role": role } }),

  recordsRequests: (role = "staff") => request<any[]>("/records-requests", { headers: { "x-demo-role": role } }),
  recordsRequestDetail: (id: string, role = "staff") => request<any>(`/records-requests/${id}`, { headers: { "x-demo-role": role } }),
  createRecordsRequest: (payload: any) => request<any>("/records-requests", { method: "POST", headers: { "Content-Type": "application/json", "x-demo-role": "resident" }, body: JSON.stringify(payload) }),

  meetings: () => request<any[]>("/legislative/meetings", { headers: { "x-demo-role": "staff" } }),
  meetingDetail: (id: string) => request<any>(`/legislative/meetings/${id}`, { headers: { "x-demo-role": "staff" } }),
  courtSchedules: () => request<any[]>("/courts/schedules", { headers: { "x-demo-role": "staff" } }),
  courtScheduleDetail: (id: string) => request<any>(`/courts/schedules/${id}`, { headers: { "x-demo-role": "staff" } }),
  incidents: () => request<any[]>("/public-safety/incidents", { headers: { "x-demo-role": "staff" } }),
  incidentDetail: (id: string) => request<any>(`/public-safety/incidents/${id}`, { headers: { "x-demo-role": "staff" } }),

  workflows: () => request<any[]>("/workflows", { headers: { "x-demo-role": "staff" } }),
  workflowDetail: (id: string) => request<any>(`/workflows/${id}`, { headers: { "x-demo-role": "staff" } }),

  codeEnforcement: () => request<any[]>("/code-enforcement", { headers: { "x-demo-role": "staff" } }),
  codeEnforcementDetail: (id: string) => request<any>(`/code-enforcement/${id}`, { headers: { "x-demo-role": "staff" } }),
  inspections: () => request<any[]>("/inspections", { headers: { "x-demo-role": "staff" } }),
  inspectionDetail: (id: string) => request<any>(`/inspections/${id}`, { headers: { "x-demo-role": "staff" } }),
  utilityCases: () => request<any[]>("/utilities/cases", { headers: { "x-demo-role": "staff" } }),
  utilityCaseDetail: (id: string) => request<any>(`/utilities/cases/${id}`, { headers: { "x-demo-role": "staff" } }),
  assets: () => request<any[]>("/assets", { headers: { "x-demo-role": "staff" } }),
  fleet: () => request<any[]>("/fleet", { headers: { "x-demo-role": "staff" } }),
  facilities: () => request<any[]>("/facilities", { headers: { "x-demo-role": "staff" } }),
  parksPrograms: () => request<any[]>("/parks-programs", { headers: { "x-demo-role": "staff" } }),
  communications: () => request<any[]>("/communications", { headers: { "x-demo-role": "staff" } }),
  communicationDetail: (id: string) => request<any>(`/communications/${id}`, { headers: { "x-demo-role": "staff" } }),
  emergencyEvents: () => request<any[]>("/emergency-management", { headers: { "x-demo-role": "staff" } }),
  emergencyDetail: (id: string) => request<any>(`/emergency-management/${id}`, { headers: { "x-demo-role": "staff" } }),
  capitalProjects: () => request<any[]>("/capital-planning", { headers: { "x-demo-role": "staff" } }),
  capitalProjectDetail: (id: string) => request<any>(`/capital-planning/${id}`, { headers: { "x-demo-role": "staff" } }),
  financeSummary: () => request<any>("/finance", { headers: { "x-demo-role": "staff" } }),
  financeApprovals: () => request<any[]>("/finance/approvals", { headers: { "x-demo-role": "staff" } }),
  financePurchasing: () => request<any[]>("/finance/purchasing", { headers: { "x-demo-role": "staff" } }),
  clerkSummary: () => request<any>("/clerk", { headers: { "x-demo-role": "staff" } }),
  clerkRegister: () => request<any[]>("/clerk/register", { headers: { "x-demo-role": "staff" } }),
  boards: () => request<any[]>("/boards", { headers: { "x-demo-role": "staff" } }),
  integrations: () => request<any[]>("/integrations", { headers: { "x-demo-role": "staff" } }),
  imports: () => request<any[]>("/imports", { headers: { "x-demo-role": "staff" } }),
  exports: () => request<any[]>("/exports", { headers: { "x-demo-role": "staff" } }),

  complianceSummary: () => request<any>("/compliance", { headers: { "x-demo-role": "staff" } }),
  complianceLogs: (risk?: string, q?: string) => request<any[]>(`/compliance/audit-logs${buildQuery({ risk, q })}`, { headers: { "x-demo-role": "staff" } }),
  complianceExports: () => request<any[]>("/compliance/exports", { headers: { "x-demo-role": "staff" } }),

  settingsSecurity: () => request<any>("/settings/security", { headers: { "x-demo-role": "staff" } }),
  settingsAccess: () => request<any>("/settings/access", { headers: { "x-demo-role": "staff" } }),
  settingsIntegrations: () => request<any>("/settings/integrations", { headers: { "x-demo-role": "staff" } }),
  settingsGeneral: () => request<any>("/settings/general", { headers: { "x-demo-role": "staff" } }),
  settingsDepartments: () => request<any[]>("/settings/departments", { headers: { "x-demo-role": "staff" } }),
  settingsRoles: () => request<any[]>("/settings/roles", { headers: { "x-demo-role": "staff" } }),
  settingsTemplates: () => request<any[]>("/settings/templates", { headers: { "x-demo-role": "staff" } }),
  settingsBranding: () => request<any>("/settings/branding", { headers: { "x-demo-role": "staff" } }),

  mapRecords: (module?: string, district?: string) => request<any[]>(`/map${buildQuery({ module, district })}`, { headers: { "x-demo-role": "staff" } }),
  mapSummary: () => request<any>("/map/summary", { headers: { "x-demo-role": "staff" } }),
  contracts: () => request<any[]>("/contracts", { headers: { "x-demo-role": "staff" } }),
  contractDetail: (id: string) => request<any>(`/contracts/${id}`, { headers: { "x-demo-role": "staff" } }),
  vendorPerformance: (role = "staff") => request<any[]>("/vendor-performance", { headers: { "x-demo-role": role } }),
  vendorPerformanceDetail: (id: string, role = "staff") => request<any>(`/vendor-performance/${id}`, { headers: { "x-demo-role": role } }),
  fundingSummary: () => request<any>("/funding", { headers: { "x-demo-role": "staff" } }),
  fundingOpportunities: () => request<any[]>("/funding/opportunities", { headers: { "x-demo-role": "staff" } }),
  fundingCalendar: () => request<any[]>("/funding/calendar", { headers: { "x-demo-role": "staff" } }),
  fundingGaps: () => request<any[]>("/funding/gaps", { headers: { "x-demo-role": "staff" } }),
  constituents: () => request<any[]>("/constituents", { headers: { "x-demo-role": "staff" } }),
  constituentDetail: (id: string) => request<any>(`/constituents/${id}`, { headers: { "x-demo-role": "staff" } }),
  workforce: () => request<any[]>("/workforce", { headers: { "x-demo-role": "staff" } }),
  workforceAssignments: () => request<any[]>("/workforce/assignments", { headers: { "x-demo-role": "staff" } }),
  workforceCapacity: () => request<any>("/workforce/capacity", { headers: { "x-demo-role": "staff" } }),
  strategy: () => request<any[]>("/strategy", { headers: { "x-demo-role": "staff" } }),
  strategyDetail: (id: string) => request<any>(`/strategy/${id}`, { headers: { "x-demo-role": "staff" } }),
  onboardingSummary: () => request<any>("/onboarding", { headers: { "x-demo-role": "staff" } }),
  onboardingChecklist: () => request<any[]>("/onboarding/checklist", { headers: { "x-demo-role": "staff" } }),
  onboardingImports: () => request<any[]>("/onboarding/imports", { headers: { "x-demo-role": "staff" } }),
  onboardingReadiness: () => request<any>("/onboarding/readiness", { headers: { "x-demo-role": "staff" } }),
  reports: () => request<any[]>("/reports", { headers: { "x-demo-role": "staff" } }),
  reportDetail: (id: string) => request<any>(`/reports/${id}`, { headers: { "x-demo-role": "staff" } }),
  payments: (role = "staff") => request<any[]>("/payments", { headers: { "x-demo-role": role } }),
  disbursements: () => request<any[]>("/disbursements", { headers: { "x-demo-role": "staff" } }),
  regional: () => request<any[]>("/regional", { headers: { "x-demo-role": "staff" } }),
  regionalDetail: (id: string) => request<any>(`/regional/${id}`, { headers: { "x-demo-role": "staff" } }),
  marketplace: (role = "staff") => request<any[]>("/marketplace", { headers: { "x-demo-role": role } }),
  aiUsageSummary: () => request<any>("/ai/usage-summary", { headers: { "x-demo-role": "staff" } })
};
