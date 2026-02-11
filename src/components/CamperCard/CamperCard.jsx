const CamperCard = ({ camper }) => {
  return (
    <div>
      <h3>{camper.name}</h3>
      <p>{camper.price.toFixed(2)} €</p>

      <a
        href={`/catalog/${camper.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show More
      </a>
    </div>
  );
};

export default CamperCard;
