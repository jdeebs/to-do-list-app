function newItem() {
  // Add a new item to the list of items
  let li = $("<li></li>");
  let inputValue = $("#input").val();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    li.text(inputValue);
    $("#list").append(li);

    // Cross out an item from the list of items when double clicked
    li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });

    // Add the delete button "X"
    let crossOutButton = $("<button></button>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    // Delete an item from the list when the X button is clicked
    crossOutButton.on("click", function deleteListItem() {
      li.addClass("delete");
    });

    // Allow reordering of the items
    $("#list").sortable();
  }
}


