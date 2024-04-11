function newItem() {
  // Add a new item to the list of items
  let li = $("<li></li>");
  let inputValue = $("#input").val();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    li.text(inputValue);
    $("ol").append(li);
  }
  li.on("dblclick", crossOut);
}

// Cross out an item from the list of items
function crossOut() {
  $(this).toggleClass("strike");
}
