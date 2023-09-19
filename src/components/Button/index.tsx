import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
  Button,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const SwitchToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group
      position="center"
      sx={{

        display: "flex",
        flexDirection: "column",
      }}
    >
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="sm"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[6]}
            size="1.25rem"
            stroke={1.5}
          />
        }
      />
    </Group>
  );
};

export const CustomeButton = ({ ...props }: { [key: string]: any }) => (
  <Button
    mt="xl"
    sx={(theme) => ({
      borderRadius: 3,
      [theme.fn.largerThan("sm")]: {
        width: `calc(${theme.spacing.xl} * 15)`,
      },
    })}
    
    {...props}
  >
    {props.children}
  </Button>
);

export const CustomeActionButton = ({ ...props }: { [key: string]: any }) => (
  <ActionIcon  
    {...props}
  >
    {props.children}
  </ActionIcon>
);