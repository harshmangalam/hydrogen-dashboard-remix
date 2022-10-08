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
import { IconPencil, IconTrash } from "@tabler/icons";

interface UsersTableProps {
  data: {
    avatar: string;
    name: string;
    job: string;
    email: string;
    phone: string;
  }[];
}

const jobColors: Record<string, string> = {
  engineer: "blue",
  manager: "cyan",
  designer: "pink",
};

export default function Users() {
  const theme = useMantineTheme();
  const rows = [...new Array(100)].map((item) => (
    <tr>
      <td>
        <Group spacing="sm">
          <Avatar
            size={30}
            src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
            radius={30}
          />
          <Text size="sm" weight={500}>
            Harsh Mangalam
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors["engineer"]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        ></Badge>
      </td>
      <td>
        <Anchor<"a">
          size="sm"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          harshmangalam@gmail.com
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          8797604475
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Job title</th>
            <th>Email</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
