import { Text, Paper, Group } from "@mantine/core";

interface OverviewCardProps {
  label: string;
  count: number;
}

export default function OverviewCard({ label, count }: OverviewCardProps) {
  return (
    <Paper withBorder radius="md" p="xs">
      <Group>
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
