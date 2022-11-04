import { DashHeader } from '@/components/DashHeader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import WebhookSlot from '@/components/WebhookSlot'
import { parseUser } from '@/utils/parse-user'
import Head from 'next/head'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'
import Settings from '@/components/Settings'

function Dashboard({ user }) {
  const [currentType, setType] = useState('')

  const updateType = (type) => {
    setType(type)
  }

  return (
    <div className="h-auto min-h-screen bg-slate-900">
      <Head>
        <title>Tachyon Technologies</title>
        <meta
          name="description"
          content="Tachyon | The monitors from the future to make the future."
        />
        <meta name="theme-color" content="#2563eb" />
      </Head>

      <main className="flex flex-col bg-slate-900">
        <DashHeader user={user}></DashHeader>
        <Sidebar updateType={updateType} currentType={currentType}></Sidebar>
        <div className="flex w-full items-center justify-center">
          {currentType && currentType != "Settings" && <WebhookSlot type={currentType}></WebhookSlot>}
          {currentType && currentType == "Settings" && <Settings/>}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async function (ctx) {
  const user = await parseUser(ctx)

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      user,
    },
  }
}

export default Dashboard
