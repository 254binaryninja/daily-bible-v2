import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BibleModule } from './bible/bible.module';
import { PrismaModule } from './prisma/prisma.module';
import { LangchainModule } from './cache/langchain/langchain.module';
import { CacheModule } from './cache/cache.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AdminModule } from './admin/admin.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { NotificationModule } from './notification/notification.module';
import { LangchainController } from './langchain/langchain.controller';
import { LangchainService } from './langchain/langchain.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BibleModule,
    PrismaModule,
    LangchainModule,
    CacheModule,
    AnalyticsModule,
    AdminModule,
    SubscriptionModule,
    NotificationModule,
  ],
  controllers: [LangchainController],
  providers: [LangchainService],
})
export class AppModule {}
