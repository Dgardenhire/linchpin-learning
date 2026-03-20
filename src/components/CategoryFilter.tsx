"use client";

// =============================================================================
// LINCHPIN Learning — Category Filter Pills (Client Component)
// =============================================================================

import { useState } from "react";
import { type Course, type Category, CATEGORIES, ACCENT_COLORS } from "@/lib/data";
import CourseCard from "./CourseCard";

interface CategoryFilterProps {
  courses: Course[];
}

export default function CategoryFilter({ courses }: CategoryFilterProps) {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? courses
      : courses.filter((c) => c.category === active);

  // Count courses per category for the pill labels
  const counts: Record<string, number> = {};
  for (const c of courses) {
    counts[c.category] = (counts[c.category] || 0) + 1;
  }

  return (
    <>
      {/* Filter bar */}
      <div className="filter-bar">
        <div className="filter-scroll">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            const count = cat === "All" ? courses.length : (counts[cat] || 0);
            const accent = cat !== "All" ? ACCENT_COLORS[cat] : undefined;

            // Only show categories that have courses
            if (cat !== "All" && count === 0) return null;

            return (
              <button
                key={cat}
                className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
                onClick={() => setActive(cat)}
                style={
                  isActive && accent
                    ? ({ "--pill-accent": accent } as React.CSSProperties)
                    : undefined
                }
              >
                {cat}
                <span className="filter-pill-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="catalog-results">
        <span className="catalog-results-count">
          {filtered.length} {filtered.length === 1 ? "course" : "courses"}
        </span>
      </div>

      {/* Course grid */}
      <div className="course-grid">
        {filtered.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}
      </div>
    </>
  );
}
