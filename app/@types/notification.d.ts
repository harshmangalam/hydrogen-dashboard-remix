
interface NotificationInterface {
    id: string;
    type: string;
    content: string;
    createdAt: Date;
    fromUserId: string;
    toUserId: string;
    fromUser: Author;
    toUser: Author;
}