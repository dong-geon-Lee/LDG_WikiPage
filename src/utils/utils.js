export const showDynamicText = (location) => {
  const params = location.pathname;
  const id = params.split("/")[1];
  return params === "/" ? "메인페이지" : `위키페이지 ${id}번 강의`;
};

export const findModifyCourse = (courseLists, currentPageId) => {
  return courseLists.find(
    (courseItem) => courseItem.id === parseInt(currentPageId)
  );
};

export const findAllCategory = (courseLists) => {
  return [...new Set(courseLists.map((x) => x.category))];
};

export const createNewData = (courseLists, title, description, category) => {
  return [
    ...courseLists,
    { id: courseLists.length + 1, title, description, category },
  ];
};

export const editCourseData = (
  courseLists,
  id,
  title,
  editTitle,
  description,
  editDescription
) => {
  return courseLists.map((courseItem) => {
    if (courseItem.id === id) {
      return {
        ...courseItem,
        title: editTitle ? editTitle : title,
        description: editDescription ? editDescription : description,
      };
    }
    return courseItem;
  });
};

export const findOtherCategory = (courseLists, category, id) => {
  return courseLists.filter((x) => x.category === category && x.id !== id);
};

export const searchWikiKeywords = (title, courseLists) => {
  const keywordLists = title.split(" ").map((wikiTitle) => {
    return courseLists
      .filter((course) => course.description.match(wikiTitle))
      .reduce((acc, cur) => acc.concat(cur), []);
  });
  return [...new Set(keywordLists.flat())];
};
