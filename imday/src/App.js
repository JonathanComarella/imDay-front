import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Navbar from './Components/Navbar';

function App() {
  const [solversDaysResponse, setsolversDaysResponse] = useState([]);
  useEffect(() => {
    axios.get('https://jonathan-imday.herokuapp.com/im-day').then(response => setsolversDaysResponse(response.data));
  }, []);

  return (
    <div>
       <Navbar />
      
      <div className="justify-content-center mt-3">
        <table className="table table-hover tableEdit">
          <thead className="text-center">
            <tr>
              <th>Date</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {solversDaysResponse.map(solver =>
              <tr>
                <td>
                  {solver.date}
                </td>
                <td>
                {solver.nameUser === 'Sem Resolvedor' && 'Final de Semana'}
                {solver.nameUser != 'Sem Resolvedor' && solver.nameUser}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
