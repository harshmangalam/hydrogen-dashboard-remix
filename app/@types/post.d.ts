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

interface Group {
  id: string;
  name: string;
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

interface GroupPostInterface {
  id: string;
  content: string;
  authorId: string;
  image: string;
  isPublished: boolean;
  groupId: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  group: Group;
  _count: Count;
}