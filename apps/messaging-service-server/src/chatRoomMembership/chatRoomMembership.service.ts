import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatRoomMembershipServiceBase } from "./base/chatRoomMembership.service.base";

@Injectable()
export class ChatRoomMembershipService extends ChatRoomMembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
