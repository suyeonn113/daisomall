import NewArrivalVideoCard from './NewArrivalVideoCard'

function NewArrivalCarousel({ contents }) {
  return (
    <div className="new-arrival-carousel">
      {contents.map((content) => (
        <NewArrivalVideoCard key={content.id} content={content} />
      ))}
    </div>
  )
}

export default NewArrivalCarousel
