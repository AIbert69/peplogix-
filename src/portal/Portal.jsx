import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Dashboard from './pages/Dashboard'
import SalesReps from './pages/SalesReps'
import Physicians from './pages/Physicians'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Payouts from './pages/Payouts'
import Placeholder from './pages/Placeholder'
import styles from './Portal.module.css'

export default function Portal() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <TopBar />
        <div className={styles.content}>
          <Routes>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users/sales-reps" element={<SalesReps />} />
            <Route path="users/physicians" element={<Physicians />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="inventory" element={<Placeholder title="Inventory" desc="Track peptide stock levels, reorder points, and batch expirations." icon="box" />} />
            <Route path="coupons" element={<Placeholder title="Discount Coupons" desc="Create and manage promotional codes for verified provider accounts." icon="tag" />} />
            <Route path="chats" element={<Placeholder title="Chats" desc="Internal messaging and provider communication hub." icon="chat" />} />
            <Route path="assets" element={<Placeholder title="Assets Library" desc="Manage marketing materials, product sheets, and protocol documents." icon="folder" />} />
            <Route path="faq" element={<Placeholder title="FAQ Manager" desc="Edit frequently asked questions for the provider portal and storefront." icon="question" />} />
            <Route path="settings" element={<Placeholder title="Account Settings" desc="Configure portal preferences, notifications, and admin access." icon="settings" />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
