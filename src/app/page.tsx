// =============================================================================
// LINCHPIN Learning — Catalog Page (The Library)
// =============================================================================

import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import InstructorStrip from "@/components/InstructorStrip";
import Footer from "@/components/Footer";
import { courses } from "@/lib/data";

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <CategoryFilter courses={courses} />

        {/* Divider */}
        <div className="catalog-divider">
          <div className="catalog-divider-line" />
        </div>

        <InstructorStrip />
      </main>
      <Footer />
    </div>
  );
}
