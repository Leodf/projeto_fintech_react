import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components'

const Investimentos = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category='Page' title="Investimentos" />
      {/* <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={}
          columns={}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
        // checkboxSelection
        />
      </div> */}

    </div>
  )
}

export default Investimentos