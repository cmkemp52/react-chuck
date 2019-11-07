import React from "react";
import {Container, Box} from "bloomer";

const wrapper = props =>{
    return (
        <Container>
            <Box>
                {props.children}
            </Box>
        </Container>
    )
}

export default wrapper;