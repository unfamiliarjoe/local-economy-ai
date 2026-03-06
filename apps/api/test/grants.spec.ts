import { GrantsController } from "../src/modules/grants/grants.controller";

describe("GrantsController", () => {
  const controller = new GrantsController();

  it("lists grant applications", () => {
    expect(controller.applications().length).toBeGreaterThan(0);
  });

  it("creates grant application", () => {
    const created = controller.create({ programId: "GRT-PGM-07", applicantName: "Applicant", requestedAmount: 10000, narrative: "A detailed narrative for project impact and outcomes." });
    expect(created.status).toBe("submitted");
  });
});
