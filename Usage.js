// Usage

//Step 1; Create the button
const btnRemove = createButton({
    lable: "Remove",
    icon: "delete",
    variant: "error",
    onClick: (ev) => alert("You deleted!")
});

// Step 2: Add it to another element
existingContainer.appendChild(btnRemove)