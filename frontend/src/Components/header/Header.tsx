import { SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box w='100vw'>
            <IconButton
                onClick={toggleColorMode}
                aria-label='Toggle dark-mode'
                icon={<SunIcon />}
            />
        </Box>
    );
};

export default Header;
