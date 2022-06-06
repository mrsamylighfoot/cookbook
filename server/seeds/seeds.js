// const mongoose = require("mongoose");
// const Breakfast = require("./models/Breakfast");
// const Lunch = require("./models/Lunch");
// const Dinner = require("./models/Dinner");
// const User = require("./models/User");

// mongoose
//   .connect("mongodb://localhost:6969/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Mongo connection working!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const breakfastSeed = [
//   {
//     breakfastId: "167aov83k",
//     title: "Vegetable Frittata",
//     ingredients: `1/2 cup chopped onion
//         1/2 cup chopped green pepper
//         1/2 cup chopped sweet red pepper
//         1 garlic clove, minced
//         3 tablespoons olive oil, divided
//         2 medium red potatoes, cooked and cubed
//         1 small zucchini, cubed
//         6 large eggs
//         1/2 teaspoon salt
//         Pinch pepper`,
//     directions: `Preheat broiler. In a 10-in. cast-iron or ovenproof skillet, saute onion, peppers and garlic in 2 tablespoons of oil until the vegetables are tender. Remove vegetables with a slotted spoon; set aside.
//         In the same skillet over medium heat, lightly brown potatoes in remaining oil. Add vegetable mixture and zucchini; cook for 4 minutes.
//         In a bowl, beat eggs, salt and pepper; pour over vegetables. Cover and cook for 8-10 minutes or until eggs are nearly set. Broil 6 in. from the heat for 2 minutes or until eggs are set on top. Cut into wedges.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b-1.jpg?fit=700,1024",
//   },
//   {
//     breakfastId: "967hhcd320",
//     title: `Grandma's Biscuits`,
//     ingredients: `2 cups all-purpose flour
//         3 teaspoons baking powder
//         1 teaspoon salt
//         1/3 cup shortening
//         2/3 cup 2% milk
//         1 large egg, room temperature, lightly beaten`,
//     directions: `Preheat oven to 450°. In a large bowl, whisk flour, baking powder and salt. Cut in shortening until mixture resembles coarse crumbs. Add milk; stir just until moistened.
//         Turn onto a lightly floured surface; knead gently 8-10 times. Pat dough into a 10x4-in. rectangle. Cut rectangle lengthwise in half; cut crosswise to make 10 squares.
//         Place 1 in. apart on an ungreased baking sheet; brush tops with egg. Bake until golden brown, 8-10 minutes. Serve warm.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps184358_TH143195B07_23_2b_WEB-15.jpg?fit=700,1024",
//   },
//   {
//     breakfastId: "pau951bvey546",
//     title: "Brunch Hash & Egg Bake",
//     ingredients: `2 pounds Yukon Gold potatoes, peeled and cut into 3/4-inch pieces
//         1 pound bulk Italian sausage
//         1 large onion, finely chopped
//         1/4 cup olive oil 
//         1/4 teaspoon salt
//         1/4 teaspoon pepper
//         8 large eggs
//         1 cup crumbled feta cheese
//         Minced fresh parsley`,
//     directions: `Preheat oven to 375°. Place potatoes in a large saucepan; add water to cover. Bring to a boil. Reduce heat; cook, uncovered, until almost tender, 6-8 minutes. Drain.
//         Meanwhile, in an ovenproof 12-in. skillet, cook and crumble sausage with onion over medium heat until no longer pink, 6-8 minutes. Remove from pan with a slotted spoon; wipe skillet clean.
//         In same pan, heat oil over medium-high heat. Add potatoes; sprinkle with salt and pepper. Cook until golden brown, 10-15 minutes, turning occasionally. Stir in sausage mixture. Remove from heat.
//         With the back of a spoon, make 8 wells in potato mixture. Break 1 egg into each well. Sprinkle with cheese.
//         Bake until egg whites are set and yolks begin to thicken but are not hard, 12-15 minutes. Sprinkle with parsley.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps164398_TH153341B11_20_8b-2.jpg?fit=700,1024",
//   },
// ];

// const lunchSeed = [
//   {
//     lunchId: "745nsiuvb9",
//     title: `Grandma's Rice Dish`,
//     ingredients: `1 pound ground beef
//         1/3 cup chopped onion
//         1/2 cup chopped green pepper
//         2 cups cooked long grain rice
//         1 can (14-1/2 ounces) diced tomatoes, undrained
//         1 can (11 ounces) whole kernel corn, drained
//         1 can (2-1/4 ounces) sliced ripe olives, drained
//         6 bacon strips, cooked and crumbled
//         2 teaspoons chili powder
//         1 teaspoon garlic powder
//         1/2 teaspoon salt
//         1-1/2 cups shredded cheddar cheese, divided
//         1/2 cup dry bread crumbs
//         1 tablespoon butter, melted`,
//     directions: `Preheat oven to 350°. In a large skillet, cook beef, onion and green pepper over medium heat until meat is no longer pink, breaking it into crumbles; drain.
//         Stir in rice, tomatoes, corn, olives, bacon and seasonings; heat through. Stir in 1 cup cheese until melted.
//         Transfer to a greased 11x7-in. baking dish. Sprinkle with remaining cheese. Toss bread crumbs with butter; sprinkle over top.
//         Bake, uncovered, 15-20 minutes or until cheese is melted.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Rice-Dish_EXPS_GBBZ19_16478_C11_27_10b-2.jpg?fit=700,1024",
//   },
//   {
//     lunchId: "pla752uh7",
//     title: `Grandma's Tomato Soup`,
//     ingredients: `2 tablespoons butter
//         1 tablespoon all-purpose flour
//         2 cups tomato juice
//         1/2 cup water
//         2 tablespoons sugar
//         1/8 teaspoon salt
//         3/4 cup cooked wide egg noodles
//         Chopped fresh parsley, optional`,
//     directions: `In a saucepan over medium heat, melt butter. Add flour; stir to form a smooth paste. Gradually add tomato juice and water, stirring constantly; bring to a boil. Cook and stir until thickened, about 2 minutes. Add sugar and salt. Stir in egg noodles and heat through. If desired, sprinkle with parsley.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Tomato-Soup_EXPS_CF219_3984_B12_18_1b-5.jpg?fit=700,1024",
//   },
//   {
//     lunchId: "nua471ti98",
//     title: `Classic Beef Wellingtons`,
//     ingredients: `4 beef tenderloin steaks (6 ounces each)
//         3/4 teaspoon salt, divided
//         1/2 teaspoon pepper, divided
//         2 tablespoons olive oil, divided
//         1-3/4 cups sliced fresh mushrooms
//         1 medium onion, chopped
//         1 package (17.3 ounces) frozen puff pastry, thawed
//         1 large egg, lightly beaten`,
//     directions: `Sprinkle steaks with 1/2 teaspoon salt and 1/4 teaspoon pepper. In a large skillet, brown steaks in 1 tablespoon oil for 2-3 minutes on each side. Remove from skillet and refrigerate until chilled.
//         In the same skillet, saute mushrooms and onion in remaining oil until tender. Stir in remaining salt and pepper; cool to room temperature.
//         Preheat oven to 425°. On a lightly floured surface, roll each puff pastry sheet into a 14x9-1/2-in. rectangle. Cut into two 7-in. squares (use scraps to make decorative cutouts if desired). Place a steak in the center of each square; top with mushroom mixture. Lightly brush pastry edges with water. Bring opposite corners of pastry over steak; pinch seams to seal tightly.
//         Place in a greased 15x10x1-in. baking pan. Cut four small slits in top of pastry. Arrange cutouts over top if desired. Brush with egg.
//         Bake 25-30 minutes or until pastry is golden brown and meat reaches desired doneness (for medium-rare, a thermometer should read 135°; medium, 140°; medium-well, 145°).`,
//     image:
//       "https://images.unsplash.com/photo-1546964053-d018e345e490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
// ];

// const dinnerSeed = [
//   {
//     dinnerId: "397siub8",
//     title: `Chicken Cordon Bleu`,
//     ingredients: `4 boneless skinless chicken breast halves (8 ounces each)
//         2 tablespoons butter, softened
//         1 teaspoon dried thyme
//         4 thin slices fully cooked ham
//         4 thin slices Swiss cheese
//         8 bacon strips
//         2 large eggs
//         1/2 cup 2% milk
//         1/2 cup all-purpose flour
//         3/4 cup dry bread crumbs
//         1/2 teaspoon garlic powder
//         1 teaspoon dried oregano
//         1/4 cup shredded Parmesan cheese`,
//     directions: `Preheat oven to 350°.Flatten chicken breasts to 1/8-in. thickness; spread butter on the insides. Sprinkle with thyme. Top with a slice of ham and cheese; roll up tightly. Wrap each with 2 slices of bacon and secure with toothpicks.
//         In a small bowl, beat eggs and milk. Place flour in another bowl. Combine the bread crumbs, garlic powder, oregano and cheese. Dip each chicken breast into egg mixture; dip into flour to coat. Dip each again into egg mixture, then coat with crumbs.
//         Place on a greased baking sheet. Bake, uncovered for 40-45 minutes or until chicken juices run clear.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Cordon-Bleu_EXPS_THAM19_3658_C11_09_2b-1.jpg?fit=700,1024",
//   },
//   {
//     dinnerId: "9154pah",
//     title: `Crown Roast of Pork with Mushroom Dressing`,
//     ingredients: `1 pork loin crown roast (10 to 12 ribs, about 6 to 8 pounds)
//         1/2 teaspoon seasoned salt
//         1/2 cup diced celery
//         3 cups cubed day-old bread
//         1/4 teaspoon salt
//         1/4 teaspoon pepper
//         1/3 cup apricot preserves
//         1 cup whole fresh cranberries, optional
//         mushroom dressing:
//         1/4 cup butter, cubed
//         1 cup sliced fresh mushrooms`,
//     directions: `Preheat oven to 350°. Place roast, rib ends up, in a shallow roasting pan; sprinkle with seasoned salt. Cover rib ends with foil. Bake, uncovered, for 1-1/4 hours.
//         Meanwhile, melt butter over medium-high heat. Add mushrooms and celery; saute until tender. Stir in bread cubes, salt and pepper. Spoon around roast. Brush sides of roast with preserves. Bake until a thermometer inserted into meat between ribs reads 145°, 45-60 minutes. Remove foil; let meat stand 10 minutes before slicing.
//         If desired, thread cranberries on a 20-in. string or thread. Transfer roast to a serving platter. Loop cranberry string in and out of rib ends. Slice between ribs to serve.
//         `,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Crown-Roast-of-Pork-with-Mushroom-Stuffing_EXPS_THD16_7763_07B_22_2b-1.jpg?resize=700,700",
//   },
//   {
//     dinnerId: "73kflb73",
//     title: `Creamy Celery Beef Stroganoff`,
//     ingredients: `2 pounds beef stew meat, cut into 1-inch cubes
//         1 can (10-3/4 ounces) condensed cream of celery soup, undiluted
//         1 can (10-3/4 ounces) condensed cream of mushroom soup, undiluted
//         1 medium onion, chopped
//         1 jar (6 ounces) sliced mushrooms, drained
//         1 envelope onion soup mix
//         1/2 teaspoon pepper
//         1 cup sour cream
//         Hot cooked noodles`,
//     directions: `In a 3-qt. slow cooker, combine the first 7 ingredients. Cover and cook on low for 8 hours or until beef is tender. Stir in sour cream. Serve with noodles.`,
//     image:
//       "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Celery-Beef-Stroganoff_EXPS_HSCB16_33390_D07_14_5b-7.jpg?fit=700,1024",
//   },
// ];

// const GrandmaDB = async () => {
//   await Breakfast.deleteMany({});
//   await Breakfast.insertMany(breakfastSeed);
//   await Lunch.deleteMany({});
//   await Lunch.insertMany(lunchSeed);
//   await Dinner.deleteMany({});
//   await Dinner.insertMany(dinnerSeed);
// };
// GrandmaDB().then(() => {
//   mongoose.connection.close();
// });
