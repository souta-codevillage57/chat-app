import { Input } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Link, Stack } from "@chakra-ui/layout"
import { memo, useContext, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import firebase from "../../config/firebase"
import { Redirect, useHistory } from "react-router"
import { AuthContext } from "../../AuthService"

export const Login = memo((props) => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/room" />
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

    const onSubmitLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
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

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" borderRadius="md" p={4} shadow="md" >
                <Heading as="h1" size="lg" textAlign="center">ログイン画面</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10} as="form" onSubmit={onSubmitLogin}>
                    <Input placeholder="email" value={email} onChange={onChangeEmail} />
                    <Input placeholder="password" value={password} onChange={onChangePassword} />
                    <Input placeholder="name" value={name} onChange={onChangeName} />
                    <PrimaryButton>SignUp</PrimaryButton>
                    <Link color="gray.500" href="/">ユーザー登録へ</Link>
                </Stack>
            </Box>
        </Flex>
    )
})