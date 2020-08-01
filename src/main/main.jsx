
import React from 'react';
import {Grid, GridColumn as Column} from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css'
import products from '../products.json';

class main extends React.PureComponent {

    render() {
        return (
            <Grid
                style={{ height: '400px' }}
                data={[ ...products ]}
            >

                <Column field="folio" title="Folio" width="60px"/>
                <Column field="fecha" title="Fecha" width="120px"/>
                <Column field="status" title="Status" width="120px"/>
                <Column field="responsable" title="Responsable" width="120px"/>
                <Column field="proyecto" title="Proyecto" width="120px" />
                <Column field="ubicacion" title="Ubicacion" width="120px"/>
                <Column title={"Button"} cell={customButton}/>
            </Grid>
        );
    }
}

const customButton = (props) => {
    // console.log(props.dataItem.folio)
                return(
                    <td>
                        <button>Mas Info</button>
                    </td>
                )


}

export default main



