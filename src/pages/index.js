// pages/index.js

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ClientLogoSlider from '@/components/ClientLogoSlider'
import OverviewCardsSection from '@/components/OverviewCardsSection'
import TwoColumnMetricsWithVideo from '@/components/TwoColumnMetricsWithVideo'
import FeaturedCaseStudiesSection from '@/components/FeaturedCaseStudiesSection'
import TwoRowMarquee from '@/components/TwoRowMarquee'
import TestimonialSection from '@/components/TestimonialSection'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />      
      <OverviewCardsSection />
      <ClientLogoSlider />
      <TwoColumnMetricsWithVideo />
      <FeaturedCaseStudiesSection />
      <TwoRowMarquee />
      <TestimonialSection />
      <BlogCard />
      <CTASection />
      <Footer />
    </>
  )
}
