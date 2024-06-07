import { ChatRoomMembershipWhereInput } from "./ChatRoomMembershipWhereInput";
import { ChatRoomMembershipOrderByInput } from "./ChatRoomMembershipOrderByInput";

export type ChatRoomMembershipFindManyArgs = {
  where?: ChatRoomMembershipWhereInput;
  orderBy?: Array<ChatRoomMembershipOrderByInput>;
  skip?: number;
  take?: number;
};
