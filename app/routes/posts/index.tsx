import { Avatar, Group, ScrollArea, Table, Text, Title } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/posts`);
    const jsonData = await response.json();
    return json(jsonData.data?.posts);
  } catch (error) {
    throw error;
  }
};
export default function Posts() {
  const posts = useLoaderData();
  const rows = posts?.map((post: PostInterface) => (
    <tr key={post.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={post?.author?.profileImage} radius={30} />
          <Text size="sm" weight={500}>
            {post.author?.firstName}
          </Text>
        </Group>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {post.feeling}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {post.content}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {post.audience}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(post.createdAt).toDateString()}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(post.updatedAt).toDateString()}
        </Text>
      </td>
    </tr>
  ));
  return (
    <ScrollArea>
      <Title order={4}>Posts</Title>
      <Table mt="sm" sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Author</th>
            <th>Feeling</th>
            <th>Content</th>
            <th>Audience</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
