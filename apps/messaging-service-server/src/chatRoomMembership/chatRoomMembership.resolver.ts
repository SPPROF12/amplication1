import * as graphql from "@nestjs/graphql";
import { ChatRoomMembershipResolverBase } from "./base/chatRoomMembership.resolver.base";
import { ChatRoomMembership } from "./base/ChatRoomMembership";
import { ChatRoomMembershipService } from "./chatRoomMembership.service";

@graphql.Resolver(() => ChatRoomMembership)
export class ChatRoomMembershipResolver extends ChatRoomMembershipResolverBase {
  constructor(protected readonly service: ChatRoomMembershipService) {
    super(service);
  }
}
