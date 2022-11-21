import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { lancamentosGrid, lancamentoData } from '../data/utils'
import { Header } from '../components'

const Receitas = () => {
  return (
    <div className="m-2 md:10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category='Page' title="Receitas" />
      <GridComponent
        id='gridcomp'
        locale='pt-BR'
        dataSource={lancamentoData}
        allowPaging
        allowSorting
        pageSettings={{
          pageSizes: true,
          pageSize: 5,
        }}
      >
        <ColumnsDirective>
          {lancamentosGrid.map((item, index) => (
            <ColumnDirective key={index}{...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Receitas