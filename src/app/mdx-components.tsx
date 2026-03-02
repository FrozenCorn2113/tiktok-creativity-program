import type { MDXComponents } from 'mdx/types'
import CalloutBox from '@/components/CalloutBox'
import ComparisonTable from '@/components/ComparisonTable'
import EmailSignupForm from '@/components/EmailSignupForm'
import SocialShareButtons from '@/components/SocialShareButtons'
import AffiliateLink from '@/components/AffiliateLink'
import VideoEmbed from '@/components/VideoEmbed'
import ProTipBox from '@/components/ProTipBox'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CalloutBox,
    ComparisonTable,
    EmailSignupForm,
    SocialShareButtons,
    AffiliateLink,
    VideoEmbed,
    ProTipBox,
    ...components,
  }
}
