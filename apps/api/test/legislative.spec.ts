import { LegislativeController } from "../src/modules/legislative/legislative.controller";

describe("LegislativeController", () => {
  const controller = new LegislativeController();

  it("returns meetings and detail", () => {
    expect(controller.listMeetings().length).toBeGreaterThan(0);
    expect(controller.detail("MTG-310").agendaItems.length).toBeGreaterThan(0);
  });
});
