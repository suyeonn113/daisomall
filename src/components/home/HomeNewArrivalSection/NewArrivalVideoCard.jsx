function NewArrivalVideoCard({ content }) {
  return (
    <article className="new-arrival-card">
      <img src={content.image} alt="" />
      <strong>{content.title}</strong>
    </article>
  )
}

export default NewArrivalVideoCard
