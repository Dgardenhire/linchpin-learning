// =============================================================================
// LINCHPIN Learning — Course Card Component
// =============================================================================

import { type Course, formatPrice } from "@/lib/data";

// Lucide-style SVG icons (stroke: currentColor, stroke-width: 1.5, fill: none)
function BookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22.4 10.4-8.58 3.9a2 2 0 0 1-1.66 0l-8.58-3.9" />
      <path d="m22.4 14.4-8.58 3.9a2 2 0 0 1-1.66 0l-8.58-3.9" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const FORCE_LABELS: Record<string, { label: string; color: string }> = {
  STORY: { label: "STORY FORCE", color: "#dc2626" },
  SOURCE: { label: "SOURCE FORCE", color: "#16a34a" },
  SIGNAL: { label: "SIGNAL FORCE", color: "#c2a05b" },
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const force = course.subBrand ? FORCE_LABELS[course.subBrand] : null;

  return (
    <article
      className="course-card"
      style={
        {
          "--accent": course.accentColor,
          "--stagger": `${index * 60}ms`,
        } as React.CSSProperties
      }
    >
      {/* Accent stripe */}
      <div
        className="course-card-stripe"
        style={{ backgroundColor: course.accentColor }}
      />

      <div className="course-card-body">
        {/* Top row: category + price */}
        <div className="course-card-top">
          <span className="course-card-category">{course.category}</span>
          <span
            className="course-card-price"
            data-free={course.price === 0 ? "" : undefined}
          >
            {formatPrice(course.price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="course-card-title">{course.title}</h3>

        {/* Force badge */}
        {force && (
          <span
            className="course-card-badge"
            style={
              {
                "--badge-color": force.color,
              } as React.CSSProperties
            }
          >
            {force.label}
          </span>
        )}

        {/* Description */}
        <p className="course-card-description">{course.description}</p>

        {/* Meta row */}
        <div className="course-card-meta">
          <span className="course-card-meta-item">
            <UserIcon />
            {course.instructor}
          </span>
        </div>

        <div className="course-card-stats">
          <span className="course-card-stat">
            <LayersIcon />
            {course.modules} modules
          </span>
          <span className="course-card-stat">
            <BookIcon />
            {course.lessons} lessons
          </span>
        </div>
      </div>
    </article>
  );
}
