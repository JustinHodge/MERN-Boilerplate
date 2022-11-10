import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import Header from './header/header';
export const App = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Header />
            <div>Hello World</div>
        </div>
    );
};

export default App;
