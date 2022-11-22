import React from 'react'
import { receitasGrid } from '../data/utils'
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components'

const Receitas = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category='Page' title="Receitas" />
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={receitasGrid.rowsData}
        columns={receitasGrid.columnsData}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        // checkboxSelection
      />
      </div>

    </div>
  )
}


export default Receitas