import { HeroSection } from '@/components/living-school/HeroSection';
import { SchoolSection } from '@/components/living-school/SchoolSection';
import { LearningFormatsSection } from '@/components/living-school/LearningFormatsSection';
import { MethodSection } from '@/components/living-school/MethodSection';
import { TeachersSection } from '@/components/living-school/TeachersSection';
import { LessonExperienceSection } from '@/components/living-school/LessonExperienceSection';
import { PricingSection } from '@/components/living-school/PricingSection';
import { CultureSection } from '@/components/living-school/CultureSection';
import { ReviewsSection } from '@/components/living-school/ReviewsSection';
import { FaqSection } from '@/components/living-school/FaqSection';
import { LeadSection } from '@/components/living-school/LeadSection';
import { SchoolProvider } from '@/components/living-school/SchoolInteractions';
import { cx } from '@/components/living-school/styles';
export default function HomePage() {
  return (
    <div className={cx('scope')}>
      <SchoolProvider>
        <HeroSection />
        <SchoolSection />
        <LearningFormatsSection />
        <MethodSection />
        {/* Preserve the actual approved prototype order: team before lesson logistics. */}
        <TeachersSection />
        <LessonExperienceSection />
        <PricingSection />
        <CultureSection />
        <ReviewsSection />
        <FaqSection />
        <LeadSection />
      </SchoolProvider>
    </div>
  );
}
