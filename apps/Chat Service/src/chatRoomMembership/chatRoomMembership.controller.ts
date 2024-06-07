import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatRoomMembershipService } from "./chatRoomMembership.service";
import { ChatRoomMembershipControllerBase } from "./base/chatRoomMembership.controller.base";

@swagger.ApiTags("chatRoomMemberships")
@common.Controller("chatRoomMemberships")
export class ChatRoomMembershipController extends ChatRoomMembershipControllerBase {
  constructor(protected readonly service: ChatRoomMembershipService) {
    super(service);
  }
}
