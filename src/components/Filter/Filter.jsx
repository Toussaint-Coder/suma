import Button from "../Reusables/Button"
const Filter = () => {
  const Categories = [
    "Funny & Humor",
    "Sports & Fitness",
    "Music & Bands",
    "Music & Bands",
    "Geek & Gaming",
  ]

  return (
    <>
      <div className="flex items-center justify-between">
        <ul className="flex gap-2">
          {/* rember we have to learn more with this syntax */}
          {Categories.map((Category, index) => (
            <li>
              <Button
                className={`${index === 0 ? "bg-secondary text-white" : ""}`}
              >
                {Category}
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <Button>Filter</Button>
        </div>
      </div>
    </>
  )
}
export default Filter
