import { RecordsRequestsController } from "../src/modules/records-requests/records-requests.controller";

describe("RecordsRequestsController", () => {
  const controller = new RecordsRequestsController();

  it("lists requests", () => {
    expect(controller.list(undefined).length).toBeGreaterThan(0);
  });

  it("creates request", () => {
    const created = controller.create({ requesterName: "Resident", category: "Contracts", description: "Requesting FY26 contract summaries" });
    expect(created.status).toBe("submitted");
  });
});
