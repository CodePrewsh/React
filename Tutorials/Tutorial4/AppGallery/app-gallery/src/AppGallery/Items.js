import React from 'react';

function Items({ data }) {
  return (
    <div className="row">
      {data.map((value) => {
        const { id, image, title, description } = value;
        return (
          <div className="col-sm-3 my-3" key={id}>
            <div className="card bg-light text-center">
              <img
                src={image}
                className="img-fluid"
                alt={title}
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
