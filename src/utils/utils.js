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
