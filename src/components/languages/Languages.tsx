
import { use } from "react";
import type { Ilanguage } from "../../types/languageType";
import AvailableLanguage from "../AvailableLanguage";

interface LanguageProps {
  languagePromise: Promise<Ilanguage[]>;
}

const Languages = ({ languagePromise }: LanguageProps) => {
  const languages = use(languagePromise);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold">
          Explore The
          <span className="text-[#64748B]">
            Technologies
          </span>
        </h2>

        <p className="text-base font-normal text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <AvailableLanguage languages={languages} />
    </div>
  );
};

export default Languages;
