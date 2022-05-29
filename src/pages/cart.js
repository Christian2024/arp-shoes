import React from 'react'
import AdminLayout from '../components/AdminLayout';

export default function Cart() {
  return (
<h1>Cart</h1>  )
}
  Cart.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};