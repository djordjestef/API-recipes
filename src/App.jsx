import React, { useState, useEffect } from 'react';
import { BASE_URL } from './Constants/Constants';
import axios from 'axios';
import Card from './Components/Card/Card';
import Wrapper from './Components/Wrapper/Wrapper';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const [data, setData] = useState({});
  const [deletedId, setDeletedId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = event => {
    setSearchQuery(event.target.value)
  }

  useEffect(async () => {
    await axios.get(
      `${BASE_URL}/recipes?search=${searchQuery}&page=${currentPage}`,
    ).then(res => setData(res?.data));
  }, [currentPage, searchQuery, deletedId]);

  const deleteHandler = id => {
    axios.delete(`${BASE_URL}/recipes/${id}`)
      .then(() => setDeletedId(deletedId + 1))
  }

  return (
    <Wrapper>
      <h2>Recipes overview</h2>
      <input
        type="text"
        placeholder='filter'
        onChange={e => searchHandler(e)}
      />
      <ul>
        {data?.recipes?.map(item => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            onClick={() => deleteHandler(item.id)}
          />
        ))}
      </ul>
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
}

export default App;
