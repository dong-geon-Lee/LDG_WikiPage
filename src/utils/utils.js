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
