import React from 'react';
import ListMeal from './ListMeal/index'; 
import SearchBox from '../components/SearchBox/index'

function Home() {
	return (
		<div className='page'>
			<SearchBox />
			<ListMeal />
		</div>
	);
}

export default Home;
