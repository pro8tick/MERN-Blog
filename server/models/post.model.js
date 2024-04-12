import mongoose from "mongoose";
import Category from "./category.model.js";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    category: {
      type: String,
      default: "uncategorized",
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

postSchema.pre("save", async function (next) {
  const categoryExists = await Category.exists({ label: this.category });

  if (!categoryExists) {
    // Create new category and save to Category model
    const newCategory = new Category({
      label: this.category,
      value: this.category
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, ""), // Convert to lowercase and replace spaces with hyphens
    });

    await newCategory.save();
  }

  next();
});

postSchema.post("save", async function (doc, next) {
  try {
    // Check if the subtitle already exists
    if (!doc.subtitle) {
      // Generate subtitle by taking a part of the content as preview
      const maxLength = 100; // Maximum length for the preview
      const contentWithoutTags = doc.content.replace(/<[^>]+>/g, "");
      let preview = contentWithoutTags;

      if (preview.length > maxLength) {
        preview = preview.substring(0, maxLength).trim() + "...";
      }

      // Update the subtitle field
      doc.subtitle = preview;

      // Save the updated document
      await doc.save();
    }

    next();
  } catch (error) {
    console.error("Error generating subtitle:", error);
    next(error);
  }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
