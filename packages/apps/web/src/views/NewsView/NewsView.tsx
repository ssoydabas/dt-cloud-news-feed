import { FiltersSection, NewsSection } from "./components";

export default function NewsView() {
  return (
    <div className="grid grid-cols-5 py-4 border">
      <FiltersSection />
      <NewsSection />
    </div>
  );
}
