'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import { MantineTree } from "@repo/ui/tree"
import { TreeConfig } from '@repo/ui/tree-models';
import { Section } from "@repo/ui/section"
import { Box, Button, Flex } from '@mantine/core';

function Layout() {
    const [selectedData, setSelectedData] = useState<any>(null);
    const [type, setType] = useState<any>(null)

    const config: TreeConfig<any> = {
        id: 'id',
        label: 'title',
        onClick: async (data) => {
            setSelectedData(data);
        },
        load: async (data) => {
            console.log(data)
        },
    };
    const w = type === "new" ? "40%" : type == "detail" ? "40%" : "100%"


    return (
        <Section collapsible={false} action={<Button onClick={() => { setType(type ? null : 'new') }} bg={type ? "red" : "blue"}>{type ? "Close" : "New"}</Button>}>
            <Flex align={"flex-start"} gap={"md"}>
                <Box w={w}>
                    <MantineTree
                        config={config}
                        data={[{ id: 1, title: 'Root', children: [{ id: 2, title: 'Child 1' }, { id: 3, title: 'Child 2' }] }]}

                    />
                </Box>
                <Box w={type ? "40%" : "0"}>
                    {type === "new" ? "Hello World" : type === "detail" ? "detail" : null}
                </Box>
            </Flex>
        </Section >
    )
}

export default Layout