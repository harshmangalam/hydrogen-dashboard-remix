import { Text, Paper, Group } from "@mantine/core";

interface OverviewCardProps {
  label: string;
  count: number;
  icon: any;
}

export default function OverviewCard({
  label,
  icon: Icon,
  count,
}: OverviewCardProps) {
  return (
    <Paper withBorder radius="md" p="xs">
      <Group align={"start"}>
        <Icon size={24} stroke={1.5} />

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {label}
          </Text>
          <Text weight={700} size="xl">
            {count}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
