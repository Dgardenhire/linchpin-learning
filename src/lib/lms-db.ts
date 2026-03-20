// Static LMS data extracted from SQLite prototype
// This serves the catalog in read-only mode for production
// Auth/enrollment/payments will be added with Supabase later

import lmsData from "./lms-data.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  subtitle: string | null;
  category: string;
  description: string | null;
  long_description: string | null;
  price_cents: number;
  thumbnail_url: string | null;
  instructor_name: string;
  instructor_bio: string | null;
  instructor_headshot_url: string | null;
  instructor_slug: string | null;
  instructor_title: string | null;
  is_signature: number;
  estimated_hours: number | null;
  sort_order: number;
  status: string;
  learning_outcomes: string | null;
  target_audience: string | null;
  transformation_statement: string | null;
  certificate_enabled: number;
  drip_enabled: number;
  installment_price_cents: number | null;
  installment_count: number | null;
}

interface Module {
  id: number;
  title: string;
  description: string | null;
  position: number;
  course_id: number;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  lesson_type: string;
  duration_minutes: number | null;
  position: number;
  is_free_preview: number;
  content_html: string | null;
}

interface Instructor {
  instructor_name: string;
  instructor_slug: string | null;
  instructor_title: string | null;
  instructor_headshot_url: string | null;
  instructor_bio: string | null;
  course_count: number;
}

const data = lmsData as {
  courses: Course[];
  modules: Record<string, Module[]>;
  instructors: Instructor[];
  site_info: Record<string, string>;
};

export function getCourses(): Course[] {
  return data.courses;
}

export function getCourse(id: number): Course | undefined {
  return data.courses.find((c) => c.id === id);
}

export function getCourseModules(courseId: number): Module[] {
  return data.modules[String(courseId)] || [];
}

export function getInstructors(): Instructor[] {
  return data.instructors;
}

export function getInstructorBySlug(slug: string): {
  instructor: Instructor;
  courses: Course[];
} | null {
  const instructor = data.instructors.find((i) => i.instructor_slug === slug);
  if (!instructor) return null;
  const courses = data.courses.filter((c) => c.instructor_slug === slug);
  return { instructor, courses };
}

export function getLesson(
  id: number
): (Lesson & { course_id: number; module_id: number }) | null {
  for (const courseId of Object.keys(data.modules)) {
    for (const mod of data.modules[courseId]) {
      const lesson = mod.lessons.find((l) => l.id === id);
      if (lesson)
        return { ...lesson, course_id: Number(courseId), module_id: mod.id };
    }
  }
  return null;
}

export function getSiteInfo(): Record<string, string> {
  return data.site_info;
}
