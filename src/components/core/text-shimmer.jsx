// import { TextShimmer } from '@/components/core/text-shimmer';
import { TextShimmer } from "../motion-primitives/text-shimmer";

export function TextShimmerBasic() {
  return (
    <TextShimmer className='font-mono text-xs sm:text-sm md:text-base lg:text-lg' duration={1}>
      Generating code...
    </TextShimmer>
  );
}
