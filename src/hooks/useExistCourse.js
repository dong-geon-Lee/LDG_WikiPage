import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findCourseById } from "../utils/utils";

const useExistCourse = (courseLists, id) => {
  const existCourse = findCourseById(courseLists, id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!existCourse) navigate("/");
  }, [existCourse, navigate]);
};

export default useExistCourse;
