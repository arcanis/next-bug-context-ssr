import {Context} from './Context';

export const Layout = ({children}) => {
    return (
        <Context.Provider value={42}>
            {children}
        </Context.Provider>
    );
};
