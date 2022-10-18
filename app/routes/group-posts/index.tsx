import { Avatar, Group, ScrollArea, Table, Text, Title } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/groupPosts`);
    const jsonData = await response.json();
    return json(jsonData?.data?.groupPosts);
  } catch (error) {
    throw error;
  }
};

export default function GroupPosts() {
  const groupPosts = useLoaderData();
  const rows = groupPosts?.map((post: GroupPostInterface) => (
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
          {post?.group?.name}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
          {post.content}
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
            <th>Group</th>
            <th>Content</th>
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
