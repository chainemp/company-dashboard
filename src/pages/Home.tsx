import {
  Header,
  Features,
  Testimonials,
  CaseStudies,
  Contact,
  ArticleModal,
} from "../components";
import { useState } from "react";
import { caseStudies } from "../data/caseStudies";

export function HomePage() {
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    image: string;
    description: string;
    content: string;
  } | null>(null);

  const heroImages = [
    "https://www.techmd.com/wp-content/uploads/2023/07/Home-Hero-01.4.jpg",
    "https://www.techmd.com/wp-content/uploads/2023/07/Home-Hero-02.png",
    "https://www.techmd.com/wp-content/uploads/2023/07/Home-Hero-03.png",
  ];

  return (
    <>
      <Header heroImages={heroImages} />
      <Features />
      <Testimonials />
      <CaseStudies studies={caseStudies} onSelect={setSelectedArticle} />
      <Contact />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
} 