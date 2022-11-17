
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

export const relatorios = [
   {
      icon: <FiDollarSign />,
      amount: 'R$ 45.354,00',
      percentage: '20%',
      title: 'Receitas',
      iconColor: 'white',
      iconBg: '#00B0FF',
      pcColor: 'green-600',
      bgColor: "bg-sky-100"
   },
   {
      icon: <FiCreditCard />,
      amount: 'R$ 15.456,00',
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