import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { TableV2 } from '../components/TableV2.jsx'
import BigButton from '../components/BigButton.jsx'

const invoiceRows = {
  headers: ['Invoice', 'Customer', 'Amount', 'Status'],
  dataRows: [
    { cells: ['INV-2401', 'Northwind LLC', '$4,200', 'Paid'] },
    { cells: ['INV-2402', 'Contoso', '$890', 'Paid'] },
    { cells: ['INV-2403', 'Fabrikam', '$120', 'Overdue'] },
  ],
}

export default function BillingInvoices() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="mb-2 text-2xl font-bold text-[#374151]">Billing & invoices</h1>
        <p className="mb-4 text-sm text-[#6B7280]">
          Finance flow — split charges by team or push totals to your ERP.
        </p>

        <p className="mb-4 text-sm">
          <Link to="/billing/aging" className="font-semibold text-[#2563EB] no-underline hover:underline">
            Open AR aging report →
          </Link>
        </p>

        <div className="mb-4 rounded-lg border border-[#E5E7EB] bg-white p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[15px] font-semibold text-[#374151]">Open invoices</span>
            <BigButton variant="primary" extraStyle={{ padding: '8px 14px' }} onClick={() => {}}>
              Record payment
            </BigButton>
          </div>
          <TableV2 headers={invoiceRows.headers} dataRows={invoiceRows.dataRows} />
        </div>

        <p className="text-sm text-[#9CA3AF]">
          Next:{' '}
          <Link to="/team" className="text-[#2563EB] no-underline hover:underline">
            assign cost centers by team
          </Link>
          {' · '}
          <Link to="/integrations" className="text-[#2563EB] no-underline hover:underline">
            connect QuickBooks
          </Link>
        </p>
      </div>
    </div>
  )
}
