import {
  Avatar,
  Badge,
  Group,
  ScrollArea,
  Table,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ADMIN_ENDPOINT } from "~/constants";

const privacy: Record<string, string> = {
  PUBLIC: "Public",
  PRIVATE: "Private",
};

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(`${ADMIN_ENDPOINT}/groups`);
    const jsonData = await response.json();
    return json({ groups: jsonData.data.groups });
  } catch (error) {
    throw error;
  }
};
export default function Groups() {
  const loaderData = useLoaderData();
  const theme = useMantineTheme();
  const rows = loaderData?.groups?.map((group: any) => (
    <tr key={group.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={group.profileImage} radius={30} />
          <Tooltip label={group.name}>
            <Text
              size="sm"
              weight={500}
              sx={{
                overflow: "hidden",
                maxWidth: "30ch",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {group.name}
            </Text>
          </Tooltip>
        </Group>
      </td>
      <td>
        <Badge
          color={privacy[group.privacy]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {group.privacy}
        </Badge>
      </td>

      <td>
        <Badge
          color={"blue"}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {group._count.members}
        </Badge>
      </td>

      <td>
        <Badge
          color={"green"}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {group._count.posts}
        </Badge>
      </td>
      <td>
        <Badge
          color={"orange"}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {group._count.invitedPeople}
        </Badge>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {group.admin.firstName}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(group.createdAt).toDateString()}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {new Date(group.updatedAt).toDateString()}
        </Text>
      </td>
    </tr>
  ));
  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Privacy</th>
            <th>Members</th>
            <th>Posts</th>
            <th>Invited People</th>
            <th>Admin</th>
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
