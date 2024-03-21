'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import { MantineTree } from "@repo/ui/tree"
import { TreeConfig } from '@repo/ui/tree-models';
import { Section } from "@repo/ui/section"
import { Box, Button, Divider, Flex, Text, Title } from '@mantine/core';
import AddNewRole from '../../_components/add-new/new';

function Layout() {
    const [selectedData, setSelectedData] = useState<any>(null);
    const [type, setType] = useState<any>(null)

    const config: TreeConfig<any> = {
        id: 'id',
        label: 'title',
        onClick: async (data) => {
            console.log(data)
            setType(selectedData && data.id === selectedData.id ? null : 'detail')
            setSelectedData(selectedData && data.id === selectedData.id ? null : data);
        },
        load: async (data) => {
            console.log(data)
        },
    };
    const w = type === "new" ? "40%" : type == "detail" ? "40%" : "100%"


    return (
        <Section collapsible={false} action={<Button onClick={() => {
            setSelectedData(null)
            setType(type ? null : 'new');
        }}
            bg={type ? "red" : "blue"}
        >{type ? "Close" : "New"}</Button>}>
            <Flex align={"flex-start"} gap={"md"}>
                <Box w={w}>
                    <MantineTree
                        config={config}
                        data={[{ id: 1, title: 'Root', children: [{ id: 2, title: 'Child 1' }, { id: 3, title: 'Child 2' }] }]}

                    />
                </Box>
                <Divider orientation="vertical" />
                <Box w={type ? "40%" : "0"}>
                    {type === "new" ? <AddNewRole /> : type === "detail" ? <Box>
                        <Title className='border-b font-semibold py-2' size={"h3"}>
                            {selectedData?.title} Role Detail
                        </Title>
                        <Box>
                            <Flex className=" border-b" gap={"md"} align={"center"}>
                                <label className='w-1/4 px-2 py-3 bg-blue-50'>Role Name</label>
                                <Text>{selectedData?.title}</Text>
                            </Flex>
                            <Flex className=" border-b" gap={"md"} align={"center"}>
                                <label className='w-1/4 px-2 py-3 bg-blue-50'>Role Description</label>
                                <Text>{selectedData?.description}</Text>
                            </Flex>
                        </Box>
                        <Flex align={"center"} justify={"flex-end"} gap={"md"} mt={"md"}>
                            <Button>Update</Button>
                            <Button bg={"red"}>Cancel</Button>
                        </Flex>
                    </Box> : null}
                </Box>
            </Flex>
        </Section >
    )
}

export default Layout