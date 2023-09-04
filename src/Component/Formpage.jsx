import { Component } from "react";
import "./Formpage.css";
class Formpage extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Department: "",
      Rating: "",
      empData: [],
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const submitdataobj = {
      name: this.state.Name,
      department: this.state.Department,
      rating: this.state.Rating,
    };
    if (
      submitdataobj.name.length > 0 &&
      submitdataobj.department.length > 0 &&
      submitdataobj.rating.length > 0
    ) {
      this.state.empData.push(submitdataobj);
      this.setState({
        empData: this.state.empData,
        Name: " ",
        Department: " ",
        Rating: " ",
      });
      alert("successfully submited");
    } else {
      alert("Please fill the form !!!");
    }
  };
  render() {
    return (
      <>
        <h1 className="heading">Employee Feeback Form !!!</h1>
        <div className="form">
          <form>
            <label htmlFor="name">
              Name &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={this.state.Name}
              placeholder="Enter Your Name"
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <label htmlFor="department">Department :</label>
            <input
              type="text"
              id="department"
              name="Department"
              value={this.state.Department}
              placeholder="Enter Department Name"
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <label htmlFor="rating">
              Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <input
              type="number"
              id="rating"
              name="Rating"
              value={this.state.Rating}
              placeholder="Give Rating"
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <br />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
        <div className="parent-conatiner">
          {this.state.empData.map((e, i) => {
            return (
              <>
                <div key={i} className="box">
                  <p>
                    Name of student : {e.name}
                    || Department : {e.department} || Rating :{e.rating}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Formpage;
