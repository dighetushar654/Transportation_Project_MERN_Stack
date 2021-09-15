import React, { useState } from "react";
import axios from '../../axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",  
    no: "",
    city: "",
    vehicleType: "",
    rout: "",
    cost: "",
    status: ""
  });

  const { name, email, no, city, vehicleType, rout, cost, status } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.patch("/registerVehicle/updateVehicle", user);
    history.push("/VehicleHome");
  };
  return (
    
    <div className="container">
     
      <div className="w-75 mx-auto shadow p-5">
      
        <h2 className="text-center mb-4">Add A Vehicle</h2>
        <form onSubmit={e => onSubmit(e)}>

        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" 
        placeholder="name@example.com"
        name="name"
        value={name}
        onChange={e => onInputChange(e)}
        />
        <label for="floatingInput">Enter Name</label>
        </div>
        <div className="form-floating mb-3">
        <input type="email" class="form-control" id="floatingPassword" 
        placeholder="Password"
        name="email"
        value={email}
        onChange={e => onInputChange(e)}
        />
        <label for="floatingPassword">Enter Your E-mail Address</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" 
        placeholder="phone"
        name="no"
        value={no}
        onChange={e => onInputChange(e)}
        />
        <label for="floatingInput">Enter Your Phone Number</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" 
        placeholder="city"
        name="city"
        value={city}
        onChange={e => onInputChange(e)} 
        />
        <label for="floatingPassword">Enter Your City</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" 
        placeholder="type"
        name="vehicleType"
        value={vehicleType}
        onChange={e => onInputChange(e)} 
        />
        <label for="floatingPassword">Enter Your Veicle Type</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" 
        placeholder="rout"
        name="rout"
        value={rout}
        onChange={e => onInputChange(e)} 
        />
        <label for="floatingPassword">Enter Your Route</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" 
        placeholder="cost"
        name="cost"
        value={cost}
        onChange={e => onInputChange(e)} 
        />
        <label for="floatingPassword">Enter Your Cost</label>
        </div>
        <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" 
        placeholder="status"
        name="status"
        value={status}
        onChange={e => onInputChange(e)} 
        />
        <label for="floatingPassword">Enter Status (Available or not)</label>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-light" onClick= {onSubmit}>Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
