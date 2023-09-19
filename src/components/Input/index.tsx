import {
  TextInput,
  PasswordInput,
  Checkbox,
  Input,
  createStyles,
} from "@mantine/core";
import { UseFormReturnType } from '@mantine/form';


export const useInputStyles = createStyles((theme) => ({
  root: {
    maxWidth: "20rem",
    minWidth: "10rem",
    width:'100%'

  },
  input: {
    borderRadius: 3,
    borderColor: "transparent",
    color:"black",
    fontSize: "11px",
    outline: "none",
    "&:focus-within": {
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
  icon: {
    background: 'transparent'
  },
  rightSection:{
  }
}));
export const CustomInput = <T extends object>({ id, form,type, ...props }: CustomInputProps<T>) => {
  const { classes } = useInputStyles();
  switch (type) {
    case "TextInput":
      return (
        <TextInput {...form.getInputProps(id)} {...props} classNames={classes} />
      );
    case "PasswordInput":
      return (
        <PasswordInput classNames={classes}
        {...form.getInputProps(id)} {...props}
        />
      );
    case "Checkbox":
      return (
        <Checkbox classNames={classes}
        {...form.getInputProps(id, { type: 'checkbox' })} {...props}
        />
      );
    default:
      return (
        <Input.Wrapper
          placeholder={props?.wrapperPlaceholder}
          label={props?.wrapperLabel}
          withAsterisk={props?.withAsterisk}
          description={props?.wrapperDescription}
          error={props?.errorDescription}
        >
          <Input classNames={classes}
            {...form.getInputProps(id)} {...props}
          />
        </Input.Wrapper>
      );
  }
};

{/* <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      /> */}

interface CustomInputProps<T> {
  type?: string;
  id: keyof T;
  form: UseFormReturnType<T>;
  [key: string]: any;
}