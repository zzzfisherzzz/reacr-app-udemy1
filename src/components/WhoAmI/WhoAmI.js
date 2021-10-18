// import { Component, Fragment } from "react";

// // function WhoAmI({ name, surname, link }) {
// // Function Component

// //   return (
// //     <div>
// //       <h1>
// //         My name is {name}, surname - {surname}
// //       </h1>
// //       {/* x<a href={link}>My profile</a> */}
// //       <br />
// //     </div>
// //   );
// // }

// // export default WhoAmI;

// // Class Component

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 28,
//       position: "",
//     };
//   }

//   nextYear = () => {
//     this.setState((state) => ({
//       years: state.years + 1,
//     }));
//   };

//   commitInputChanges = (e) => {
//     this.setState({
//       position: e.target.value,
//     });
//   };

//   render() {
//     const { name, surname } = this.props;
//     const { position, years } = this.state;
//     return (
//       <div>
//         <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>
//           My name is {name}, surname - {surname}, age {years}, position ={" "}
//           {position}
//         </h1>
//         <br />
//         <form>
//           <span>Введите должность:</span>
//           <input type="text" onChange={this.commitInputChanges} />
//         </form>
//       </div>
//     );
//   }
// }
// export default WhoAmI;

// function WhoAmI({ name, surname, link }) {
// Function Component

//   return (
//     <div>
//       <h1>
//         My name is {name}, surname - {surname}
//       </h1>
//       {/* x<a href={link}>My profile</a> */}
//       <br />
//     </div>
//   );
// }

// export default WhoAmI;

// Class Component

import { Component } from "react";
import { Wrapper, Title, Label, Form, TextField, Button } from "./WhoAmIStyled";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 28,
      position: "",
    };
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname } = this.props;
    const { position, years } = this.state;

    console.log(this);

    return (
      <Wrapper>
        {/* <button onClick={() => this.nextYear()}>{this.state.years}</button> */}
        <Button onClick={this.nextYear}>{this.state.years}</Button>
        <Title active>
          My name is {name}, surname - {surname}, age {years}, position ={" "}
          {position}
        </Title>
        <Form>
          <Label>Введите должность: </Label>
          <TextField
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </Form>

        
      </Wrapper>
    );
  }
}
export default WhoAmI;
