const demoTenant = {
  slug: "city-of-brookhaven",
  name: "City of Brookhaven",
  departments: ["Permitting", "Planning", "Public Works", "311", "Records", "Benefits", "Procurement"],
  demoUsers: [
    "ava@brookhaven.gov (municipality_admin)",
    "jordan@brookhaven.gov (staff)",
    "nina.patel@example.com (resident)",
    "ops@brookhavencivil.com (vendor)"
  ],
  phase3Records: {
    permits: 3,
    inspections: 1,
    zoningCases: 2,
    infrastructureProjects: 2,
    workOrders: 2,
    maintenanceRequests: 2,
    serviceRequests311: 3
  },
  phase4Records: {
    benefitsPrograms: 2,
    benefitsApplications: 2,
    solicitations: 2,
    bids: 2,
    grantPrograms: 2,
    grantApplications: 2,
    licenseApplications: 2,
    developmentProjects: 2,
    businessAssistanceCases: 2,
    incentivePrograms: 2
  },
  phase5Records: {
    recordsRequests: 2,
    meetings: 2,
    agendaItems: 2,
    courtSchedules: 2,
    incidentReports: 2,
    workflows: 2,
    documentIntelligenceEntries: 2
  },
  phase6Records: {
    codeEnforcementCases: 2,
    sharedInspections: 2,
    utilityCases: 2,
    assets: 2,
    fleetUnits: 2,
    facilities: 2,
    parksPrograms: 2,
    communicationNotices: 2,
    emergencyEvents: 2,
    capitalProjects: 2,
    financeApprovals: 2,
    clerkRegisterEntries: 2,
    boardGroups: 2,
    integrationJobs: 2,
    complianceLogs: 2
  }
};

console.log("Seeding City of Brookhaven phase 6 dataset...");
console.table(demoTenant);
console.log("Phase 6 demo seed scaffold complete.");
