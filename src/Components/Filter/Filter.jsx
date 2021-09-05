import React from "react";

export const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </label>
  );
};

// import React, { Component } from "react";

// export class Filter extends Component {
//   state = {
//     filter: "",
//   };

//   filterContact = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//     setTimeout(() => {
//       this.props.onfilter(this.state.filter);
//     });
//   };

//   render() {
//     return (
//       <label>
//         Find contacts by name
//         <input
//           type="text"
//           value={this.state.filter}
//           onChange={this.filterContact}
//         />
//       </label>
//     );
//   }
// }
