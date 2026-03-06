import { Body, Controller, Post } from "@nestjs/common";
import { z } from "zod";
import { demoUsers, DemoRole } from "../../common/demo-data";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["municipality_admin", "staff", "resident", "vendor", "platform_admin"]).default("staff")
});

@Controller("auth")
export class AuthController {
  @Post("login")
  login(@Body() body: unknown) {
    const payload = loginSchema.parse(body);
    const role = payload.role as DemoRole;
    const user = demoUsers[role];
    return {
      accessToken: `demo-token-${role}`,
      tokenType: "Bearer",
      role,
      user
    };
  }
}
