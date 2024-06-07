/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ChatRoom as PrismaChatRoom } from "@prisma/client";

export class ChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChatRoomCountArgs, "select">): Promise<number> {
    return this.prisma.chatRoom.count(args);
  }

  async chatRooms<T extends Prisma.ChatRoomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatRoomFindManyArgs>
  ): Promise<PrismaChatRoom[]> {
    return this.prisma.chatRoom.findMany<Prisma.ChatRoomFindManyArgs>(args);
  }
  async chatRoom<T extends Prisma.ChatRoomFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatRoomFindUniqueArgs>
  ): Promise<PrismaChatRoom | null> {
    return this.prisma.chatRoom.findUnique(args);
  }
  async createChatRoom<T extends Prisma.ChatRoomCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatRoomCreateArgs>
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.create<T>(args);
  }
  async updateChatRoom<T extends Prisma.ChatRoomUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatRoomUpdateArgs>
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.update<T>(args);
  }
  async deleteChatRoom<T extends Prisma.ChatRoomDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatRoomDeleteArgs>
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.delete(args);
  }
}
