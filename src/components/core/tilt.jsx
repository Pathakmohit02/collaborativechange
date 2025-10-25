import { Tilt } from "../motion-primitives/tilt";

export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-xs sm:max-w-sm md:max-w-md flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 w-full'
      >
        <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-40 sm:h-48 md:h-56 w-full object-cover'
        />
        <div className='p-2 sm:p-3 md:p-4'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50 text-base sm:text-lg md:text-xl'>
            Ghost in the Shell
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400 text-sm sm:text-base md:text-lg'>Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
  );
}
