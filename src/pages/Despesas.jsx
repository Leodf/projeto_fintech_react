import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components'
import { despesasGrid } from '../data/utils'

const Despesas = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category='Page' title="Despesas" />
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={despesasGrid.rowsData}
        columns={despesasGrid.columnsData}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
      
    </div>
  )
}

export default Despesas
