import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBlogStore = create(
  persist(
    (set) => ({
      title: "",
      tags: [],
      mediaUrl: "",
      createBlog: (title, tags, mediaUrl) =>
        set(() => ({ title: title, tags: tags, mediaUrl: mediaUrl })),
    }),
    {
      name: "blog-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
