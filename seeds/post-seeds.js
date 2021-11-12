const { Post } = require("../models");

const postdata = [
  {
    title: "Gnocchi",
    description: "Home made",
    ingredients: "Ingredients: 1-1/2 lbs. boiling potatoes (Yukon gold recommended), 1-1/2 cp. Flour, Extra flour as needed for rolling, Salt (to taste)",
    instructions: `
    Instructions: 1. Place the unpeeled potatoes in a large pot. Fill the pot with enough cold water to cover the potatoes by at least 2 inches. Bring to a simmer
    over medium-high heat. Reduce the heat to medium, partially cover the pot, and simmer the potatoes until they are completely tender and easily pierced with a fork, about 30 to 35 mins.
    2. Drain the potatoes and let them cool just enough that you can handle them. Gently peel the potatoes. Cut them in half crosswise and pass them through a ricer. You can mash them as `,
    // you would normally do for mashed potatoes, but a ricer is more effective at creating a smooth mash. Let cool until almost at room temperature, at least 20 mins.
    // 3. Lightly flour your work surface. In a medium bowl, combine the flour, salt, and potatoes mash. Using your heads, combine all the ingredients until a dough is formed. Press the dough into
    // the bowl until you have a unified mass. 4. Place said mass onto your work surface. Knead gently until the flour is fully incorporated and the dough is soft and smooth, about 30 secs. to 1 min. WARNING: DO NOT OVERWORK YOUR DOUGH!
    // Doing so will create tough gnocchi, which are not pleasant. Set dough aside and place a clean kitchen towel over it to prevent it from drying out. 5. Remove any remaining bits 
    // of dough from your work surface. Re-flour the surface. Tear off a piece of dough about the size of a large lemon and put the towel back onto the remaining dough.
    // 6. With the palm of both hands, roll the dough piece on the floured surface into a rope about 3/4 inch in diameter.
    // 7. With a sharp knife or bench knife, cut the rope crosswise every 3/4 inch to make roughly 3/4 inch square gnocchi. Arrange gnocchi in a single layer on parchment-covered baking sheets, making sure they do not touch.
    // 8. This step is optional. If you want to get that traditional gnocchi look, all you need is a fork (though having a gnocchi press makes life so much easier). Place your
    // fork on your work surface such that the tips of the fork are touching the work surface. Gently slide each gnocchi square from the base of the fork prongs to the top.
    // 9. Repeat steps 5-8 until you have run out of dough. When all gnocchi have been placed on the parchment lined baking sheets, sprinkle some flour on top of them.
    // NOTE: Gnocchi should be used within 2 to 3 hours of making if you are not planning on refrigerating or freezing them. You can serve freshly made gnocchi right away or within a couple of hours, or you can freeze them
    // for later use. Put the gnocchi in the freezer while they’re still on the baking sheets and freeze until they are hard to the touch, at least one hour. Transfer them to a large zip-top bag or several smaller bags and 
    // freeze for up to two months. Cook frozen gnocchi in boiling water in two batches. Frozen gnocchi cause the temperature of the cooking water to drop, so they’ll fall apart before the water returns to a boil if there 
    // are too many in the pot. Don’t refrigerate fresh gnocchi for more than two or three hours, as they tend to ooze water and become soggy.`,
    category: "italian",
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  },
  {
    title: "red.",
    description: "Home made",
    ingredients:
      "Thawing a turkey usually takes about 24 hours for every 4 pounds. For a 15-pound turkey, youll want to put the turkey in the refrigerator 5 days before you want to smoke it. The extra day is for brining the bird, which is in the next step. Leave the turkey in the original packaging and place it on a platter or cooking sheet, so you dont have a big mess to clean up after it thaws.",
    instructions: "cook",
    category: "italian"
    // post_content: `words`,
    // title: "Riccota Cheese",
    // post_content: `Ingredients: ½ gallon (2L) whole milk (can substitute with lactose free whole milk), 1/3 cp. (75mL) distilled white vinegar or lemon juice, ¼ to ½ tsp kosher salt. Instructions: 1. Set up a strainer over a bowl and line the strainer with cheesecloth (a total of four layers of cloth); set aside. 2. Heat milk in a large pot with a thermometer attached to the pot. Heat over medium heat, whisking often. Bring the milk up to 180 degrees F (83 degrees). 3. Remove the pot from the burner and whisk in vinegar or lemon juice and salt. Allow to sit undisturbed for at least 10 minutes. 4. Use a large spoon to scoop out curds from the whey and gently place in the cheesecloth covered strainer to drain the remaining whey from the curds.  Pour remaining curds and liquid. 5. Allow curds to drain for 5 to 20 minutes depending on the dryness and texture that you want. This cheese will be ready to use immediately, or you can refrigerate the cheese for up to 2 days.`,
    // category: "italian",
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  },
  // {
  //   title: "Cottage Pie",
  //   post_content: `Ingredients: 24 oz Yukon gold potatoes, 6 oz carrot, 5 oz celery, 1 yellow onion, ¼ oz thyme, 4 tbsp. sour cream, 2 tsp. garlic powder, 3 oz tomato paste, 20 oz Ground Beef, 2 tbsp. Flour, 8 tbsp. of concentrated beef stock, 1 cp white cheddar cheese, salt to taste, black pepper to taste, 1 tbsp. cooking oil, 3 tbsp. butter. Instructions: 1. Heat broiler to high. Wash and dry produce. 2. Dice potatoes into ¼ inch pieces. 3. Strip the thyme leaves from their stems. 4. Trim, peel and halve carrots lengthwise. Slice crosswise into ¼ inch thick half-moons. 5. Finely dice celery. 6. Halve, peel, and finely chop onion. 7. Place potatoes in a medium pot with enough salted water to cover the potatoes by 2 inches. Bring the water to a boil and cook until tender, about 15-20 minutes. 8. Drain and return potatoes to pot. Add in the sour cream, butter, and 1 tsp. of the thyme leaves into the pot. Mash all the ingredients together until smooth and creamy, adding splashes of water as needed. Season generously with salt and pepper. Keep covered and off the stove until ready to server. 9. Heat a drizzle of oil in an oven proofed large sized pan over medium-high heat. 10. Add carrots into the pan, season with salt and pepper, and cook for about 2-3 mins. 11. Add celery, onion, and a large drizzle of oil to the pan. Season with salt and pepper. Cook, stirring, until veggies are just tender, about 5-7 minutes. 12. Stir in garlic powder and 2 tsp chopped thyme: cook until fragrant. 13. Add beef to the pan. Cook, breaking up meat into pieces, until browned and cooked through, about 4-6 minutes. 14. Add tomato paste and flour to the pan. Cook, stirring until thoroughly combined, about 1 minute. 15. Gradually pour ¾ cp. of water into the pan. Stir in stock concentrates and bring to a boil. Cook until mixture is very thick, about 1-2 minutes. Turn off the heat. Taste with salt and pepper. If your pan is not overproof, then transfer everything into a baking dish. 16. Top beef filling with an even layer of mashed potatoes, leaving a 1-inch border around edge of pan. Evenly sprinkle with the cheddar cheese. 17. Place your oven proofed pan into your oven and let it broil until the mashed potatoes are crisp on top or browned. Keep watch to ensure that it does not burn. Remove from oven and server directly from the pan.`,
  //   category: "irish",
  // },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
