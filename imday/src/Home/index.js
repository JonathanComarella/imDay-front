import './styles.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Footbar from '../Footbar';
import Navbar from '../Navbar';

const Home = () => {
    const [solversDaysResponse, setsolversDaysResponse] = useState([]);
    useEffect(() => {
      axios.get('https://jonathan-imday.herokuapp.com/im-day').then(response => setsolversDaysResponse(response.data));
    }, []);
  
    return (
      <div>
         <Navbar />
        
        <div className='justify-content-center mt-3'>
          <table className='table table-hover tableEdit'>
            <thead className='table-dark text-center'>
              <tr>
                <th>Data</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {solversDaysResponse.map(solver =>
                <tr key={solver.date}>
                  <td>
                    {solver.date}
                  </td>
                  <td>
                  {solver.nameUser === 'Sem Resolvedor' && <AiOutlineWhatsApp color='green' size={22}/>}
                  {solver.nameUser !== 'Sem Resolvedor' && solver.nameUser}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  
        <Footbar />
      </div>
    );
}

export default Home;