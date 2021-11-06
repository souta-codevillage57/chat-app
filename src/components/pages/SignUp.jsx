import { Input } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Link, Stack } from "@chakra-ui/layout"
import { memo, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import firebase from "../../config/firebase"
import { useHistory } from "react-router"

export const SignUp = memo(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const history = useHistory();

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
                history.push("/room")
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setEmail('')
                setPassword('')
            })
    }


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" borderRadius="md" p={4} shadow="md" >
                <Heading as="h1" size="lg" textAlign="center">ユーザー登録</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10} as="form" onSubmit={onSubmitSignUp}>
                    <Input placeholder="email" value={email} onChange={onChangeEmail} />
                    <Input placeholder="password" value={password} onChange={onChangePassword} />
                    <Input placeholder="name" value={name} onChange={onChangeName} />
                    <PrimaryButton>SignUp</PrimaryButton>
                    <Link color="gray.500" href="/login">ログイン画面へ</Link>
                </Stack>
            </Box>
        </Flex>
    )
})