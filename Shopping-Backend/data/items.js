const fs = require("node:fs/promises");

async function getStoredItems() {
  const rawFileContent = await fs.readFile("items.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

async function getStoredProducts() {
  const rawFileContent = await fs.readFile("product.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile("items.json", JSON.stringify({ items: items || [] }));
}

function storeProducts(items) {
  return fs.writeFile("product.json", JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.getStoredProducts = getStoredProducts;
exports.storeItems = storeItems;
exports.storeProducts = storeProducts;
