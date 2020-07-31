import React, {useState} from 'react';
import TableOne from "./Table/TableOne";


const App = () => {

    const usersData = [
        { folio: 1, fecha: '12-07-2020', status: 'Disponible', responsable: 'Francisco', proyecto:'AT&T', ubicacion:'Ajusco' },
        { folio: 2, fecha: '15-07-2020', status: 'Disponible', responsable: 'Carlos', proyecto:'Elektra', ubicacion:'Tlalpan' },
        { folio: 3, fecha: '25-07-2020', status: 'Disponible', responsable: 'Jose', proyecto:'Liverpool', ubicacion:'Perisur' },
    ]

    const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <TableOne users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
