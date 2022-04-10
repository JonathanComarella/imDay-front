import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function App() {
  const [solversDaysResponse, setsolversDaysResponse] = useState();
  useEffect(() => {
    axios.get('http://localhost:8080/im-day').then(response => setsolversDaysResponse(response.data));
  }, []);

    return (
      <div>
        <p className="titulo-imday">Responsáveis pela resolução dos Incidentes</p>
          <div className="card">
              <DataTable value={solversDaysResponse} responsiveLayout="scroll">
                  <Column field="date" header="Data"></Column>
                  <Column field="nameUser" header="Name"></Column>
              </DataTable>
          </div>
      </div>
  );
}

export default App;
