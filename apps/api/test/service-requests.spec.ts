import { ServiceRequestsController } from "../src/modules/service-requests/service-requests.controller";

describe("ServiceRequestsController", () => {
  const controller = new ServiceRequestsController();

  it("auto-prioritizes pothole requests", () => {
    const created = controller.create({ category: "Pothole", location: "Main St", summary: "Large pothole by bus lane", residentName: "Nina Patel" });
    expect(created.priority).toBe("high");
  });
});
