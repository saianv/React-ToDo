var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

handleToggle: function(){
  this.props.onToggle(this.props.id);
},

renderCompleteCheckBox: function(){
  var {completed, id, text, createdAt, completedAt} = this.props;
  var todoClassName = completed ? "todo todo-completed" : "todo";
  var renderDate = ()=>{
    var message = completed ? "Completed: " : "Created: ";
    var timestamp = completed ? completedAt : createdAt;
    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
  }
    return (
      <div className={todoClassName}>
        <div>
          <input type="checkbox" checked={completed} onChange={this.handleToggle}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext" id="date">{renderDate()}</p>
        </div>

      </div>
    )
},

render: function(){
  return(
    <div>
      {this.renderCompleteCheckBox()}
    </div>
  )
}

});

module.exports = Todo;
