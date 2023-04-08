import * as C from "../constants/constants";

export const getDynamicText = (location) => {
  const params = location.pathname;
  const id = params.split("/")[1];
  return params === "/" ? "메인페이지" : `위키페이지 ${id}번 강의`;
};

export const findCourseById = (courseLists, currentPageId) => {
  return courseLists.find(
    (courseItem) => courseItem.id === parseInt(currentPageId)
  );
};

export const getAllCategories = (courseLists) => {
  return [...new Set(courseLists.map((x) => x.category))];
};

export const addNewCourse = (courseLists, title, description, category) => {
  const newCourse = {
    id: courseLists.length + 1,
    title,
    description,
    category,
  };
  return [...courseLists, newCourse];
};

export const updateCourseList = (
  id,
  courseLists,
  editTitle,
  editDescription
) => {
  return courseLists.map((courseItem) => {
    if (courseItem.id === id) {
      return {
        ...courseItem,
        title: editTitle ?? courseItem.title,
        description: editDescription ?? courseItem.description,
      };
    }
    return courseItem;
  });
};

export const getCourseCategory = (courseLists, category, id) => {
  return courseLists.filter((x) => x.category === category && x.id !== id);
};

export const searchRelatedCourses = (title, courseLists) => {
  const relatedCourses = title.split(" ").map((wikiTitle) => {
    return courseLists
      .filter((course) => course.description.match(wikiTitle))
      .reduce((acc, cur) => acc.concat(cur), []);
  });

  const uniqueMatchCourse = [...new Set(relatedCourses.flat())]
    .filter((course) => course.title !== title)
    .sort((a, b) => a.id - b.id);

  return uniqueMatchCourse;
};

export const validateForm = (title, description, category) => {
  if (!title || !description || !category) throw new Error(C.FILL__ALL__FORM);
};
