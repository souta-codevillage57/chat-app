import { memo } from "react"
import { Button } from "@chakra-ui/button"


export const PrimaryButton = memo((props) => {
    const { children } = props;
    return (
        <Button
            bg="gray.500"
            color="white"
            _hover={{ opacity: 0.8 }}
            type="submit"
        >
            {children}
        </Button>
    )
})