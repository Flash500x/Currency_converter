export const metadata = { title: 'Privacy Policy — Monochrome Photography' }

import PrivacyContent from '@/components/sections/PrivacyContent'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <PrivacyContent />
    </div>
  )
}