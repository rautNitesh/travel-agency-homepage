import React from "react";

const BookNowForm = () => {
  return (
    <form className="booknow" method="post" action="#">
      <div className="booknow-input">
        <select className="booknow-destination" type="">
          <option value="" disabled selected>
            Destination
          </option>
          <option value="lorem">Lorem</option>
          <option value="ipsum">Ipsum</option>
          <option value="dolor">Dolor </option>
          <option value="sit">Sit</option>
          <option value="amet">Amet</option>
        </select>
      </div>
      <div className="booknow-input">
        <select className="booknow-member" type="">
          <option value="" disabled selected>
            Member
          </option>
          <option value="mauris">Mauris</option>
          <option value="euismod">Euismod</option>
          <option value="tincidunt ">Tincidunt</option>
          <option value="lectus">Lectus</option>
          <option value="fringilla">Fringilla</option>
        </select>
      </div>
      <div className="booknow-input">
        <input className="booknow-date" type="date" />
      </div>
      <div className="booknow-input">
        <input className="booknow-submit" type="submit" value="Book Now" />
      </div>
    </form>
  );
};

export default BookNowForm;
