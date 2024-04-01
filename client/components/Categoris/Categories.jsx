import React from "react";
import Image from "next/image";

export default function Catagories({
  categories,
  getFilteredDua,
  getFilteredDuas, // Fixed typo in function name
}) {
  const handleCategoryClick = (categoryId) => {
    // Add your logic for handling category click here
    console.log("Category clicked:", categoryId);
  };

  return (
    <div className="bg-white w-80 ml-6 pt-0 rounded-2xl overflow-auto h-[52.8rem]">
      <p className="bg-green-500 text-white text-center font-semibold p-3 text-m rounded-t-lg sticky top-0 w-76">
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
                <h3 className="font-semibold text-base w-40 text-green-500">
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
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* {category?.map((c) => (
          <div
            onClick={() => getFilteredDua(c.cat_id)}
            style={{ margin: "5px", background: "red", width: "200px" }}
            key={c.id}
          >
            <p>{c.cat_name_en}</p>
            <p>{c.cat_id}</p>
          </div>
        ))} */
}

// "use client";
// import fetchCategories from "@/lib/fetchCategory";
// import fetchDua from "@/lib/fetchDua";
// import fetchSubCategories from "@/lib/fetchSubCategory";
// import { TbPointFilled } from "react-icons/tb";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import fetchSubCategoryData from "@/lib/fetchSubCategoryData";

// export default function Catagories({ filterSubCat, cat, getfilterdua }) {
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [duas, setDuas] = useState([]);
//   const [openCategory, setOpenCategory] = useState(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);
//   const [subCategoryData, setSubCategoryData] = useState(null);

//   return (
//     <div className="bg-white w-80 ml-6 pt-0 rounded-2xl overflow-auto h-[86vh]">
//       <p className="bg-green-500 text-white text-center font-semibold p-3 text-m rounded-t-lg sticky top-0 w-76">
//         Categories
//       </p>
//       <div className="p-3 ">
//         {categories.map((category) => (
//           <div className="mb-4" key={category.id}>
//             <div
//               onClick={() => {
//                 handleCategoryClick(category.id);
//                 getfilteredDuas(category.id);
//               }}
//               className="flex items-center gap-2 p-3 bg-gray-100 rounded-2xl mb-2 cursor-pointer"
//             >
//               <Image
//                 src={`https://i.ibb.co/Km5k3WD/4b123749b99b0322305c72c5d565ddf3.png`}
//                 alt=""
//                 width={50}
//                 height={50}
//                 className="p-2 rounded-lg bg-gray-300"
//               />
//               <div>
//                 <h3 className="font-medium text-m w-40 text-green-500">
//                   {category.cat_name_en}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Subcategory: {category.no_of_subcat}
//                 </p>
//               </div>
//               <div className="text-center text-gray-500 ">
//                 <p className="text-sm font-medium text-gray-700">
//                   {category.no_of_dua}
//                 </p>
//                 <p className="text-sm text-gray-500">Duas</p>
//               </div>
//             </div>
//             {isCategoryOpen(category.id) && (
//               <ul>
//                 {subCategories
//                   .filter((subCategory) => subCategory.cat_id === category.id)
//                   .map((subCategory) => (
//                     <div
//                       className="flex cursor-pointer"
//                       key={subCategory.id}
//                       onClick={() => handleSubCategoryClick(subCategory.id)}
//                     >
//                       <div className="font-sm mt-1 text-green-500">
//                         <TbPointFilled />
//                       </div>
//                       <li> {subCategory.subcat_name_en}</li>
//                     </div>
//                   ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
