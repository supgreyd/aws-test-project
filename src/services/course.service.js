import { axiosProvider } from "@/api/network-provider";

export const cousrseService = Object.freeze({
  courses: async (params) => {
    const responce = await axiosProvider.get("/courses", { params });
    return responce;
  },
  course: async (id) => {
    const responce = await axiosProvider.get(`/courses/${id}`);
    return responce;
  },
});
