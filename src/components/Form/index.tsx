import { Flex,Text } from "@mantine/core";

import { useState } from "react";
import { login, getCurrentUser} from "../../api";
import { useForm, hasLength } from "@mantine/form";
import { CustomInput, CustomeButton, CustomeSelect } from "..";
import { IconAt, IconLockOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
export const CustomeForm = () => {
  const navigate = useNavigate();

  const [errorResponce, setErrorResponce] = useState<string>();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms:""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: hasLength({ min: 6 }, "Invalid password"),
    },
  });
  const handleSubmit = (values: any) => {
        login(values.email, values.password)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', JSON.stringify(data))
        }
        navigate('/');
        
        // Authentication succeeded
        // Perform any necessary actions after successful login
        console.log("Logged in as", getCurrentUser()?.username,data);
      })
      .catch((error) => {
        // Authentication failed
        setErrorResponce(error.message)
      });
  };
  return (
    <>
      <Flex align="center" justify="center" direction="column" gap={10}>
        <Text color="red">{errorResponce}</Text>
        <form className="w-full" onSubmit={form.onSubmit(handleSubmit)}>
          <CustomInput
            icon={<IconAt size="1rem" />}
            placeholder="Enter Email"
            label="Email"
            description=""
            withAsterisk
            id="email"
            form={form}
            type="TextInput"
          />

          <CustomInput
            icon={<IconLockOff size="1rem" />}
            placeholder="Enter Password"
            label="Password"
            description=""
            withAsterisk
            id="password"
            form={form}
            type="PasswordInput"
          />
          <CustomeSelect />
          <CustomInput
            label="I accepts terms & conditions"
            mt="sm"
            id="terms"
            form={form}
            type="Checkbox"
          />
          <Flex justify="flex-end">
            <CustomeButton type="submit" children='Sign In' />
          </Flex>
        </form>
      </Flex>
    </>
  );
};

// export const CustomeForm = () => {
//   const form = useForm({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//       password: hasLength({ min: 6 }, "Invalid password"),
//     },
//   });
//   const handleSubmit = (values: any) => {
//     console.log(values);
//   };
//   return (
//     <form onSubmit={form.onSubmit(handleSubmit)}>
//       <CustomInput
//         icon={<IconAt size="1rem" />}
//         placeholder="Enter Email"
//         label="Email"
//         description=""
//         withAsterisk
//         id='email'
//         form={form}
//         type="TextInput"
//       />

//       <CustomInput
//         icon={<IconLockOff size="1rem" />}
//         placeholder="Enter Password"
//         label="Password"
//         description=""
//         withAsterisk
//         id='password'
//         form={form}
//         type="PasswordInput"
//       />
//       <CustomeSelect />
//       <Group position="right" mt="md">
//         <Button type="submit">Submit</Button>
//       </Group>
//     </form>
//   );
// };
