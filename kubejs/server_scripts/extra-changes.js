ServerEvents.recipes((event) => {
  event.recipes.create.crushing(
    ["createbb:white_phosphorus", CreateItem.of("createbb:white_phosphorus", 0.75)], "dndecor:weathered_limestone"
  );
})
