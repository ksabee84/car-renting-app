import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const EditableTable = ({ rows, edit, deleteElement } ) => 
    (
        <div style={ { height: 500, width: '100%' }}>
            <DataGrid rows={rows} columns={columns(deleteElement)} onCellEditCommit={edit}
                />
        </div>
    );

    const columns = (deleteElement) => {
        return [
            { field: 'id', headerName: 'Id', width: 50, editable: false },
            { field: 'carName', headerName: 'Car Model', width: 200, editable: true },
            { field: 'carBrandAndModel', headerName: 'Car Brand and Model', width: 300, editable: true },
            { field: 'modelYear', headerName: 'Model Year', type: 'number', width: 100, editable: true },
            { field: 'color', headerName: 'Color', width: 100, editable: true },
            { field: 'engine', headerName: 'Engine', width: 200, editable: true },
            { field: 'VIN', headerName: 'VIN', width: 180, editable: true },
            { field: 'isRented', headerName: 'Rented', type: 'boolean', width: 100, editable: true },
            { field: 'rentingPrice', headerName: 'Renting Price (€)', type: 'number', width: 100, editable: true },
            { field: 'imgUrl', headerName: 'Upload Image', width: 100, editable: true },
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
