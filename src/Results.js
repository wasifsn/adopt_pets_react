import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div>
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((el) => (
          <Pet
            id={el.id}
            animal={el.animal}
            breed={el.breed}
            name={el.name}
            key={el.id}
            images={el.images}
            location={`${el.city}, ${el.state}`}
          />
        ))
      )}
    </div>
  );
}

export default Results;
