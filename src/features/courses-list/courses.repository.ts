import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { CourseListElement } from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );
  createCourseElement = () => {
    
  }
}
