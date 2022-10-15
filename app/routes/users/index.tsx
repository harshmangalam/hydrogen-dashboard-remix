import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconPencil, IconTrash } from "@tabler/icons";
import { ADMIN_ENDPOINT, ENDPOINT } from "~/constants";

const jobColors: Record<string, string> = {
  engineer: "blue",
  manager: "cyan",
  designer: "pink",
};

const gender: Record<string, string> = {
  MALE: "blue",
  FEMALE: "cyan",
  OTHER: "pink",
};

const status: Record<string, string> = {
  ACTIVE: "green",
  IDLE: "yellow",
  LOGOUT: "red",
};

const role: Record<string, string> = {
  ADMIN: "blue",
  USER: "cyan",
};

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/users`);
    const jsonData = await response.json();
    return json({ users: jsonData.data.users });
  } catch (error) {
    throw error;
  }
};

export default function Users() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const theme = useMantineTheme();
  const rows = loaderData?.users?.map((user) => (
    <tr key={user.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={user.profileImage} radius={30} />
          <Text size="sm" weight={500}>
            {user.firstName} {user.lastName}
          </Text>
        </Group>
      </td>

      <td>
        <Text size="sm" weight={500}>
          {user.email}
        </Text>
      </td>
      <td>
        <Badge
          color={gender[user.gender]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {user.gender}
        </Badge>
      </td>
      <td>
        <Badge
          color={status[user.staus]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {user.status}
        </Badge>
      </td>
      <td>
        <Badge
          color={role[user.role]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {user.role}
        </Badge>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(user.lastSeen).toDateString()}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(user.createdAt).toDateString()}
        </Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Role</th>
            <th>Last Seen</th>
            <th>Joined At</th>

            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
