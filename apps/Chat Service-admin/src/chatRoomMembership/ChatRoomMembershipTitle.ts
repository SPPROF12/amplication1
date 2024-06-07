import { ChatRoomMembership as TChatRoomMembership } from "../api/chatRoomMembership/ChatRoomMembership";

export const CHATROOMMEMBERSHIP_TITLE_FIELD = "id";

export const ChatRoomMembershipTitle = (
  record: TChatRoomMembership
): string => {
  return record.id?.toString() || String(record.id);
};
