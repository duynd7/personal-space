import { PromotionBanner } from "./components/main_page/PromotionBanner";
import { PromotionList } from "./components/main_page/PromotionList";

export default function Home() {

  return (
    <div className="h-fit min-h-screen">
        <PromotionBanner />
        <PromotionList />
    </div>
  );
}
