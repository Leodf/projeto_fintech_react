
import { Button } from '@mui/material';
import { FiHome, FiDollarSign, FiCreditCard, FiBarChart, FiUser, FiLogOut  } from 'react-icons/fi'

export const links = [
   {
    name: 'dashboard',
    icon: <FiHome />,
   },
   {
    name: 'receitas',
    icon: <FiDollarSign />,
   },
   {
    name: 'despesas',
    icon: <FiCreditCard />,
   },
   {
    name: 'investimentos',
    icon: <FiBarChart />,
   },
   {
    name: 'perfil',
    icon: <FiUser />,
   },
   {
    name: 'sair',
    icon: <FiLogOut />,
   },
]

export const receitasGrid = {
   columnsData: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'description', headerName: 'Descrição', minWidth: 150, flex: 1 },
      { field: 'category', headerName: 'Categoria', width: 130 },
      {
         field: 'date',
         headerName: 'Data',
         type: 'date',
         width: 100,
      },
      {
         field: 'value',
         headerName: 'Valor',
         width: 130,
         valueGetter:(params) => `R$ ${(params.row.value).toFixed(2).toString().replace('.', ',')}`
      },
      {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: 250,
      renderCell: () => {
        return (
          <div className='flex'>
            <div className='mr-3'>
               <Button
               variant="contained"
               onClick={() => {
                  alert('Editar')
               }}
               >
               Editar
               </Button>
            </div>
            <div>
               <Button
               variant="contained"
               onClick={() => {
                  alert('Deletar')
               }}
               color="error"
               >
               Deletar
               </Button>
            </div>
          </div>
        )
      }
    }
   ],
   rowsData: [
      { id: 1, description: 'Recebimento Aluguel', category: 'Aluguel', date: '2022-11-21', value: 1200 },
      { id: 2, description: 'Recebimento 13º', category: 'Salário', date: '2022-11-21', value: 3500 },
      { id: 3, description: 'Projeto Fintech', category: 'freelance', date: '2022-11-21', value: 1000 },
      { id: 4, description: 'Salário mensal', category: 'Salário',date: '2022-11-21', value: 6000.10 },
      { id: 5, description: 'Personal', category: 'freelance',date: '2022-11-21', value: 1250.85 },
      { id: 6, description: 'Recebimento Uber', category: 'Transporte',date: '2022-11-21', value: 500.65 },
      { id: 7, description: 'Ganhos com frete', category: 'Transporte',date: '2022-11-21', value: 400.25 },
      { id: 8, description: 'Enchimento de laje', category: 'Serviços',date: '2022-11-21', value: 150.55 },
      { id: 9, description: 'Venda de HQs', category: 'Items',date: '2022-11-21', value: 50 },
      { id: 10, description: 'Venda de Hinode', category: 'Items',date: '2022-11-21', value: 50.90 },
   ]
}

export const despesasGrid = {
   columnsData: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'description', headerName: 'Descrição', minWidth: 150, flex: 1 },
      { field: 'category', headerName: 'Categoria', width: 130 },
      {
         field: 'date',
         headerName: 'Data',
         type: 'date',
         width: 100,
      },
      {
         field: 'value',
         headerName: 'Valor',
         width: 130,
         valueGetter:(params) => `R$ ${(params.row.value).toFixed(2).toString().replace('.', ',')}`
      },
      {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: 250,
      renderCell: () => {
        return (
          <div className='flex'>
            <div className='mr-3'>
               <Button
               variant="contained"
               onClick={() => {
                  alert('Editar')
               }}
               >
               Editar
               </Button>
            </div>
            <div>
               <Button
               variant="contained"
               onClick={() => {
                  alert('Deletar')
               }}
               color="error"
               >
               Deletar
               </Button>
            </div>
          </div>
        )
      }
    }
   ],
   rowsData: [
      { id: 1, description: 'Despesa com Mercado', category: 'Comida', date: '2022-11-21', value: 500 },
      { id: 2, description: 'Restaurante de luxo', category: 'Comida', date: '2022-11-21', value: 1200 },
      { id: 3, description: 'Parcela do Carro', category: 'Transporte', date: '2022-11-21', value: 2100 },
      { id: 4, description: 'Balada top', category: 'Entretenimento',date: '2022-11-21', value: 250.10 },
      { id: 5, description: 'Viagem praia', category: 'Lazer',date: '2022-11-21', value: 1250.85 },
      { id: 6, description: 'Passagem de avião', category: 'Transporte',date: '2022-11-21', value: 652.65 },
      { id: 7, description: 'Combustível carro', category: 'Transporte',date: '2022-11-21', value: 100.25 },
      { id: 8, description: 'Diarista', category: 'Serviços',date: '2022-11-21', value: 150.55 },
      { id: 9, description: 'Cinema com a namorada', category: 'Entretenimento',date: '2022-11-21', value: 50 },
      { id: 10, description: 'Bola de futebol', category: 'Items',date: '2022-11-21', value: 19.90 },
   ]
}

export const relatorios = [
   {
      icon: <FiDollarSign />,
      amount: `R$ ${(receitasGrid.rowsData.reduce((total, valor) => total += valor.value, 0)).toFixed(2)}`,
      percentage: '20%',
      title: 'Receitas',
      iconColor: 'white',
      iconBg: '#00B0FF',
      pcColor: 'green-600',
      bgColor: "bg-sky-100"
   },
   {
      icon: <FiCreditCard />,
      amount: `R$ ${(despesasGrid.rowsData.reduce((total, valor) => total += valor.value, 0)).toFixed(2)}`,
      percentage: '-10%',
      title: 'Despesas',
      iconColor: 'white',
      iconBg: '#F50057',
      pcColor: 'red-600',
      bgColor: "bg-rose-100"
   },
   {
      icon: <FiBarChart />,
      amount: 'R$ 100.456,00',
      percentage: '53%',
      title: 'Investimentos',
      iconColor: 'white',
      iconBg: '#00BF57',
      pcColor: 'green-600',
      bgColor: "bg-green-100"
   }
]