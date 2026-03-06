import {
  budgetChain,
  codeEnforcementCases,
  contracts,
  fundingGaps,
  fundingOpportunities,
  mapRecords,
  vendorPerformance
} from "../src/common/demo-data";

describe("demo data integrity", () => {
  it("keeps code enforcement IDs unique", () => {
    const ids = codeEnforcementCases.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps budget chain linked to contracts and vendors", () => {
    const chain = budgetChain[0];
    expect(contracts.find((c) => c.id === chain.contractId)).toBeTruthy();
    expect(vendorPerformance.find((v) => v.id === chain.vendorId)).toBeTruthy();
  });

  it("provides map records and funding gap narratives", () => {
    expect(mapRecords.length).toBeGreaterThan(0);
    expect(fundingGaps.some((g) => g.requested > g.secured)).toBe(true);
    expect(fundingOpportunities.length).toBeGreaterThan(0);
  });
});
