import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AnalyticsController } from "./analytics.controller";
import { ProfileView, ProfileViewSchema } from "./schemas/profile-view.schema";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL ?? "mongodb://localhost:27017/db_analytics",
    ),
    MongooseModule.forFeature([
      { name: ProfileView.name, schema: ProfileViewSchema },
    ]),
  ],
  controllers: [AnalyticsController],
})
export class AppModule {}
