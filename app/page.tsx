import type { Metadata } from "next";

import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { KeyStrengthsSection } from "@/components/home/key-strengths-section";
import { TechStackSection } from "@/components/home/tech-stack-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "문제 해결과 사용자 경험 개선 관점을 중심으로 구성한 프론트엔드 포트폴리오 홈 페이지입니다.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyStrengthsSection />
      <TechStackSection />
      <FeaturedProjectsSection />
    </>
  );
}
