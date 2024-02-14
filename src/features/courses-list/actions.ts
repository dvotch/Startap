"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";
import { CreateCourseListElement } from "./model/types";

export const createCourseAction = async (
  command: CreateCourseListElement,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
