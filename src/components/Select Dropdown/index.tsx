import { Select } from '@mantine/core';

export const CustomeSelect = () => {
  return (
    <Select
      label="Role"
      placeholder="Pick one"
      data={[
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'superAdmin', label: 'Super Admin' },
      ]}
      maw={320}
      mx="auto"
      sx={(theme)=>({
        width: "100%"
        
      })}
    />
  );
}