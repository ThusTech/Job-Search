export default function Card({children, bg = "bg-indigo-100"}){
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}