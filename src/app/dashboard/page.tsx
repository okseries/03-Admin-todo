import { Widgetitem } from '@/components'
import React from 'react'

export default function Dashboardpage  ()  {
  return (
    <div className=' grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <Widgetitem/>
      <Widgetitem/>
      <Widgetitem/>
      <Widgetitem/>
      <Widgetitem/>
      <Widgetitem/>
      <Widgetitem/>
    </div>
  )
}

