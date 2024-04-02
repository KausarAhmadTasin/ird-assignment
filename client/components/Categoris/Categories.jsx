import React from "react";
import Image from "next/image";

export default function Catagories({
  categories,
  getFilteredDua,
  filteredSubCat,
  isCategoryOpen,
  getFilteredSubCat,
}) {
  console.log(filteredSubCat);
  return (
    <div className="bg-white w-80 ml-3 pt-0 rounded-2xl overflow-auto h-[35.5rem]">
      <p className="bg-[#1FA45B] text-white text-center font-semibold p-3 text-m rounded-t-lg sticky top-0 w-76 z-10">
        Categories
      </p>
      <div className="p-3">
        {categories.map((category) => (
          <div className="mb-4" key={category.id}>
            <div
              onClick={() => {
                getFilteredDua(category.cat_id);
              }}
              className="flex items-center gap-2 p-3 bg-[#F9F9F9] rounded-[10px] mb-2 cursor-pointer"
            >
              <Image
                src="https://i.ibb.co/Km5k3WD/4b123749b99b0322305c72c5d565ddf3.png"
                alt=""
                width={50}
                height={50}
                className="p-2 rounded-lg bg-[#E8F0F5]"
              />
              <div>
                <h3 className="font-semibold text-base w-40 text-[#1FA45B]">
                  {category.cat_name_en}
                </h3>
                <p className="text-sm font-normal text-[#7E7E7E]">
                  Subcategory: {category.no_of_subcat}
                </p>
              </div>
              <div className="text-center text-gray-500">
                <p className="text-base font-semibold text-[#393939]">
                  {category.no_of_dua}
                </p>
                <p className="text-sm font-normal text-[#7E7E7E]">Duas</p>
              </div>
            </div>
            {isCategoryOpen(category.cat_id) && (
              <div>
                <ul className="green-list">
                  {filteredSubCat.map((singleSubCat) => (
                    <li
                      onClick={() => getFilteredSubCat(singleSubCat.subcat_id)}
                      className="text-[#373737] py-2 text-base green-dot cursor-pointer"
                      key={singleSubCat.id}
                    >
                      {singleSubCat.subcat_name_en}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
