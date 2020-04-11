import React from 'react';
import AppolloClient from 'apollo-boost';
import PokemonsContainer from './containers/PokemonsContainer'

export function App() {

    const client = new ApolloClient({
        uri: 'https://graphql-pokemon.now.sh'
    });

    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer />
            </main>
        </ApolloProvider>
    )
}