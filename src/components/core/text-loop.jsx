import { TextLoop } from "../motion-primitives/text-loop";


export function TextLoopBasic() {
  return (
    <TextLoop className='font-mono text-sm sm:text-base md:text-lg lg:text-xl'>
      <span>How can I assist you today?</span>
      <span>Generate a logo</span>
      <span>Create a component</span>
      <span>Draw a diagram</span>
    </TextLoop>
  );
}
