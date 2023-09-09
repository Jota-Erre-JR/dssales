import React from 'react';
import './App.css';
import Header from './components/header';
import Filter from './components/filter';

import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';
import SalesTable from './components/sales-table';
import SalesByDateComponent from './components/sales-by-date';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDateComponent />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[55, 25, 20]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
