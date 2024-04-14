const Pill = ({label}) => {
    return (
        <div className='w-fit rounded-lg px-6 m-1 flex justify-center items-center  text-c-complimentary border-2 border-c-secondary bg-c-secondary'>
            <p className=' font-bold text-lg'>{label}</p>
        </div>
    )
}


export default Pill