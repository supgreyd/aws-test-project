import { axiosProvider } from "@/api/network-provider";

export const cousrseService = Object.freeze({
  courses: async () => {
    const responce = await axiosProvider.get("/courses");
    return responce;
  },
  course: async (id) => {
    const responce = await axiosProvider.get(`/courses/${id}`);
    return responce;
  },
});
