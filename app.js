// $(document).ready(function() {
//     alert( "ready!" );
// });


// listen for when someone types in an itme

// function 1, get the value of the item someone typed in and append it to the current list

// function 2, check items, to add the css class

// function 3, delete items
// Single state object
var state = {
    items: []
};

var addItem = function(state, item) {
    state.items.push(item);
};

var deleteItem = function(item){
  var stateItem = state.items.indexOf(item);
  console.log("indexRemoved: " + stateItem);
  state.items.splice(stateItem,1);
};

// Render functions
var renderList = function(state, element) {
    element.empty();
    var itemsHTML = state.items.map(function(item) {
        return "<li>" +
                "<span class='shopping-item'>" + item +"</span>" +
                "<div class='shopping-item-controls'>" +
                  "<button class='shopping-item-toggle'><span class='button-label'>check</span></button>" +
                  "<button class='shopping-item-delete'><span class='button-label'>delete</span></button></div>" +
                "</li>";

    });
    element.html(itemsHTML);
};

// var remove1 = function(){
//     $(this).parent().parent().remove();
// }

//toggle class
$(document).ready(function(){
  $(document).on("click", ".shopping-item-toggle", function(event){
    event.preventDefault();
    $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
    console.log("booyah");
  });

  $(document).on("click", ".shopping-item-delete",function(event){
    event.preventDefault();
    // $("li").remove();
    // $(this).parent().parent().remove();
    // console.log('booyah');
    var itemDeleted = $(this).parent().parent().find(".shopping-item").text();
    console.log(itemDeleted);
    deleteItem(itemDeleted);
    renderList(state, $('.shopping-list'));
  });

  // Event listeners
  $('.shopping-list-add').submit(function(event) {
      event.preventDefault();
      addItem(state, $('.shopping-list-add-input').val());
      $(".shopping-list-add-input").val(" ");
      renderList(state, $('.shopping-list'));
  });
});
