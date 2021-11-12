const { Post } = require("../models");

const postdata = [
  {
    title: "Gnocchi",
    description: "Home made Gnocchi, for you and your family to love.",
    ingredients: "Ingredients: 1-1/2 lbs. boiling potatoes (Yukon gold recommended), 1-1/2 cp. Flour, Extra flour as needed for rolling, Salt (to taste)",
    instructions: `
    Instructions: 1. Place the unpeeled potatoes in a large pot. Fill the pot with enough cold water to cover the potatoes by at least 2 inches. Bring to a simmer
    over medium-high heat. Reduce the heat to medium, partially cover the pot, and simmer the potatoes until they are completely tender and easily pierced with a fork, about 30 to 35 mins.
    2. Drain the potatoes and let them cool just enough that you can handle them. Gently peel the potatoes. Cut them in half crosswise and pass them through a ricer. You can mash them as ,
    you would normally do for mashed potatoes, but a ricer is more effective at creating a smooth mash. Let cool until almost at room temperature, at least 20 mins.
    3. Lightly flour your work surface. In a medium bowl, combine the flour, salt, and potatoes mash. Using your heads, combine all the ingredients until a dough is formed. Press the dough into
    the bowl until you have a unified mass.`,
    // 4. Place said mass onto your work surface. Knead gently until the flour is fully incorporated and the dough is soft and smooth, about 30 secs. to 1 min. WARNING: DO NOT OVERWORK YOUR DOUGH!
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
    title: "Cottage Pie",
    description: 'An old family pie recipe, great for gatherings',
    ingredients: "24 oz Yukon gold potatoes,6 oz carrot, 5 oz celery, 1 yellow onion,¼ oz thyme, 4 tbsp. sour cream, 2 tsp. garlic powder, 3 oz tomato paste, 20 oz Ground Beef, 2 tbsp. Flour, 8 tbsp of concentrated beef stock, 1 cp white cheddar cheese,salt to taste, black pepper to taste,1 tbsp. cooking oil, 3 tbsp. butter.",
    instructions: " 1. Heat broiler to high. Wash and dry produce. 2. Dice potatoes into ¼ inch pieces. 3. Strip the thyme leaves from their stems. 4. Trim, peel and halve carrots lengthwise. Slice crosswise into ¼ inch thick half-moons. 5. Finely dice celery. 6. Halve, peel, and finely chop onion. 7. Place potatoes in a medium pot with enough salted water to cover the potatoes by 2 inches. Bring the water to a boil and cook until tender, about 15-20 minutes. 8. Drain and return potatoes to pot. Add in the sour cream, butter, and 1 tsp. of the thyme leaves into the pot. Mash all the ingredients together until smooth and creamy, adding splashes of water as needed. Season generously with salt and pepper. Keep covered and off the stove until ready to server. 9. Heat a drizzle of oil in an oven proofed large sized pan over medium-high heat. ",
    category: "italian",
  },
  {
    title: "Nachos",
    description: "black bean and corn nachos",
    ingredients: `Heat half the oil in a large frypan over high heat. Add corn kernels and cook, stirring occasionally, for 6 minutes or until golden. Set aside until needed.
    2.Add remaining 1 tbs oil to pan. Add onion and capsicum, and cook, stirring occasionally, for 5 minutes or until softened. Add garlic, spices, coriander stalks, chipotle chillies and bay leaf, and cook, stirring occasionally, for 2 minutes or until fragrant. Add tomatoes and cook, breaking up with a wooden spoon, for 1 minute or until heated through. Stir through black beans and stock, bring to a simmer and cook, stirring occasionally, for 30 minutes or until thickened and reduced. Stir through corn kernels.
    3.Preheat the oven to 180°C.
    4.Spread corn chips over a baking tray and spoon over bean mixture. Sprinkle over cheese. Bake for 15 minutes or until cheese is golden and bubbling. Turn off oven, leaving tray in oven to keep nachos warm and melty until ready to serve.
    5.Meanwhile, toss avocado and lime juice in a bowl with 1/2 tsp salt flakes.`,
    instructions: "Remove nachos from oven and scatter over chilli. Spoon over creme fraiche, top with coriander leaves and serve with lime wedges, Tabasco, if using, and avocado mixture alongside.",
    category: "mexican"
    // post_content: `words`,
    // title: "Riccota Cheese",
    // post_content: `Ingredients: ½ gallon (2L) whole milk (can substitute with lactose free whole milk), 1/3 cp. (75mL) distilled white vinegar or lemon juice, ¼ to ½ tsp kosher salt. Instructions: 1. Set up a strainer over a bowl and line the strainer with cheesecloth (a total of four layers of cloth); set aside. 2. Heat milk in a large pot with a thermometer attached to the pot. Heat over medium heat, whisking often. Bring the milk up to 180 degrees F (83 degrees). 3. Remove the pot from the burner and whisk in vinegar or lemon juice and salt. Allow to sit undisturbed for at least 10 minutes. 4. Use a large spoon to scoop out curds from the whey and gently place in the cheesecloth covered strainer to drain the remaining whey from the curds.  Pour remaining curds and liquid. 5. Allow curds to drain for 5 to 20 minutes depending on the dryness and texture that you want. This cheese will be ready to use immediately, or you can refrigerate the cheese for up to 2 days.`,
    // category: "italian",
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  },
  {
    title: "Pork Dumplings",
    description: 'These tasty treats make a perfect appetizer or you can serve them as a main dish. For a main dish count on about 15 dumplings per person. Serve with hoisin sauce, hot Chinese-style mustard and toasted sesame seeds.',
    ingredients: `100 (3.5 inch square) wonton wrappers

    1 ¾ pounds ground pork
    
    1 tablespoon minced fresh ginger root
    
    4 cloves garlic, minced
    
    2 tablespoons thinly sliced green onion
    
    4 tablespoons soy sauce
    
    3 tablespoons sesame oil
    
    1 egg, beaten
    
    5 cups finely shredded Chinese cabbage`,
    instructions: `
    Step 1
In a large bowl, combine the pork, ginger, garlic, green onion, soy sauce, sesame oil, egg and cabbage. Stir until well mixed.

Step 2
Place 1 heaping teaspoon of pork filling onto each wonton skin. Moisten edges with water and fold edges over to form a triangle shape. Roll edges slightly to seal in filling. Set dumplings aside on a lightly floured surface until ready to cook.

Step 3
To Cook: Steam dumplings in a covered bamboo or metal steamer for about 15 to 20 minutes. Serve immediately.`,
    category: "chinese",
  },
  {
    title: 'Sweet and Sour Chicken ',
    description: `Pan fried chicken cubes served with a sweet and sour sauce.`,
    ingredients: `1 (8 ounce) can pineapple chunks, drained (juice reserved)

    ¼ cup cornstarch
    
    1 ¾ cups water, divided
    
    ¾ cup white sugar
    
    ½ cup distilled white vinegar
    
    2 drops orange food color
    
    8 skinless, boneless chicken breast halves - cut into 1 inch cubes
    
    2 ¼ cups self-rising flour
    
    2 tablespoons vegetable oil
    
    2 tablespoons cornstarch
    
    ½ teaspoon salt
    `,
    instructions: `In a saucepan, combine 1 1/2 cups water, sugar, vinegar, reserved pineapple juice, and orange food coloring. Heat to boiling. Turn off heat. Combine 1/4 cup cornstarch and 1/4 cup water; slowly stir into saucepan. Continue stirring until mixture thickens.

    Step 2
    Combine flour, 2 tablespoons oil, 2 tablespoons cornstarch, salt, white pepper, and egg. Add 1 1/2 cups water gradually to make a thick batter. Stir to blend thoroughly. Add chicken pieces, and stir until chicken is well coated.
    
    Step 3
    Heat oil in skillet or wok to 360 degrees F (180 degrees C). Fry chicken pieces in hot oil 10 minutes, or until golden. Remove chicken, and drain on paper towels.
    
    Step 4
    When ready to serve, layer green peppers, pineapple chunks, and cooked chicken pieces on a platter. Pour hot sweet and sour sauce over top.`,
    category: "chinese"
  }




];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
