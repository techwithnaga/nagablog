import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBlogStore = create(
  persist(
    (set) => ({
      title: "",
      selectedCategories: [],
      mediaUrl: "",
      createBlog: (title, selectedCategories, mediaUrl) =>
        set(() => ({
          title: title,
          selectedCategories: selectedCategories,
          mediaUrl: mediaUrl,
        })),
    }),
    {
      name: "blog-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
