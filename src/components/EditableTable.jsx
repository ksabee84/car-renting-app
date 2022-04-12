import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const EditableTable = ( {rows, edit, deleteElement } ) => (
    <div style={ { height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns(deleteElement)} onCellEditCommit={edit}
            />
    </div>
);

    const columns = (deleteElement) => {
        return [
            { field: 'id', headerName: 'Id', headerAlign: 'left', width: 50, editable: false },
            { field: 'carName', headerName: 'Car Model', type: 'string', width: 200, editable: true },
            { field: 'carBrandAndModel', headerName: 'Car Brand and Model', type: 'number', width: 300, editable: true },
            { field: 'modelYear', headerName: 'Model Year', type: 'number', width: 100, editable: true },
            { field: 'color', headerName: 'Color', type: 'string', width: 100, editable: true },
            { field: 'engine', headerName: 'Engine', type: 'string', width: 200, editable: true },
            { field: 'VIN', headerName: 'VIN', type: 'string', width: 200, editable: true },
            { field: 'isRented', headerName: 'Rented', type: 'boolean', width: 100, editable: true },
            { field: 'rentingPrice', headerName: 'Renting Price (€)', type: 'number', width: 100, editable: true },
            { field: 'delete', headerName: 'Delete',
                renderCell: (params) => (
                <strong>
                        <Button
                            variant='contained'
                            color='error'
                            size='small'
                            style={{ marginLeft: 16 }}
                            id='deleteButton'
                            onClick={ (e) => deleteElement(e, params) }
                        >
                            Delete
                        </Button>
                    </strong>
                ),
            },
        ]  ;
    }
export default EditableTable;
