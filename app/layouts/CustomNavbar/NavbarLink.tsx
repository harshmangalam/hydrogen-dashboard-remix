import { Tooltip, UnstyledButton } from "@mantine/core";
import useStyles from "./useStyles";
import { TablerIcon } from "@tabler/icons";
interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export default function NavbarLink({
  label,
  active,
  icon: Icon,
  onClick,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}
