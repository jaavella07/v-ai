import { Module } from "@nestjs/common";
import { TriggersService } from "./triggers.service";
import { EmailModule } from "src/shared/email/email.module";

@Module({
  imports: [
    TriggersModule,
    EmailModule
  ],
  providers: [TriggersService],
  exports: [TriggersService],
})
export class TriggersModule { }
