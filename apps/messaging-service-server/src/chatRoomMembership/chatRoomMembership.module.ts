import { Module } from "@nestjs/common";
import { ChatRoomMembershipModuleBase } from "./base/chatRoomMembership.module.base";
import { ChatRoomMembershipService } from "./chatRoomMembership.service";
import { ChatRoomMembershipController } from "./chatRoomMembership.controller";
import { ChatRoomMembershipResolver } from "./chatRoomMembership.resolver";

@Module({
  imports: [ChatRoomMembershipModuleBase],
  controllers: [ChatRoomMembershipController],
  providers: [ChatRoomMembershipService, ChatRoomMembershipResolver],
  exports: [ChatRoomMembershipService],
})
export class ChatRoomMembershipModule {}
