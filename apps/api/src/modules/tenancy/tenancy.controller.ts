import { Controller, Get, Param } from "@nestjs/common";

@Controller("tenant")
export class TenancyController {
  @Get("current")
  current() {
    return {
      slug: "city-of-brookhaven",
      name: "City of Brookhaven",
      tenantIsolationMode: "strict"
    };
  }

  @Get(":slug")
  bySlug(@Param("slug") slug: string) {
    return {
      slug,
      name: slug === "city-of-brookhaven" ? "City of Brookhaven" : "Unknown Municipality",
      tenantIsolationMode: "strict"
    };
  }
}
