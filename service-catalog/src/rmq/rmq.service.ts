import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

export interface ProfileViewedPayload {
  profileId: string;
  viewerRole: string;
  beach: string;
  timestamp: string;
}

@Injectable()
export class RmqService {
  constructor(
    @Inject("ANALYTICS_SERVICE") private readonly analyticsClient: ClientProxy,
  ) {}

  emitProfileViewed(payload: ProfileViewedPayload): void {
    this.analyticsClient.emit("profile_viewed", payload);
  }
}
