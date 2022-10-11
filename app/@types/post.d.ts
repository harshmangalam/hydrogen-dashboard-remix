interface Author {
  id: string;
  firstName: string;
  profileImage: string;
  email: string;
}

interface Count {
  comments: number;
  likes: number;
  specificAudienceFriends: number;
  taggedFriends: number;
}
interface PostInterface {
  id: string;
  content: string;
  audience: string;
  authorId: string;
  image: string;
  feeling: string;
  checkIn: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  specificAudienceFriends: any[];
  taggedFriends: any[];
  _count: Count;
}
