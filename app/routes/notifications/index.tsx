import { Avatar, Group, ScrollArea, Table, Text, Title } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/notifications`);
    const jsonData = await response.json();
    return json(jsonData.data?.notifications);
  } catch (error) {
    throw error;
  }
};
export default function Notifications() {
  const notifications = useLoaderData();
  const rows = notifications?.map((notification: NotificationInterface) => (
    <tr key={notification.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={notification?.fromUser?.profileImage} radius={30} />
          <Text size="sm" weight={500}>
            {notification?.fromUser?.firstName}
          </Text>
        </Group>
      </td>
     
      <td>
        <Text size="sm" weight={500}>
          {notification.content}
        </Text>
      </td>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={notification?.toUser?.profileImage} radius={30} />
          <Text size="sm" weight={500}>
            {notification.toUser?.firstName}
          </Text>
        </Group>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(notification.createdAt).toDateString()}
        </Text>
      </td>

    </tr>
  ));
  return (
    <ScrollArea>
      <Title order={4}>Notifications</Title>
      <Table mt="sm" sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Content</th>
            <th>Receiver</th>
            <th>Created At</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}