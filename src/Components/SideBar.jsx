import { v4 as uuidv4 } from 'uuid';
import Elements from './Elements';

const SideBar = ({ dragable, binnedItems }) => {

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl text-center">
            <h2
                className="mb-8 font-bold uppercase md:text-xl text-stone-200 font-sans">
                Components
            </h2>
            <ul className='flex flex-col gap-2'>
                {
                    dragable.map((item) =>
                        <Elements
                            key={uuidv4()}
                            item={item}
                            binnedItems={binnedItems}
                        />)
                }
            </ul>
        </aside>
    )
}

export default SideBar
