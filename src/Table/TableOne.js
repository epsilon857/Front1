import React from "react";

const TableOne = (props) => (

    <table id="grid">
        <thead>
        <tr>
            <th data-field="folio">Folio</th>
            <th data-field="fecha" >Fecha</th>
            <th data-field="status" >Status</th>
            <th data-field="responsable" >Responsable</th>
            <th data-field="proyecto" >Proyecto</th>
            <th data-field="ubicacion" >Ubicacion</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map((user) => (
                <tr key={user.folio}>
                    <td>{user.folio}</td>
                    <td>{user.fecha}</td>
                    <td>{user.status}</td>
                    <td>{user.responsable}</td>
                    <td>{user.proyecto}</td>
                    <td>{user.ubicacion}</td>
                    <td>
                        <button onClick = { () => <Redirect to= "/TableTwo" />} className="button muted-button"> Mostrar mas </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
)

// $("#grid").kendoGrid({
//     groupable: true,
//     scrollable: true,
//     sortable: true
//  });

export default TableOne