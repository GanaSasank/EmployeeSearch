import React from "react";
import { useState } from "react";
import axios from "axios";

const data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

const ListView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
        style={inputStyle}
      />
      {filteredData.map((item) => (
        <div key={item.id} style={listItemStyle}>
          <div style={boxStyle}>
            <span style={idStyle}>{item.id}</span>
            <img src={item.avatar} alt="Avatar" style={avatarStyle} />
          </div>
          <div style={nameStyle}>{item.first_name}</div>
        </div>
      ))}
    </div>
  );
};

const listItemStyle = {
  marginBottom: "20px",
};

const boxStyle = {
  position: "relative",
  marginLeft: "25%",
  width: "250px",
  height: "250px",
  borderradius: "15px",
  borderwidth: "thick",
  borderstyle: "solid",
  bordercolor: "green",
};

const idStyle = {
  position: "absolute",
  top: "5px",
  right: "5px",
  padding: "8px",
  borderradius: "30px",
  color: "black",
};

const avatarStyle = {
  width: "250px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "15px",
};

const nameStyle = {
  marginTop: "5px",
  textAlign: "left",
  marginLeft: "32%",
};

const inputStyle = {
  marginBottom: "10px",
  padding: "5px",
  textAlign: "center",
  width: "235px",
  marginLeft: "25%",
};
export default ListView;
