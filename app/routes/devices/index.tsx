import { Avatar, Group, ScrollArea, Table, Text, Title } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/loginHistory`);
    const jsonData = await response.json();
    return json(jsonData.data?.loginHistory);
  } catch (error) {
    throw error;
  }
};
export default function Devices() {
  const loginHistories = useLoaderData();
  const rows = loginHistories?.map((loginHistory: DeviceInterface) => (
    <tr key={loginHistory.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={loginHistory?.user?.profileImage} radius={30} />
          <Text size="sm" weight={500}>
            {loginHistory?.user?.firstName}
          </Text>
        </Group>
      </td>
     
      <td>
        <Text size="sm" weight={500}>
        {new Date(loginHistory.lastSeen).toDateString()}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
        {loginHistory.browser?.name}
        </Text>
      </td>
      <td>
        <Text size="sm" weight={500}>
        {loginHistory.os?.family}
        </Text>
      </td>
      <td>
        <Text size="sm" color={loginHistory.isActive ? "green":"red"} weight={500}>
        {loginHistory.isActive ? "Active":"Inactive"}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(loginHistory.createdAt).toDateString()}
        </Text>
      </td>

    </tr>
  ));
  return (
    <ScrollArea>
      <Title order={4}>Login History of Devices</Title>
      <Table mt="sm" sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>User</th>
            <th>Last Active</th>
            <th>Browser</th>
            <th>OS</th>
            <th>Status</th>
            <th>Created At</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}