/* eslint-disable react/function-component-definition */
import { Box, Button, Flex, Group, Select, TextInput, Title } from '@mantine/core'
import React from 'react'

const AddNewRole = () => {
    return (
        <Box className='shadow' p={6}>
            <Title>Add New Role</Title>
            <Box>
                <TextInput label="Role Name" />
                <TextInput label="Role Description" />
                <Select label={"Parent"} data={[{ value: "13423", label: "Active" }, { value: "223423", label: "Inactive" }]} />
                <Flex>
                    <Button>Cancel</Button>
                    <Button>Add</Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default AddNewRole