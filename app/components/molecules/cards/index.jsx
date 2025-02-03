const Cards=()=>{
    const tilelength=5
    return (
        <div>
            <div className="flex gap-4 justify-center">
                {[...Array(tilelength)].map((_, index) => (
                    <div key={index} className="bg-[#f6f6f7] text-black drop-shadow-xl border-t w-48 border-red-500 vshadow-2xl border-opacity-[10%]">this is cards</div>
                ))}
                </div>
            <div className="  bg-[#f6f6f7] text-black drop-shadow-xl border-t w-48 border-red-500 vshadow-2xl border-opacity-[10%]">this is cards

            </div>
            this is cards</div>
    )
}
export default Cards;