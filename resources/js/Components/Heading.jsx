export const Heading = ({className, title}) => {
    return (
        <h1 className={`text-6xl md:text-7xl mb-14 mt-10 pb-3 text-center bg-clip-text text-transparent border-none bg-gradient-to-r from-gray-100 to-gray-400 font-extrabold ` + className}>
            {title}
        </h1>
    )
}
