// import { InfiniteSlider } from '@/components/core/infinite-slider';
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src='/fb.jpeg'
        alt='Apple Music logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
      <img
        src='/linkendin.png'
        alt='Chrome logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
      <img
        src='/twitter.png'
        alt='Strava logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
      <img
        src='/whats.png'
        alt='Nintendo logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
      <img
        src='/vite.svg'
        alt='Jquery logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
      <img
        src='/twitter.png'
        alt='Prada logo'
        className='h-24 md:h-28 lg:h-32 w-auto max-w-full'
      />
    </InfiniteSlider>
  );
}
