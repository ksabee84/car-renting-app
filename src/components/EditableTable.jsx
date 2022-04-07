import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const EditableTable = ( {rows, edit} ) => (
    <div style={ { height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} onCellEditCommit={edit}
            />
    </div>
);

    const columns = [
        { field: 'id', headerName: 'Id', headerAlign: 'left', width: 80, editable: false },
        { field: 'carName', headerName: 'Car Model', type: 'string', width: 200, editable: true },
        { field: 'carBrandAndModel', headerName: 'Car Brand and Model', type: 'number', width: 300, editable: true },
        { field: 'modelYear', headerName: 'Model Year', type: 'number', width: 100, editable: true },
        { field: 'color', headerName: 'Color', type: 'string', width: 100, editable: true },
        { field: 'engine', headerName: 'Engine', type: 'string', width: 200, editable: true },
        { field: 'VIN', headerName: 'VIN', type: 'string', width: 200, editable: true },
        { field: 'isRented', headerName: 'Is it rented?', type: 'boolean', width: 150, editable: true },
        { field: 'rentingPrice', headerName: 'Renting price (€)', type: 'number', width: 150, editable: true },
    ];


export default EditableTable;