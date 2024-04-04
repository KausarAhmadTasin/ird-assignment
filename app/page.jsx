"use client";
import Catagories from "@/components/Categoris/Categories";
import Duas from "@/components/Duas/Duas";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function Home() {
  const [duas, setDuas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [filteredSubCat, setFilteredSubCat] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [openDua, setOpenDua] = useState(null);
  const [filteredDua, setFilteredDua] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [duaList, setDuaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetchDua();
    fetchCatagory();
    fetchSubCatagory();
  }, []);

  // Fetch functions
  const fetchDua = async () => {
    try {
      const res = await fetch("https://ird-server-db11.onrender.com/api/dua");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setDuas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCatagory = async () => {
    try {
      const res = await fetch(
        "https://ird-server-db11.onrender.com/api/category"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSubCatagory = async () => {
    try {
      const res = await fetch(
        "https://ird-server-db11.onrender.com/api/sub_category"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setSubCat(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const isCategoryOpen = (categoryId) => {
    return openCategory === categoryId;
  };

  // Get Functions
  const getFilteredDua = (cat_id) => {
    flushSync(() => setFilteredDua([]));

    flushSync(() =>
      setFilteredDua(() => {
        return duas.filter((dua) => dua.cat_id === cat_id);
      })
    );

    if (openCategory === cat_id) {
      setOpenCategory(null);
    } else {
      setOpenCategory(cat_id);
    }
    flushSync(() =>
      setFilteredSubCat(() => {
        return subCat.filter((sc) => sc.cat_id === cat_id);
      })
    );
  };

  const getFilteredSubCat = (SubCatId) => {
    flushSync(() => setFilteredDua([]));

    flushSync(() =>
      setDuaList(() => {
        return duas.filter((dua) => dua.subcat_id === SubCatId);
      })
    );
    setOpenDua(!openDua);
  };

  const getFilteredDuaByName = (duaId) => {
    flushSync(() => setFilteredDua([]));
    flushSync(() =>
      setFilteredDua(() => {
        return duas.filter((dua) => dua.id === duaId);
      })
    );
  };

  // Search Query

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-2">
        <Catagories
          filteredSubCat={filteredSubCat}
          getFilteredDua={getFilteredDua}
          categories={categories}
          isCategoryOpen={isCategoryOpen}
          getFilteredSubCat={getFilteredSubCat}
          filteredDua={filteredDua}
          openDua={openDua}
          duaList={duaList}
          getFilteredDuaByName={getFilteredDuaByName}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          filteredCategories={filteredCategories}
        />

        <Duas
          duas={duas}
          filteredSubCat={filteredSubCat}
          filteredDua={filteredDua}
          isCopied={isCopied}
          handleCopy={handleCopy}
          openCategory={openCategory}
        />
      </div>
    </>
  );
}
