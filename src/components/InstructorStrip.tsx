// =============================================================================
// LINCHPIN Learning — Instructor Strip
// =============================================================================

import { instructors } from "@/lib/data";

export default function InstructorStrip() {
  return (
    <section className="instructor-strip">
      <span className="section-label">THE FACULTY</span>
      <h2 className="section-heading">
        Practitioners, Not Professors
      </h2>
      <p className="section-subtitle">
        Every instructor has done the work. They have led campaigns, secured
        grants, managed crises, passed legislation, and built organizations.
        Their courses teach what textbooks cannot.
      </p>
      <div className="instructor-grid">
        {instructors.map((inst) => (
          <div key={inst.slug} className="instructor-card">
            <div className="instructor-avatar">
              <span className="instructor-initials">{inst.initials}</span>
            </div>
            <span className="instructor-name">{inst.name}</span>
            <span className="instructor-count">
              {inst.courseCount} {inst.courseCount === 1 ? "course" : "courses"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
