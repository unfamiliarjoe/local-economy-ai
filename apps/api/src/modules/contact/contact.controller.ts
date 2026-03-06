import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { z } from "zod";
import { Permission } from "../rbac/permissions";
import { RbacGuard, RequirePermissions } from "../rbac/rbac.guard";

const demoRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  message: z.string().min(10)
});

@Controller("contact")
@UseGuards(RbacGuard)
export class ContactController {
  @Post("demo-request")
  @RequirePermissions(Permission.contactCreate)
  requestDemo(@Body() body: unknown) {
    const payload = demoRequestSchema.parse(body);
    return { id: `dr-${Date.now()}`, status: "received", payload };
  }
}
