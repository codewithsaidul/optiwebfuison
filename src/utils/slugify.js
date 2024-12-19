// utils/slugify.js
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-alphanumeric characters
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+/, "") // Remove hyphen at the start
    .replace(/-+$/, ""); // Remove hyphen at the end
}

module.exports = slugify;
