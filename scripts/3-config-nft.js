import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(process.env.EDITION_DROP);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Pizzariazinha",
        description: "This NFT will give you access to PizzariaDAO!",
        image: readFileSync("scripts/assets/pizzaria.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();