// import { Magnetic } from '@/components/core/magnetic';
import { Magnetic } from "../motion-primitives/magnetic";

export function MagneticBasic() {
  return (
    <Magnetic>
      <button
        type='button'
        className='rounded-md border border-zinc-100 bg-transparent px-4 py-2 text-sm text-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600 md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg'
      >
        <span>Submit</span>
      </button>
    </Magnetic>
  );
}
