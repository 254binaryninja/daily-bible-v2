import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BibleModule } from './bible/bible.module';
import { AiInteractionModule } from './ai-interaction/ai-interaction.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BibleModule,
    AiInteractionModule,
    PrismaModule,
  ],
})
export class AppModule {}
