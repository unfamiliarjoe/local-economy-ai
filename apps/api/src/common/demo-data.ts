export type DemoRole = "municipality_admin" | "staff" | "resident" | "vendor" | "platform_admin";

export const demoUsers = {
  municipality_admin: { id: "u-staff-admin", name: "Ava Martinez", email: "ava@brookhaven.gov", tenant: "city-of-brookhaven", department: "City Manager", role: "municipality_admin" as DemoRole },
  staff: { id: "u-staff-permit", name: "Jordan Lee", email: "jordan@brookhaven.gov", tenant: "city-of-brookhaven", department: "Permitting", role: "staff" as DemoRole },
  resident: { id: "u-resident", name: "Nina Patel", email: "nina.patel@example.com", tenant: "city-of-brookhaven", department: "Resident", role: "resident" as DemoRole },
  vendor: { id: "u-vendor", name: "Brookhaven Civil Works LLC", email: "ops@brookhavencivil.com", tenant: "city-of-brookhaven", department: "Vendor", role: "vendor" as DemoRole },
  platform_admin: { id: "u-platform", name: "S. Chen", email: "support@leai.io", tenant: "platform", department: "Platform", role: "platform_admin" as DemoRole }
};

export const permitTypes = [
  "Building", "Electrical", "Plumbing", "Renovation", "Signage", "Occupancy", "Event", "Right-of-Way", "Demolition", "Temporary Use"
].map((name, i) => ({ id: `pt-${i + 1}`, name }));

export const permits = [
  {
    id: "PRM-2026-041",
    type: "Renovation",
    stage: "under_review",
    applicantName: "Nina Patel",
    parcel: "118-22-004",
    address: "142 Oak Street",
    submittedAt: "2026-03-01",
    reviewer: "Jordan Lee",
    requiredDocs: 6,
    receivedDocs: 5,
    priority: "high"
  },
  {
    id: "PRM-2026-049",
    type: "Electrical",
    stage: "inspection_scheduled",
    applicantName: "Brookhaven Civil Works LLC",
    parcel: "118-19-011",
    address: "77 River Ave",
    submittedAt: "2026-02-26",
    reviewer: "Maya Clark",
    requiredDocs: 4,
    receivedDocs: 4,
    priority: "medium"
  },
  {
    id: "PRM-2026-052",
    type: "Event",
    stage: "needs_info",
    applicantName: "Brookhaven Arts Alliance",
    parcel: "119-10-101",
    address: "Town Square",
    submittedAt: "2026-03-04",
    reviewer: "Jordan Lee",
    requiredDocs: 3,
    receivedDocs: 2,
    priority: "medium"
  }
];

export const permitInspections = [
  { id: "INSP-2201", permitId: "PRM-2026-049", type: "Electrical Final", scheduledFor: "2026-03-10T10:30:00Z", inspector: "A. Foster", status: "scheduled" }
];

export const zoningCases = [
  {
    id: "ZNG-2026-014",
    status: "hearing_scheduled",
    applicant: "Oak Street Development Group",
    requestType: "Variance",
    parcel: "118-22-004",
    planner: "Rina Gomez",
    hearingDate: "2026-03-18",
    summary: "Request for reduced setback to enable mixed-use façade activation."
  },
  {
    id: "ZNG-2026-017",
    status: "under_review",
    applicant: "Beacon Logistics",
    requestType: "Special Use Permit",
    parcel: "121-02-008",
    planner: "Rina Gomez",
    hearingDate: null,
    summary: "Conditional use request for expanded loading hours."
  }
];

export const infrastructureProjects = [
  { id: "INF-118", name: "Downtown Stormwater Retrofit", status: "in_progress", priority: "high", manager: "Public Works PMO", progress: 58 },
  { id: "INF-121", name: "3rd Ave Paving Package", status: "approved", priority: "medium", manager: "Street Operations", progress: 12 }
];

export const maintenanceRequests = [
  { id: "MR-992", title: "Flooding at Maple & 7th", status: "triaged", priority: "high", location: "Maple Ave & 7th" },
  { id: "MR-997", title: "Damaged guardrail", status: "reported", priority: "medium", location: "E Riverside Dr" }
];

export const workOrders = [
  { id: "WO-411", projectId: "INF-118", title: "Install catch basin liners", status: "assigned", assignee: "Crew Bravo", dueDate: "2026-03-12", priority: "high" },
  { id: "WO-417", projectId: "INF-121", title: "Milling segment B", status: "new", assignee: "Unassigned", dueDate: "2026-03-14", priority: "medium" }
];

export const serviceRequests = [
  { id: "311-88412", category: "Street Light Outage", status: "assigned", priority: "medium", location: "District 3 / Pine & 4th", residentName: "Nina Patel", summary: "Two poles dark for 3 nights", assignee: "Public Works Dispatch" },
  { id: "311-88431", category: "Pothole", status: "triaged", priority: "high", location: "Cedar Blvd", residentName: "Marcus Hill", summary: "Large pothole near bus stop", assignee: "Road Crew" },
  { id: "311-88454", category: "Graffiti", status: "submitted", priority: "low", location: "Underpass wall", residentName: "Nina Patel", summary: "Tagging appeared overnight", assignee: "Unassigned" }
];

export const notifications = [
  { id: "n1", title: "SLA risk: permit PRM-2026-041", body: "Review due in 6 hours.", unread: true, severity: "warning", createdAt: "2026-03-06T08:10:00Z" },
  { id: "n2", title: "New 311 cluster detected", body: "5 streetlight outages in District 3.", unread: true, severity: "info", createdAt: "2026-03-06T07:40:00Z" },
  { id: "n3", title: "Document approved", body: "Insurance certificate accepted for vendor profile.", unread: false, severity: "success", createdAt: "2026-03-05T18:40:00Z" }
];

export const tasks = [
  { id: "t1", title: "Review permit PRM-2026-041", module: "Permitting", priority: "high", dueDate: "2026-03-06", assignee: "Jordan Lee", status: "in_progress" },
  { id: "t2", title: "Draft zoning recommendation ZNG-2026-014", module: "Zoning", priority: "medium", dueDate: "2026-03-08", assignee: "Rina Gomez", status: "todo" },
  { id: "t3", title: "Triage 311-88454", module: "311", priority: "medium", dueDate: "2026-03-07", assignee: "311 Coordinator", status: "todo" }
];

export const documents = [
  { id: "d1", name: "Site Plan - Oak St Redevelopment.pdf", type: "permit-plan", status: "under_review", tags: ["permit", "planning"], updatedAt: "2026-03-06T09:02:00Z" },
  { id: "d2", name: "Variance Narrative - ZNG-2026-014.pdf", type: "zoning-memo", status: "submitted", tags: ["zoning"], updatedAt: "2026-03-05T16:20:00Z" },
  { id: "d3", name: "Streetlight Cluster Map.png", type: "311-attachment", status: "new", tags: ["311"], updatedAt: "2026-03-04T12:45:00Z" }
];

export const searchIndex = [
  { id: "PRM-2026-041", type: "permit", title: "PRM-2026-041", subtitle: "Renovation · under review" },
  { id: "ZNG-2026-014", type: "zoning", title: "ZNG-2026-014", subtitle: "Variance · hearing scheduled" },
  { id: "WO-411", type: "work_order", title: "WO-411", subtitle: "Catch basin liners · assigned" },
  { id: "311-88412", type: "service_request", title: "311-88412", subtitle: "Street Light Outage · assigned" }
];

export const staffSummary = {
  kpis: [
    { label: "Permits awaiting review", value: "14", trend: "+3" },
    { label: "Benefits cases pending", value: "9", trend: "+2" },
    { label: "Bid reviews pending", value: "6", trend: "+1" },
    { label: "Open grant applications", value: "11", trend: "+4" },
    { label: "License reviews pending", value: "8", trend: "-1" },
    { label: "Econ dev active pipeline", value: "17", trend: "+3" }
  ],
  alerts: ["PRM-2026-041 nearing SLA breach", "Pothole complaints trending up in District 3"],
  approvals: [{ id: "a1", title: "Approve permit PRM-2026-049", owner: "Permitting" }],
  activity: ["ZNG-2026-014 hearing scheduled", "WO-411 assigned to Crew Bravo"]
};

export const residentSummary = {
  cards: [
    { label: "Active applications", value: 3 },
    { label: "Benefits applications", value: 1 },
    { label: "Grant applications", value: 1 },
    { label: "Open 311 requests", value: 2 },
    { label: "Notices", value: 3 }
  ],
  timeline: ["PRM-2026-041 needs one additional document", "311-88412 assigned to Public Works"],
  actions: ["Upload requested permit document", "Review 311 status updates"]
};

export const businessSummary = {
  cards: [
    { label: "Active permits", value: 1 },
    { label: "Open bids", value: 2 },
    { label: "License applications", value: 2 },
    { label: "Program opportunities", value: 3 },
    { label: "Compliance docs due", value: 1 }
  ],
  pipeline: ["RFQ-2026-18: Streets resurfacing", "Permit PRM-2026-049 inspection on Mar 10"],
  actions: ["Confirm inspector access window", "Finalize bid attachment"]
};


export const benefitsPrograms = [
  { id: "BEN-PGM-01", name: "Emergency Utility Relief", status: "active", owner: "Human Services" },
  { id: "BEN-PGM-02", name: "Childcare Stabilization Assistance", status: "active", owner: "Family Services" }
];

export const benefitsApplications = [
  { id: "BEN-APP-2201", programId: "BEN-PGM-01", residentName: "Nina Patel", status: "under_review", caseworker: "Elena Price", missingDocs: 1, submittedAt: "2026-03-03" },
  { id: "BEN-APP-2204", programId: "BEN-PGM-02", residentName: "Marcus Hill", status: "needs_info", caseworker: "Elena Price", missingDocs: 2, submittedAt: "2026-03-05" }
];

export const solicitations = [
  { id: "SOL-2026-18", title: "Downtown Streets Resurfacing", type: "RFP", status: "open", deadline: "2026-03-28", owner: "Procurement Office", category: "Infrastructure" },
  { id: "SOL-2026-21", title: "Citywide Document Digitization", type: "RFQ", status: "under_review", deadline: "2026-03-15", owner: "Records Office", category: "Technology" }
];

export const bidSubmissions = [
  { id: "BID-9901", solicitationId: "SOL-2026-18", vendorName: "Brookhaven Civil Works LLC", status: "submitted", amount: 1840000, submittedAt: "2026-03-06" },
  { id: "BID-9904", solicitationId: "SOL-2026-21", vendorName: "Northshore Data Services", status: "under_review", amount: 420000, submittedAt: "2026-03-04" }
];

export const grantPrograms = [
  { id: "GRT-PGM-07", name: "Corridor Activation Micro-Grant", status: "open", owner: "Economic Development" },
  { id: "GRT-PGM-11", name: "Small Manufacturer Retool Grant", status: "closed", owner: "Economic Development" }
];

export const grantApplications = [
  { id: "GRT-APP-551", programId: "GRT-PGM-07", applicantName: "Riverton Makers Co-op", status: "under_review", reviewer: "Tanya Wells", requestedAmount: 75000 },
  { id: "GRT-APP-563", programId: "GRT-PGM-07", applicantName: "Main Street Books", status: "needs_info", reviewer: "Tanya Wells", requestedAmount: 25000 }
];

export const grantAwards = [
  { id: "GRT-AWD-22", applicationId: "GRT-APP-490", amount: 50000, status: "awarded", awardedAt: "2026-02-20" }
];

export const licenseTypes = [
  { id: "LIC-TYP-01", name: "Retail Food", department: "Business Licensing" },
  { id: "LIC-TYP-02", name: "Contractor Registration", department: "Business Licensing" }
];

export const licenseApplications = [
  { id: "LIC-APP-882", licenseTypeId: "LIC-TYP-02", businessName: "Brookhaven Civil Works LLC", status: "under_review", reviewer: "D. Avery", expiresOn: "2027-03-01" },
  { id: "LIC-APP-901", licenseTypeId: "LIC-TYP-01", businessName: "Green Fork Bistro", status: "needs_info", reviewer: "D. Avery", expiresOn: null }
];

export const developmentProjects = [
  { id: "EDP-44", name: "Riverfront Innovation District", status: "active", lead: "Economic Development", projectedJobs: 120 },
  { id: "EDP-47", name: "South Corridor Retail Revitalization", status: "prospect", lead: "Economic Development", projectedJobs: 40 }
];

export const businessAssistanceCases = [
  { id: "EDA-CASE-12", businessName: "Main Street Books", status: "in_progress", advisor: "K. Morgan", need: "Lease negotiation support" },
  { id: "EDA-CASE-19", businessName: "Riverton Makers Co-op", status: "engaged", advisor: "K. Morgan", need: "Workforce grant alignment" }
];

export const incentivePrograms = [
  { id: "INC-03", name: "Downtown Facade Match", status: "active", focus: "Small business retention" },
  { id: "INC-09", name: "Local Hiring Tax Abatement", status: "draft", focus: "Workforce growth" }
];


export const recordsRequests = [
  { id: "RR-9001", requesterName: "Nina Patel", status: "gathering_records", category: "Police incident records", reviewer: "L. Simmons", dueDate: "2026-03-20" },
  { id: "RR-9005", requesterName: "OpenGov Watch", status: "under_review", category: "Procurement contracts", reviewer: "L. Simmons", dueDate: "2026-03-18" }
];

export const meetings = [
  { id: "MTG-310", title: "City Council Regular Session", status: "packet_in_progress", committee: "City Council", date: "2026-03-22" },
  { id: "MTG-314", title: "Planning Commission Hearing", status: "scheduled", committee: "Planning Commission", date: "2026-03-19" }
];

export const agendaItems = [
  { id: "AGI-88", meetingId: "MTG-310", title: "Downtown Streets Resurfacing Award", status: "under_review", owner: "Procurement" },
  { id: "AGI-92", meetingId: "MTG-314", title: "Variance ZNG-2026-014", status: "scheduled", owner: "Planning" }
];

export const courtSchedules = [
  { id: "CRT-1201", caseNumber: "BK-2026-00112", status: "scheduled", courtroom: "Courtroom A", dateTime: "2026-03-11T09:00:00Z", clerk: "M. Ortiz" },
  { id: "CRT-1207", caseNumber: "BK-2026-00119", status: "rescheduled", courtroom: "Courtroom B", dateTime: "2026-03-12T13:30:00Z", clerk: "M. Ortiz" }
];

export const incidents = [
  { id: "INC-771", type: "Traffic Incident", status: "supervisor_review", officer: "Officer Hale", supervisor: "Sgt. Rivera", occurredAt: "2026-03-05T22:14:00Z" },
  { id: "INC-774", type: "Property Damage", status: "submitted", officer: "Officer Hale", supervisor: "Sgt. Rivera", occurredAt: "2026-03-06T08:44:00Z" }
];

export const workflows = [
  { id: "WF-PERMIT", name: "Permit Standard Review", module: "Permitting", stages: ["submitted", "under_review", "inspection_scheduled", "approved"] },
  { id: "WF-FOIA", name: "Records Request Flow", module: "Records", stages: ["submitted", "acknowledged", "gathering_records", "fulfilled"] }
];

export const documentIntelligence = [
  { id: "d1", linkedRecord: "PRM-2026-041", aiSummary: "Permit packet mostly complete; missing contractor insurance.", confidence: "medium", citations: ["page 3", "appendix B"] },
  { id: "d2", linkedRecord: "RR-9001", aiSummary: "Request likely maps to incident logs + dispatch transcripts.", confidence: "medium", citations: ["request scope"] }
];

export const executiveSummary = {
  metrics: [
    { label: "Permits in review", value: 14 },
    { label: "Benefits pending", value: 9 },
    { label: "Open solicitations", value: 3 },
    { label: "Records backlog", value: 12 },
    { label: "Legislative packets due", value: 4 },
    { label: "Court schedules today", value: 16 },
    { label: "Incidents pending review", value: 7 }
  ],
  alerts: ["RR-9005 due in 48h", "Courtroom B conflict risk at 1:30 PM", "Supervisor reviews aging >24h"],
  digest: "City operations stable with pressure in records turnaround and afternoon court load. Prioritize FOIA response packet prep and courtroom balancing."
};


export const codeEnforcementCases = [
  { id: "CE-120", status: "inspection_scheduled", category: "Overgrown lot", address: "14 Pine St", assignee: "I. Monroe", priority: "medium" },
  { id: "CE-124", status: "notice_issued", category: "Unsafe structure", address: "89 Dock Rd", assignee: "I. Monroe", priority: "high" }
];

export const inspections = [
  { id: "INSP-401", type: "Permit Final", status: "scheduled", inspector: "A. Foster", relatedType: "permit", relatedId: "PRM-2026-049", scheduledFor: "2026-03-10T10:30:00Z" },
  { id: "INSP-417", type: "Code Compliance", status: "in_progress", inspector: "I. Monroe", relatedType: "code_enforcement", relatedId: "CE-120", scheduledFor: "2026-03-09T13:00:00Z" }
];

export const utilityCases = [
  { id: "UTL-81", account: "A-10022", status: "under_review", type: "Start Service", owner: "Utility Desk" },
  { id: "UTL-84", account: "A-10390", status: "resolved", type: "Billing Dispute", owner: "Utility Desk" }
];

export const assets = [
  { id: "AST-10", name: "Hydraulic Lift", status: "active", location: "Public Works Yard" },
  { id: "AST-19", name: "Generator Unit 3", status: "maintenance", location: "Water Plant" }
];
export const fleetUnits = [
  { id: "FLT-21", unit: "Truck 21", status: "active", assignedTo: "Road Crew" },
  { id: "FLT-07", unit: "Sedan 7", status: "service_due", assignedTo: "Inspections" }
];
export const facilities = [
  { id: "FAC-01", name: "City Hall", status: "operational" },
  { id: "FAC-07", name: "Community Center", status: "renovation" }
];

export const parksPrograms = [
  { id: "PRK-12", name: "Summer Youth Soccer", status: "open", location: "Riverside Fields" },
  { id: "PRK-18", name: "Community Garden Plots", status: "waitlist", location: "Maple Park" }
];

export const communicationsNotices = [
  { id: "COM-44", title: "Water service interruption advisory", status: "published", audience: "Residents", channel: "Email/SMS" },
  { id: "COM-47", title: "Procurement pre-bid conference notice", status: "draft", audience: "Vendors", channel: "Portal" }
];

export const emergencyEvents = [
  { id: "EM-300", title: "Severe storm response coordination", status: "active", severity: "high", lead: "Emergency Management" },
  { id: "EM-288", title: "Winter weather after-action", status: "closed", severity: "medium", lead: "Emergency Management" }
];

export const capitalProjects = [
  { id: "CIP-55", name: "North Pump Station Upgrade", status: "active", priority: "high", funding: "Bond FY26" },
  { id: "CIP-61", name: "Library HVAC Replacement", status: "planned", priority: "medium", funding: "Capital reserve" }
];

export const financeApprovals = [
  { id: "FIN-APR-09", item: "Fleet Tire Contract", status: "pending_finance", department: "Public Works", amount: 65000 },
  { id: "FIN-APR-11", item: "Parks irrigation parts", status: "approved", department: "Parks", amount: 18000 }
];

export const clerkRegister = [
  { id: "REG-2026-001", title: "Ordinance Filing 26-11", status: "published", filedBy: "Clerk Office" },
  { id: "REG-2026-004", title: "Public Notice Archive Entry", status: "archived", filedBy: "Clerk Office" }
];

export const boardGroups = [
  { id: "BRD-PLAN", name: "Planning Commission", meetingsPerMonth: 2 },
  { id: "BRD-HIST", name: "Historic Preservation Board", meetingsPerMonth: 1 }
];

export const integrationJobs = [
  { id: "INT-22", type: "CSV Import", status: "completed", target: "permit-applications" },
  { id: "INT-27", type: "Export", status: "running", target: "executive-metrics" }
];

export const complianceLogs = [
  { id: "AUD-1001", action: "records_request.status_update", actor: "L. Simmons", risk: "low", at: "2026-03-06T10:11:00Z" },
  { id: "AUD-1008", action: "public_safety.report_review", actor: "Sgt. Rivera", risk: "medium", at: "2026-03-06T11:02:00Z" }
];

export const mapRecords = [
  { id: "MAP-PRM-041", module: "permitting", recordId: "PRM-2026-041", label: "Permit: 142 Oak Street", lat: 33.8765, lng: -84.2742, district: "District 2", parcel: "118-22-004", status: "under_review" },
  { id: "MAP-311-88431", module: "service-requests", recordId: "311-88431", label: "311 Pothole Request", lat: 33.8824, lng: -84.2801, district: "District 3", parcel: "ROW-443", status: "triaged" },
  { id: "MAP-CIP-55", module: "capital-planning", recordId: "CIP-55", label: "North Pump Station Upgrade", lat: 33.8618, lng: -84.2613, district: "Utility Service Area North", parcel: "UTIL-12", status: "active" }
];

export const budgetChain = [
  {
    id: "CHAIN-100",
    budgetId: "BUD-2026-220",
    budgetItem: "North Pump Station Modernization",
    approvedAmount: 3200000,
    procurementId: "SOL-410",
    contractId: "CTR-92",
    vendorId: "VND-14",
    projectId: "CIP-55",
    outcomeMetric: "Pump downtime reduction",
    outcomeValue: "-37%",
    outcomeObservedAt: "2026-02-28"
  }
];

export const contracts = [
  { id: "CTR-92", vendorId: "VND-14", title: "Pump Station Controls Upgrade", status: "active", startDate: "2026-01-15", endDate: "2027-01-14", value: 1850000, insuranceExpiry: "2026-12-31" },
  { id: "CTR-97", vendorId: "VND-22", title: "Road Resurfacing Package C", status: "review", startDate: "2026-04-01", endDate: "2027-03-31", value: 940000, insuranceExpiry: "2026-09-30" }
];

export const vendorPerformance = [
  { id: "VND-14", vendor: "HydroGrid Systems", score: 91, slaCompliance: "97%", mwbeParticipation: "N/A", risk: "low", renewalWindow: "2026-Q4" },
  { id: "VND-22", vendor: "Metro Asphalt Group", score: 76, slaCompliance: "89%", mwbeParticipation: "22%", risk: "medium", renewalWindow: "2026-Q3" }
];

export const fundingOpportunities = [
  { id: "FUND-301", title: "State Water Resilience Grant", deadline: "2026-05-14", fit: "high", linkedDepartment: "Utilities", linkedProjectId: "CIP-55" },
  { id: "FUND-322", title: "Federal Main Street Revitalization", deadline: "2026-06-01", fit: "medium", linkedDepartment: "Economic Development", linkedProjectId: "INF-118" }
];

export const fundingGaps = [
  { id: "GAP-11", department: "Parks", initiative: "Trail Lighting Expansion", requested: 420000, secured: 180000 },
  { id: "GAP-14", department: "Public Works", initiative: "Fleet EV Transition", requested: 760000, secured: 250000 }
];

export const constituents = [
  { id: "CON-100", name: "Nina Patel", type: "resident", preferredChannel: "SMS", openCases: 2, lastInteraction: "2026-03-05" },
  { id: "CON-190", name: "Brookhaven Civil Works LLC", type: "business", preferredChannel: "Email", openCases: 3, lastInteraction: "2026-03-04" }
];

export const workforceAssignments = [
  { id: "WF-ASSIGN-11", staff: "I. Monroe", role: "Inspector", queue: "Code Enforcement", todayAssignments: 6, overtimeRisk: "medium" },
  { id: "WF-ASSIGN-21", staff: "Crew Bravo", role: "Public Works Crew", queue: "Work Orders", todayAssignments: 4, overtimeRisk: "low" }
];

export const strategyInitiatives = [
  { id: "STRAT-01", title: "Downtown Reliability & Mobility", owner: "City Manager", status: "on_track", progress: 62, linkedProjects: ["INF-118", "CIP-55"] },
  { id: "STRAT-04", title: "Resident Trust & Response Times", owner: "COO", status: "at_risk", progress: 41, linkedProjects: ["311-modernization"] }
];

export const onboardingChecklist = [
  { id: "ONB-1", item: "Load department roster", status: "completed" },
  { id: "ONB-2", item: "Import active permits", status: "in_progress" },
  { id: "ONB-3", item: "Configure security policies", status: "pending" },
  { id: "ONB-4", item: "Readiness review with department leads", status: "pending" }
];

export const reportPacks = [
  { id: "RPT-BOARD-01", name: "Board Packet Pack", category: "governance", status: "ready" },
  { id: "RPT-AUD-08", name: "Audit & Compliance Pack", category: "compliance", status: "generating" },
  { id: "RPT-GRANT-03", name: "Grant Performance Pack", category: "funding", status: "ready" }
];

export const payments = [
  { id: "PAY-811", recordType: "permit", recordId: "PRM-2026-049", payer: "Brookhaven Civil Works LLC", amount: 1240, status: "posted" },
  { id: "PAY-822", recordType: "license", recordId: "BIZ-777", payer: "Cedar Cafe", amount: 320, status: "pending" }
];

export const disbursements = [
  { id: "DSB-44", type: "grant", payee: "Brookhaven Workforce Collaborative", amount: 45000, status: "scheduled" },
  { id: "DSB-51", type: "vendor", payee: "HydroGrid Systems", amount: 280000, status: "approved" }
];

export const regionalInitiatives = [
  { id: "REGION-12", name: "County Flood Corridor Coordination", partners: ["Brookhaven", "North County", "Transit Authority"], status: "active" },
  { id: "REGION-17", name: "Regional Cooperative Asphalt Purchasing", partners: ["Brookhaven", "Eastfield"], status: "planning" }
];

export const marketplaceVendors = [
  { id: "MK-1", name: "HydroGrid Systems", category: "Utilities", certifications: ["Safety-2026", "ISO-AssetMgmt"], local: false },
  { id: "MK-2", name: "Cedar Community Builders", category: "Construction", certifications: ["MWBE", "Bonded"], local: true }
];
