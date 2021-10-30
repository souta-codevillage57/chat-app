import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Stack, UnorderedList } from "@chakra-ui/layout"
import { memo, useContext, useEffect, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import firebase from "../../config/firebase"
import { AuthContext } from "../../AuthService"
import { Item } from "../Item"

export const Room = memo(() => {

    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const onClickLogout = () => {
        firebase.auth().signOut()
    }

    useEffect(() => {
        firebase.firestore().collection('messages')
            .orderBy("createdAt", "asc")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map((doc) => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.firestore().collection('messages').add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            content: value
        })
        setValue('')
    }

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }


    return (
        <Flex justify="center" align="center" height="100vh">
            <Box bg="white" borderRadius="md" shadow="md" p={4}>
                <Heading as="h1" size="lg" textAlign="center">チャット画面</Heading>
                <Divider my={4} />
                <UnorderedList>
                    {messages.map((message, index) => (
                        <Item key={index} message={message} />
                    ))}
                </UnorderedList>
                <Stack as="form" spacing={6} py={4} px={10} onSubmit={handleSubmit}>
                    <Input placeholder="Aa" value={value} onChange={onChangeValue} />
                    <PrimaryButton>送信</PrimaryButton>
                </Stack>
                <Button display="block" my={0} ml="auto" mr={0} onClick={onClickLogout}>Logout</Button>
            </Box>
        </Flex>
    )
})