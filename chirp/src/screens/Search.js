import React, { useContext } from 'react';
import { Context } from '../MainContent';
import CardUser from '../components/CardUser';
import '../css/Chats.css';
import pfpGatito from '../assets/pfp-gatito.png';
import { userList } from '../components/SnapshotConfig';

const Search = () => {
    const [selectedPanel, setSelectedPanel, searchResults, setSearchResults] = useContext(Context);

    const userResults = (results) => {
        if (results === '') {
            return ''; 
        } else {
            return userList.filter(card => 
                card.username.toLowerCase().includes(results.toLowerCase())
            );
        }
    };

    const displayResults = userResults(searchResults);

    return (
        <div className='search-container'>
            {searchResults === '' && (
                <div className='no-searches'>
                    <h4 className='label'>¡Busca a tus amigos!</h4>
                    <p className='label-sm'>No has realizado ninguna búsqueda.</p>
                </div>
            )}
            {displayResults.length === 0 && searchResults !== '' && (
                <div className='no-searches'>
                    <h4 className='label'>¡Intenta de nuevo!</h4>
                    <p className='label-sm'>No se encontraron resultados.</p>
                </div>
            )}
            {displayResults.length > 0 && displayResults.map((card) => (
                <CardUser
                    key={card.username}
                    type='resultados'
                    person={1}
                    pfpImg={[pfpGatito]}
                    user={card.user}
                    description={card.username}
                />
            ))}
        </div>
    );
};

export default Search;
