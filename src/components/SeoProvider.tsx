'use client'
import { DefaultSeo } from "next-seo"
import defaultSEO from "@/seo/default"

export default function SeoProvider() {
  return <DefaultSeo {...defaultSEO} />
}


