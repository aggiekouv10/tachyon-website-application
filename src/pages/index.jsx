import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { SiteList, SiteLIST } from '@/components/SiteList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tachyon Technologies</title>
        <meta
          name="description"
          content="Tachyon | The monitors from the future to make the future."
        />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <Header />
      <main className="bg-slate-900">
        <Hero />
        <Pricing />
        <SiteList></SiteList>
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
