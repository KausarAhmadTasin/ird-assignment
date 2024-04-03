import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuBookmark, LuCopy } from "react-icons/lu";
import { BsExclamationOctagon } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import Alert from "../Alert/Alert";
import Audio from "../Audio/Audio";

export default function Duas({
  filteredDua,
  duas,
  handleCopy,
  isCopied,
  filteredSubCat,
}) {
  return (
    <div className="mx-2 w-[23rem] relative lg:right-0 right-14 m-3 lg:m-0 lg:top-0  lg:w-[38rem] lg:overflow-auto lg:h-[52.8rem] text-[#393939]">
      <ul>
        {filteredDua?.map((dua) => (
          <li className="mb-4 bg-white p-5 rounded-2xl mr-0 width" key={dua.id}>
            {/* Dua Section */}
            <div className="flex text-[#1FA45B] font-semibold text-lg items-center gap-3">
              <img src="https://i.ibb.co/8sQ2QSk/allah-1-Traced.png" alt="" />
              <p>
                {dua.id}. {dua.dua_name_en}
              </p>
            </div>
            <p className="mt-7">{dua.top_en}</p>
            {dua.dua_arabic && (
              <p className="text-2xl text-right leading-loose font-me-quran mt-4 mb-4 dua-arabic p-3">
                {dua.dua_arabic}
              </p>
            )}
            {dua.translation_en && (
              <p className="mb-3">
                <em>
                  <strong>Transliteration:</strong> {dua.translation_en}
                </em>
              </p>
            )}
            {dua.translation_en && (
              <p className="mb-4">
                <strong>Translation:</strong> {dua.translation_en}
              </p>
            )}
            <p className="mt-3">
              <span className="text-[#1FA45B] font-semibold">Reference: </span>
              <br />
              {dua.refference_en}
            </p>

            {/* Dua Audio */}
            <div>{dua.audio && <Audio audio={dua.audio} />}</div>

            {/* Icons */}
            <div className="flex justify-end text-xl text-gray-400 gap-4 mt-3">
              <div onClick={handleCopy} className="cursor-pointer" title="copy">
                <LuCopy />
              </div>
              <LuBookmark />
              <IoBulbOutline />
              <IoShareSocialOutline />
              <BsExclamationOctagon />
            </div>
          </li>
        ))}

        {filteredDua.length === 0 &&
          duas
            ?.filter((dua) => dua.cat_id == 1)
            .map((dua) => (
              <li
                className="mb-4 bg-white p-5 rounded-2xl mr-0 width"
                key={dua.id}
              >
                <div className="flex text-green-500 font-semibold text-lg items-center gap-3">
                  <img
                    src="https://i.ibb.co/8sQ2QSk/allah-1-Traced.png"
                    alt=""
                  />
                  <p>
                    {dua.id}. {dua.dua_name_en}
                  </p>
                </div>
                <p className="mt-7">{dua.top_en}</p>
                {dua.dua_arabic && (
                  <p className="text-2xl text-right leading-loose font-me-quran mt-4 mb-4 dua-arabic p-3 ">
                    {dua.dua_arabic}
                  </p>
                )}
                {dua.translation_en && (
                  <p className="mb-3">
                    <em>
                      <strong>Transliteration:</strong> {dua.translation_en}
                    </em>
                  </p>
                )}
                {dua.translation_en && (
                  <p className="mb-4">
                    <strong>Translation:</strong> {dua.translation_en}
                  </p>
                )}
                <p className="mt-3">
                  <span className="text-green-500 font-semibold">
                    Reference:{" "}
                  </span>
                  <br />
                  {dua.refference_en}
                </p>

                {/* Dua Audio */}
                <div>{dua.audio && <Audio audio={dua.audio} />}</div>

                {/* Icons */}
                <div className="flex justify-end text-xl text-gray-400 gap-4 mt-3">
                  <div
                    onClick={handleCopy}
                    className="cursor-pointer"
                    title="copy"
                  >
                    <LuCopy />
                  </div>
                  <div title="Bookmark">
                    {" "}
                    <LuBookmark />
                  </div>
                  <div title="Memorize">
                    <IoBulbOutline />
                  </div>
                  <div title="Share">
                    <IoShareSocialOutline />
                  </div>
                  <div title="Report">
                    <BsExclamationOctagon />
                  </div>
                </div>
              </li>
            ))}
      </ul>

      {isCopied && <Alert message="Copied" />}
    </div>
  );
}
