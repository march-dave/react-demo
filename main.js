
var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Demo timez</h1>
        <p>Let count stuff</p>
      </div>
    )
  }
})

var Counter = React.createClass({

  componentDidMount: function() {
    // console.log('counter props: ', this.props)
  },

  render: function(){
    let {deleteCounter, addCount, minusCount, id, count} = this.props;

    return (
      <div>
        <button onClick={ () => addCount(id) }>+</button>
        <button onClick={ () => minusCount(id) }>-</button>
        <button onClick={ () => deleteCounter(id) }>Delete Me</button>
        <h3>Counter {id}: {count}</h3>
      </div>
    )
  }
})

var Root = React.createClass({

  getInitialState: function(){
    return {
      counters: [],
      lastID: 1
    }
  },

  addCount: function(id){
    console.log('add button clicked on counter id: ', id)
    this.setState({
      counters: this.state.counters.map(counter => {
        if (counter.id === id) {
          counter.count++
        }
        return counter;
      })
    })
  },

  minusCount: function(id){
    console.log('minus button clicked on counter id: ', id)
    this.setState({
      counters: this.state.counters.map(counter => {
        if (counter.id === id) {
          counter.count--
        }
        return counter;
      })
    })
  },

  addCounter: function(){
    console.log('Add a counter button clicked');

    let newCounter = {
      id: this.state.lastID,
      count: 0
    }

    this.setState({
      counters: this.state.counters.concat(newCounter),
      lastID: this.state.lastID + 1
    })

  },

  deleteCounter: function(id) {
    console.log('delete counter id:', id);
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== id)
    })
  },

  render: function(){

    console.log('Root render method called, state: ', this.state);

    let counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      deleteCounter: this.deleteCounter
    }

    let counters = this.state.counters.map(counter => {
      return <Counter key={counter.id} {...counter} {...counterProps} />
    })

    return (
      <div>
        <Welcome />

        <button onClick={this.addCounter}>Add Counter</button>

        {counters}

      </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
