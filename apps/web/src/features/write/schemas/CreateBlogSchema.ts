import * as Yup from "Yup";

export const CreateBlogSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().required("Thumbnail is required"),
});
