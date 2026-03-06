import { InfrastructureController } from "../src/modules/infrastructure/infrastructure.controller";

describe("InfrastructureController", () => {
  const controller = new InfrastructureController();

  it("lists projects", () => {
    const projects = controller.projects(undefined);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("creates maintenance request", () => {
    const created = controller.createRequest({ title: "Sinkhole", location: "8th and Elm", priority: "high" });
    expect(created.status).toBe("reported");
  });
});
