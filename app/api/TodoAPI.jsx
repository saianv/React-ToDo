var $ = require('jquery');
var uuid = require('node-uuid');
var moment = require('moment');

module.exports = {

  filterTodos: function(todos, showCompleted, searchText){

    //filter by showCompleted
    var filteredTodos = todos.filter((todo)=>{
      return (!todo.completed || showCompleted);
    });

    //filter by searchText
    if (searchText.length ===0 || searchText===undefined){
      filteredTodos = filteredTodos;
    } else {
      filteredTodos = filteredTodos.filter((todo)=>{
        return todo.text.toLowerCase().indexOf(searchText) !== -1
      });
    }

    //Sort todos w not-completed at top
    filteredTodos = filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1
      } else if(a.completed && !b.completed){
        return 1
      } else {
        return 0
      }
    });

    return filteredTodos;

  },

  initialTodos: [
    {
      id: uuid(),
      text: "Mow lawn",
      completed: false,
      createdAt: moment().unix(),
      completedAt: moment().unix()
    },
    {
      id: uuid(),
      text: "Grocery shop",
      completed: true,
      createdAt: moment().unix(),
      completedAt: moment().unix()
    },
    {
      id: uuid(),
      text: "Clean up house",
      completed: false,
      createdAt: moment().unix(),
      completedAt: moment().unix()
    },
    {
      id: uuid(),
      text: "Take out trash",
      completed: false,
      createdAt: moment().unix(),
      completedAt: moment().unix()
    }
  ]
}
