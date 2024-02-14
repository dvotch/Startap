import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import {
  CourseListElement,
  CreateCourseListElement,
  DeleteCourseListElement,
} from "./model/types";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );
  createCourseElement = (comand: CreateCourseListElement): Promise<CourseListElement> => {
    return dbClient.course.create({
      data: comand,
    });
  };
  deleteCourseElement = (comand: DeleteCourseListElement) => {
    return dbClient.course.delete({
      where: { id: comand.id },
    });
  };
}

export const coursesRepository = new CoursesRepository();