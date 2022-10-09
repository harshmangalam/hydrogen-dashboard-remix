import { Tooltip } from "@mantine/core";
import useStyles from "./useStyles";
import { TablerIcon } from "@tabler/icons";
import { NavLink } from "@remix-run/react";
interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  onClick?(): void;
  href: string;
}

export default function NavbarLink({
  label,
  icon: Icon,
  onClick,
  href,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <NavLink
        to={href}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? cx(classes.link, classes.active) : classes.link
        }
      >
        <Icon stroke={1.5} />
      </NavLink>
    </Tooltip>
  );
}
