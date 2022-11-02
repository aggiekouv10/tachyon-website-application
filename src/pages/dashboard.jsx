import { DashHeader } from '@/components/DashHeader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import WebhookSlot from '@/components/WebhookSlot'
import { parseUser } from '@/utils/parse-user'
import Head from 'next/head'
import React from 'react'

function Dashboard({ user }) {
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
      <DashHeader user={user}></DashHeader>
      <main className="flex   bg-slate-900 px-2 pb-4 md:px-24">
        <div className="flex h-auto w-full flex-wrap items-center justify-center gap-4">
          <WebhookSlot type={'Shopify EU'}></WebhookSlot>{' '}
          <WebhookSlot type={'Shopify US'}></WebhookSlot>{' '}
          <WebhookSlot type={'Shopify DE'}></WebhookSlot>{' '}
          <WebhookSlot type={'Shopify NL'}></WebhookSlot>
          <WebhookSlot type={'Shopify SE'}></WebhookSlot>
          <WebhookSlot type={'Shopify PL'}></WebhookSlot>
          <WebhookSlot type={'Solebox'}></WebhookSlot>
          <WebhookSlot type={'Adidas EU'}></WebhookSlot>
          <WebhookSlot type={'Adidas US'}></WebhookSlot>
          <WebhookSlot type={'Yeezy,'}></WebhookSlot>
        </div>
      </main>
      <p className="mt-12 flex w-full items-center justify-center text-center font-bold text-blue-400">
        With Love from Tachyon
      </p>
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
