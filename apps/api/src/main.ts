import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { randomUUID } from "crypto";
import { AppModule } from "./modules/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use((req, res, next) => {
    const correlationId = req.headers["x-correlation-id"] || randomUUID();
    res.setHeader("x-correlation-id", correlationId);
    res.setHeader("x-frame-options", "DENY");
    res.setHeader("x-content-type-options", "nosniff");
    next();
  });
  await app.listen(4000);
}

bootstrap();
