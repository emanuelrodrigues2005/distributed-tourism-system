import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProfileView, ProfileViewDocument } from "./schemas/profile-view.schema";

@Controller()
export class AnalyticsController {
  constructor(
    @InjectModel(ProfileView.name)
    private readonly profileViewModel: Model<ProfileViewDocument>,
  ) {}

  @EventPattern("profile_viewed")
  async handleProfileViewed(@Payload() data: any) {
    const doc = new this.profileViewModel({
      profileId: data.profileId,
      viewerRole: data.viewerRole,
      beach: data.beach,
      timestamp: new Date(data.timestamp ?? Date.now()),
    });
    await doc.save();
  }
}
