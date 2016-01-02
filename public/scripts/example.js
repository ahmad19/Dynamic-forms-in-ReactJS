var FormContainer = React.createClass({
  nodes: function() {
    var trs = [];
    for(var i=0;i<this.props.rows;i++){
      trs.push(
        <tr key={i}>
          <td>
            {i+1}
          </td>
          <td>
            <input type="text" name='name' placeholder='Name' className="form-control"/>
          </td>
          <td>
            <input type="text" name='price' placeholder='Price' className="form-control"/>
          </td>
          <td>
            <input type="text" name='quantity' placeholder='Quantity' className="form-control"/>
          </td>
          <td>
            <button name="del" className='btn btn-danger glyphicon glyphicon-remove row-remove' onClick={this.props.removeTr.bind(null, i)}></button>
          </td>
        </tr>
      )
    }
    return trs;
  },
  render: function() {
    return (
      <tbody>
        {this.nodes()}
      </tbody>  
    )
  }
});

var TableContainer = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  increment: function() {
    this.setState({ counter: this.state.counter+1 });
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  removeTr: function(number) {
    this.setState({ counter: this.state.counter-1});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-sortable" id="tab_logic">
            <thead>
              <tr>
                <th className="text-center">S No</th>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Quantity</th>
                <th className="text-center another">Remove</th>
              </tr>
            </thead>
            <FormContainer rows={this.state.counter} removeTr={this.removeTr}/> 
          </table>
          <button name="add" onClick={this.increment} className='btn btn-success'>Add Field</button>
        </div>
      </form>
    )
  }
});
ReactDOM.render(<TableContainer />, document.getElementById('root'));