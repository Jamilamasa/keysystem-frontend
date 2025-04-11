import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import sterling from '@/assets/heroPartners/sterling.png'
import crusadersterling from '@/assets/heroPartners/crusadersterling.png'
import NAFC from '@/assets/heroPartners/NAFC.png'
import nbf from '@/assets/heroPartners/nbf.png'
import militaryPension from '@/assets/heroPartners/militaryPension.png'
import stanbic from '@/assets/heroPartners/stanbic.png'
import bankMusa from '@/assets/heroPartners/bankmusa.png'
import bankIga from '@/assets/heroPartners/bankiga.png'
import lapo from '@/assets/heroPartners/lapo.png'

export function Partners() {
  return (
    <section className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden w-[100vw]">
      <InfiniteMovingCards
        elements={images}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const images = [
  {
    jsx: <img src={sterling} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={crusadersterling} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={NAFC} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={nbf} className="w-[188.44px] h-[75.06px]" />,
  },
  {
    jsx: <img src={militaryPension} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={stanbic} className="w-[188.44px] h-[75.06px]" />,
  },
  {
    jsx: <img src={bankMusa} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={bankIga} className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={lapo} className="w-[188.44px] h-[75.06px]"/>,
  },

];
