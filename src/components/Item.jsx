import { ListItem } from "@chakra-ui/layout";
import { memo } from "react"

export const Item = memo((props) => {
    const { message } = props;
    return (
        <ListItem fontSize="md">{message?.user} : {message?.content}</ListItem>
    )
})