export default function tourDates (arr){
    const items = arr.map((item, i) => {
      return (
        <div key={i} className="shadow-3">
            {item.date}
        </div>
        )
      })
    return (
        <div>
            {items}
        </div>
    )
}

