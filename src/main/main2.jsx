
import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products2 from '../products2.json';

class main2 extends React.Component {

    render() {
        return (
            <Grid
                style={{ height: '400px' }}
                data={[ ...products2 ]}
            >
                <Column field="folio" title="Folio" width="40px"/>
                <Column field="fecha" title="Fecha" width="120px"/>
                <Column field="status" title="Status" width="120px"/>
                <Column field="responsable" title="Responsable" width="120px"/>
                <Column field="proyecto" title="Proyecto" width="120px" />
                <Column field="ubicacion" title="Ubicacion" width="120px"/>
            </Grid>
        );
    }
}

export default main2



