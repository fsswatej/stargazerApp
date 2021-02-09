import { 
    ApolloClient,
    InMemoryCache,
    createHttpLink,
 } from "@apollo/client";
 import { setContext } from '@apollo/client/link/context';
 import { urlSetup } from './environmentSetup';

 const baseURL = createHttpLink({
    uri: urlSetup().gitHubURL
});

const authURL = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Authorization: `bearer ${urlSetup().gitHubAccessToken}`,
        },
    };
});

const apolloServiceClient = new ApolloClient({
    link: authURL.concat(baseURL),
    cache: new InMemoryCache(),
});

export default apolloServiceClient;
