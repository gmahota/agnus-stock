
const Avatars = ({items}) => {
  return (
    <div className="flex flex-row items-center justify-start">
      {items.map((item, j) => (
        <img
          key={j}
          src={item}
          alt="media"
          className={`h-8 w-8 ring rounded-full -ml-3`}
        />
      ))}
    </div>
  )
}

export default Avatars
