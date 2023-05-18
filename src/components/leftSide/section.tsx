import { BiChevronRight } from 'react-icons/bi';
import { AiFillFileAdd } from 'react-icons/ai';

interface PropsTypes {
    section: string;
}
const Section: React.FC<PropsTypes> = ({ section }) => {
    return (
        <div className='relative'>
            <span className='cursor-pointer absolute top-2/4 -translate-y-2/4 left-1'>{<AiFillFileAdd />}</span>
            <div className="py-1 text-md mb-2 px-2 rounded hover:bg-[#0a0a0a] text-gray hover:text-white flex justify-between items-center">
                <div className='flex gap-2 items-center pl-4'>
                    <p> {section} </p>
                </div>
                <BiChevronRight size={22} />
            </div>
        </div>
    )
}

export default Section;