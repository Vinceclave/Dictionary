import { FaPlay } from 'react-icons/fa'
import { useRef } from 'react';

const Heading = ({audioUrl, word, phonetic}) => {
    const ref = useRef();

    const playAudio = () => {
        ref.current.play();
    };

  return (
      <div className="flex flex-row justify-between my-5">
          <h3 className="font-bold text-3xl font-serif">
            {word}
            <span className="block font-normal text-sm text-indigo-600">
              {phonetic}
              </span>
          </h3>
                <button onClick={playAudio} className="flex justify-center items-center bg-indigo-300  h-12 w-12 rounded-full">
                    <FaPlay size={14} />
                </button>
            <audio className="hidden" ref={ref} src={audioUrl}></audio>
        </div>
  )
}

export default Heading;
