// @ts-check
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const meals = [
  {
    "_id": "m_001",
    "name": "Spicy Shrimp Tacos",
    "calories": 595,
    "protein": 23,
    "carbs": 74,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_002",
    "name": "Classic Tuna Salad",
    "calories": 437,
    "protein": 16,
    "carbs": 10,
    "fat": 37,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_003",
    "name": "Creamy Mushroom Pasta",
    "calories": 321,
    "protein": 15,
    "carbs": 36,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_004",
    "name": "Spicy Turkey Tacos",
    "calories": 373,
    "protein": 13,
    "carbs": 51,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_005",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 477,
    "protein": 41,
    "carbs": 31,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_006",
    "name": "Shrimp and Quinoa Bowl",
    "calories": 450,
    "protein": 45,
    "carbs": 45,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_007",
    "name": "Creamy Spinach Pasta",
    "calories": 488,
    "protein": 17,
    "carbs": 51,
    "fat": 24,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_008",
    "name": "Spicy Shrimp Tacos",
    "calories": 397,
    "protein": 18,
    "carbs": 52,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_009",
    "name": "Spicy Turkey Tacos",
    "calories": 528,
    "protein": 19,
    "carbs": 59,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_011",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 483,
    "protein": 21,
    "carbs": 57,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_013",
    "name": "Classic Tuna Salad",
    "calories": 327,
    "protein": 16,
    "carbs": 14,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_014",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 378,
    "protein": 22,
    "carbs": 32,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_015",
    "name": "Spicy Salmon Tacos",
    "calories": 437,
    "protein": 25,
    "carbs": 55,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_016",
    "name": "Shrimp and Noodle Bowl",
    "calories": 507,
    "protein": 39,
    "carbs": 63,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_017",
    "name": "Tuna and Potato Bowl",
    "calories": 538,
    "protein": 35,
    "carbs": 68,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_018",
    "name": "Creamy Mushroom Pasta",
    "calories": 510,
    "protein": 20,
    "carbs": 67,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_019",
    "name": "Shrimp and Noodle Bowl",
    "calories": 516,
    "protein": 44,
    "carbs": 49,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_020",
    "name": "Roasted Spinach with Quinoa",
    "calories": 559,
    "protein": 22,
    "carbs": 75,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_021",
    "name": "Classic Turkey Salad",
    "calories": 427,
    "protein": 24,
    "carbs": 13,
    "fat": 31,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_022",
    "name": "Classic Turkey Salad",
    "calories": 443,
    "protein": 16,
    "carbs": 7,
    "fat": 39,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_023",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 387,
    "protein": 16,
    "carbs": 47,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_024",
    "name": "Spicy Beef Tacos",
    "calories": 560,
    "protein": 21,
    "carbs": 65,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_025",
    "name": "Classic Shrimp Salad",
    "calories": 500,
    "protein": 20,
    "carbs": 15,
    "fat": 40,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_026",
    "name": "Creamy Mushroom Pasta",
    "calories": 514,
    "protein": 25,
    "carbs": 54,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_027",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 416,
    "protein": 18,
    "carbs": 59,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_028",
    "name": "Creamy Mushroom Pasta",
    "calories": 358,
    "protein": 13,
    "carbs": 45,
    "fat": 14,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_029",
    "name": "Classic Shrimp Salad",
    "calories": 383,
    "protein": 21,
    "carbs": 14,
    "fat": 27,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_030",
    "name": "Classic Beef Salad",
    "calories": 368,
    "protein": 24,
    "carbs": 14,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_031",
    "name": "Creamy Cauliflower Pasta",
    "calories": 532,
    "protein": 15,
    "carbs": 73,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_032",
    "name": "Creamy Eggplant Pasta",
    "calories": 304,
    "protein": 11,
    "carbs": 38,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_033",
    "name": "Spicy Chicken Tacos",
    "calories": 420,
    "protein": 11,
    "carbs": 58,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_034",
    "name": "Classic Chicken Salad",
    "calories": 300,
    "protein": 14,
    "carbs": 7,
    "fat": 24,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_035",
    "name": "Creamy Cauliflower Pasta",
    "calories": 384,
    "protein": 11,
    "carbs": 40,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_036",
    "name": "Creamy Zucchini Pasta",
    "calories": 441,
    "protein": 21,
    "carbs": 33,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_037",
    "name": "Salmon and Quinoa Bowl",
    "calories": 604,
    "protein": 33,
    "carbs": 64,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_038",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 436,
    "protein": 13,
    "carbs": 60,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_039",
    "name": "Tuna and Noodle Bowl",
    "calories": 521,
    "protein": 47,
    "carbs": 45,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_040",
    "name": "Shrimp and Noodle Bowl",
    "calories": 590,
    "protein": 51,
    "carbs": 47,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_041",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 489,
    "protein": 13,
    "carbs": 71,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_043",
    "name": "Creamy Cauliflower Pasta",
    "calories": 471,
    "protein": 24,
    "carbs": 51,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_044",
    "name": "Creamy Eggplant Pasta",
    "calories": 324,
    "protein": 10,
    "carbs": 35,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_046",
    "name": "Creamy Zucchini Pasta",
    "calories": 370,
    "protein": 17,
    "carbs": 35,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_047",
    "name": "Spicy Beef Tacos",
    "calories": 421,
    "protein": 18,
    "carbs": 40,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_048",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 419,
    "protein": 23,
    "carbs": 57,
    "fat": 11,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_049",
    "name": "Spicy Beef Tacos",
    "calories": 394,
    "protein": 20,
    "carbs": 38,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_050",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 509,
    "protein": 36,
    "carbs": 53,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_051",
    "name": "Classic Shrimp Salad",
    "calories": 308,
    "protein": 13,
    "carbs": 10,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_052",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 486,
    "protein": 49,
    "carbs": 50,
    "fat": 10,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_053",
    "name": "Creamy Spinach Pasta",
    "calories": 385,
    "protein": 10,
    "carbs": 57,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_054",
    "name": "Beef and Potato Bowl",
    "calories": 514,
    "protein": 49,
    "carbs": 30,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_055",
    "name": "Salmon and Potato Bowl",
    "calories": 569,
    "protein": 50,
    "carbs": 54,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_056",
    "name": "Spicy Shrimp Tacos",
    "calories": 382,
    "protein": 17,
    "carbs": 56,
    "fat": 10,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_057",
    "name": "Turkey and Noodle Bowl",
    "calories": 515,
    "protein": 32,
    "carbs": 72,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_058",
    "name": "Creamy Spinach Pasta",
    "calories": 521,
    "protein": 18,
    "carbs": 65,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_060",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 402,
    "protein": 17,
    "carbs": 34,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_061",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 521,
    "protein": 17,
    "carbs": 75,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_062",
    "name": "Classic Beef Salad",
    "calories": 269,
    "protein": 12,
    "carbs": 8,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_063",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 553,
    "protein": 31,
    "carbs": 60,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_064",
    "name": "Classic Chicken Salad",
    "calories": 476,
    "protein": 21,
    "carbs": 8,
    "fat": 40,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_066",
    "name": "Spicy Beef Tacos",
    "calories": 383,
    "protein": 10,
    "carbs": 52,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_067",
    "name": "Classic Chicken Salad",
    "calories": 365,
    "protein": 18,
    "carbs": 8,
    "fat": 29,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_068",
    "name": "Tuna and Rice Bowl",
    "calories": 555,
    "protein": 38,
    "carbs": 58,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_069",
    "name": "Roasted Spinach with Quinoa",
    "calories": 460,
    "protein": 15,
    "carbs": 55,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_070",
    "name": "Creamy Mushroom Pasta",
    "calories": 528,
    "protein": 12,
    "carbs": 66,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_071",
    "name": "Beef and Potato Bowl",
    "calories": 614,
    "protein": 46,
    "carbs": 58,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_072",
    "name": "Spicy Beef Tacos",
    "calories": 341,
    "protein": 16,
    "carbs": 31,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_073",
    "name": "Creamy Cauliflower Pasta",
    "calories": 466,
    "protein": 18,
    "carbs": 58,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_074",
    "name": "Creamy Zucchini Pasta",
    "calories": 464,
    "protein": 23,
    "carbs": 66,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_076",
    "name": "Salmon and Rice Bowl",
    "calories": 581,
    "protein": 36,
    "carbs": 71,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_077",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 477,
    "protein": 15,
    "carbs": 66,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_078",
    "name": "Classic Salmon Salad",
    "calories": 373,
    "protein": 20,
    "carbs": 8,
    "fat": 29,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_079",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 380,
    "protein": 25,
    "carbs": 43,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_080",
    "name": "Chicken and Rice Bowl",
    "calories": 578,
    "protein": 40,
    "carbs": 55,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_081",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 319,
    "protein": 19,
    "carbs": 36,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_082",
    "name": "Classic Beef Salad",
    "calories": 357,
    "protein": 22,
    "carbs": 11,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_083",
    "name": "Creamy Cauliflower Pasta",
    "calories": 404,
    "protein": 12,
    "carbs": 35,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_085",
    "name": "Tuna and Noodle Bowl",
    "calories": 507,
    "protein": 47,
    "carbs": 55,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_086",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 477,
    "protein": 19,
    "carbs": 53,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_087",
    "name": "Spicy Tuna Tacos",
    "calories": 347,
    "protein": 14,
    "carbs": 48,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_088",
    "name": "Classic Tuna Salad",
    "calories": 326,
    "protein": 25,
    "carbs": 7,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_089",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 345,
    "protein": 13,
    "carbs": 44,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_090",
    "name": "Beef and Quinoa Bowl",
    "calories": 446,
    "protein": 47,
    "carbs": 42,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_091",
    "name": "Classic Salmon Salad",
    "calories": 304,
    "protein": 18,
    "carbs": 13,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_092",
    "name": "Classic Turkey Salad",
    "calories": 388,
    "protein": 11,
    "carbs": 5,
    "fat": 36,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_093",
    "name": "Turkey and Potato Bowl",
    "calories": 479,
    "protein": 44,
    "carbs": 42,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_094",
    "name": "Turkey and Potato Bowl",
    "calories": 588,
    "protein": 34,
    "carbs": 59,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_095",
    "name": "Spicy Beef Tacos",
    "calories": 429,
    "protein": 12,
    "carbs": 57,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_096",
    "name": "Spicy Salmon Tacos",
    "calories": 258,
    "protein": 10,
    "carbs": 32,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_097",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 360,
    "protein": 21,
    "carbs": 33,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_098",
    "name": "Turkey and Potato Bowl",
    "calories": 520,
    "protein": 32,
    "carbs": 44,
    "fat": 24,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_099",
    "name": "Creamy Spinach Pasta",
    "calories": 363,
    "protein": 18,
    "carbs": 48,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_100",
    "name": "Spicy Salmon Tacos",
    "calories": 397,
    "protein": 23,
    "carbs": 47,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_101",
    "name": "Creamy Spinach Pasta",
    "calories": 463,
    "protein": 16,
    "carbs": 66,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_103",
    "name": "Classic Chicken Salad",
    "calories": 256,
    "protein": 12,
    "carbs": 7,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_104",
    "name": "Creamy Mushroom Pasta",
    "calories": 313,
    "protein": 10,
    "carbs": 30,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_105",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 511,
    "protein": 18,
    "carbs": 67,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_106",
    "name": "Creamy Zucchini Pasta",
    "calories": 380,
    "protein": 22,
    "carbs": 37,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_107",
    "name": "Classic Shrimp Salad",
    "calories": 405,
    "protein": 20,
    "carbs": 7,
    "fat": 33,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_108",
    "name": "Classic Turkey Salad",
    "calories": 340,
    "protein": 16,
    "carbs": 6,
    "fat": 28,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_109",
    "name": "Creamy Mushroom Pasta",
    "calories": 267,
    "protein": 12,
    "carbs": 30,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_110",
    "name": "Creamy Zucchini Pasta",
    "calories": 395,
    "protein": 21,
    "carbs": 35,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_111",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 576,
    "protein": 35,
    "carbs": 55,
    "fat": 24,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_112",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 399,
    "protein": 10,
    "carbs": 65,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_113",
    "name": "Classic Beef Salad",
    "calories": 400,
    "protein": 21,
    "carbs": 7,
    "fat": 32,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_114",
    "name": "Spicy Beef Tacos",
    "calories": 372,
    "protein": 21,
    "carbs": 45,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_115",
    "name": "Creamy Zucchini Pasta",
    "calories": 431,
    "protein": 12,
    "carbs": 71,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_116",
    "name": "Roasted Spinach with Quinoa",
    "calories": 499,
    "protein": 23,
    "carbs": 50,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_117",
    "name": "Spicy Tuna Tacos",
    "calories": 537,
    "protein": 18,
    "carbs": 69,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_118",
    "name": "Turkey and Potato Bowl",
    "calories": 529,
    "protein": 33,
    "carbs": 52,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_119",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 665,
    "protein": 51,
    "carbs": 59,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_120",
    "name": "Spicy Chicken Tacos",
    "calories": 441,
    "protein": 18,
    "carbs": 36,
    "fat": 25,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_121",
    "name": "Creamy Eggplant Pasta",
    "calories": 452,
    "protein": 24,
    "carbs": 62,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_122",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 520,
    "protein": 22,
    "carbs": 72,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_123",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 575,
    "protein": 25,
    "carbs": 67,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_124",
    "name": "Spicy Beef Tacos",
    "calories": 430,
    "protein": 21,
    "carbs": 55,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_126",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 438,
    "protein": 19,
    "carbs": 59,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_127",
    "name": "Classic Salmon Salad",
    "calories": 470,
    "protein": 12,
    "carbs": 11,
    "fat": 42,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_128",
    "name": "Shrimp and Potato Bowl",
    "calories": 522,
    "protein": 47,
    "carbs": 43,
    "fat": 18,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_129",
    "name": "Spicy Turkey Tacos",
    "calories": 444,
    "protein": 23,
    "carbs": 43,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_130",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 453,
    "protein": 23,
    "carbs": 61,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_131",
    "name": "Chicken and Potato Bowl",
    "calories": 430,
    "protein": 32,
    "carbs": 35,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_132",
    "name": "Creamy Zucchini Pasta",
    "calories": 503,
    "protein": 25,
    "carbs": 49,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_133",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 436,
    "protein": 16,
    "carbs": 48,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_134",
    "name": "Spicy Salmon Tacos",
    "calories": 395,
    "protein": 10,
    "carbs": 46,
    "fat": 19,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_135",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 459,
    "protein": 40,
    "carbs": 41,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_136",
    "name": "Spicy Turkey Tacos",
    "calories": 404,
    "protein": 22,
    "carbs": 34,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_137",
    "name": "Creamy Zucchini Pasta",
    "calories": 354,
    "protein": 25,
    "carbs": 41,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_138",
    "name": "Beef and Rice Bowl",
    "calories": 465,
    "protein": 39,
    "carbs": 30,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_139",
    "name": "Salmon and Sweet Potato Bowl",
    "calories": 534,
    "protein": 35,
    "carbs": 49,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_140",
    "name": "Spicy Beef Tacos",
    "calories": 550,
    "protein": 18,
    "carbs": 70,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_141",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 366,
    "protein": 14,
    "carbs": 37,
    "fat": 18,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_142",
    "name": "Creamy Cauliflower Pasta",
    "calories": 390,
    "protein": 13,
    "carbs": 44,
    "fat": 18,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_143",
    "name": "Creamy Zucchini Pasta",
    "calories": 553,
    "protein": 19,
    "carbs": 63,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_144",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 472,
    "protein": 17,
    "carbs": 74,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_145",
    "name": "Spicy Turkey Tacos",
    "calories": 397,
    "protein": 16,
    "carbs": 36,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_146",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 423,
    "protein": 23,
    "carbs": 58,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_147",
    "name": "Creamy Zucchini Pasta",
    "calories": 542,
    "protein": 24,
    "carbs": 62,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_148",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 466,
    "protein": 17,
    "carbs": 50,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_149",
    "name": "Salmon and Noodle Bowl",
    "calories": 571,
    "protein": 42,
    "carbs": 67,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_150",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 460,
    "protein": 20,
    "carbs": 41,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_151",
    "name": "Classic Salmon Salad",
    "calories": 343,
    "protein": 14,
    "carbs": 11,
    "fat": 27,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_152",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 367,
    "protein": 21,
    "carbs": 37,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_153",
    "name": "Classic Shrimp Salad",
    "calories": 402,
    "protein": 16,
    "carbs": 8,
    "fat": 34,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_154",
    "name": "Creamy Mushroom Pasta",
    "calories": 591,
    "protein": 24,
    "carbs": 72,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_155",
    "name": "Spicy Shrimp Tacos",
    "calories": 389,
    "protein": 17,
    "carbs": 33,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_157",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 439,
    "protein": 18,
    "carbs": 58,
    "fat": 15,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_158",
    "name": "Classic Shrimp Salad",
    "calories": 366,
    "protein": 19,
    "carbs": 5,
    "fat": 30,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_159",
    "name": "Classic Salmon Salad",
    "calories": 491,
    "protein": 11,
    "carbs": 15,
    "fat": 43,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_160",
    "name": "Spicy Tuna Tacos",
    "calories": 486,
    "protein": 23,
    "carbs": 67,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_161",
    "name": "Creamy Eggplant Pasta",
    "calories": 505,
    "protein": 19,
    "carbs": 51,
    "fat": 25,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_162",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 520,
    "protein": 52,
    "carbs": 51,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_163",
    "name": "Spicy Shrimp Tacos",
    "calories": 295,
    "protein": 13,
    "carbs": 36,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_164",
    "name": "Chicken and Potato Bowl",
    "calories": 397,
    "protein": 34,
    "carbs": 36,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_165",
    "name": "Classic Turkey Salad",
    "calories": 312,
    "protein": 11,
    "carbs": 13,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_166",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 410,
    "protein": 17,
    "carbs": 54,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_167",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 449,
    "protein": 20,
    "carbs": 45,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_171",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 498,
    "protein": 16,
    "carbs": 68,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_172",
    "name": "Shrimp and Rice Bowl",
    "calories": 493,
    "protein": 46,
    "carbs": 30,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_173",
    "name": "Creamy Eggplant Pasta",
    "calories": 470,
    "protein": 19,
    "carbs": 49,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_174",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 376,
    "protein": 17,
    "carbs": 32,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_175",
    "name": "Classic Turkey Salad",
    "calories": 402,
    "protein": 17,
    "carbs": 7,
    "fat": 34,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_176",
    "name": "Spicy Shrimp Tacos",
    "calories": 441,
    "protein": 18,
    "carbs": 54,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_177",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 486,
    "protein": 14,
    "carbs": 58,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_178",
    "name": "Beef and Noodle Bowl",
    "calories": 671,
    "protein": 48,
    "carbs": 68,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_179",
    "name": "Spicy Tuna Tacos",
    "calories": 318,
    "protein": 19,
    "carbs": 38,
    "fat": 10,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_180",
    "name": "Chicken and Noodle Bowl",
    "calories": 483,
    "protein": 39,
    "carbs": 48,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_181",
    "name": "Creamy Zucchini Pasta",
    "calories": 408,
    "protein": 16,
    "carbs": 41,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_182",
    "name": "Spicy Beef Tacos",
    "calories": 348,
    "protein": 11,
    "carbs": 31,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_183",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 560,
    "protein": 24,
    "carbs": 62,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_184",
    "name": "Spicy Tuna Tacos",
    "calories": 356,
    "protein": 20,
    "carbs": 42,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_186",
    "name": "Chicken and Quinoa Bowl",
    "calories": 678,
    "protein": 54,
    "carbs": 75,
    "fat": 18,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_187",
    "name": "Creamy Spinach Pasta",
    "calories": 446,
    "protein": 17,
    "carbs": 72,
    "fat": 10,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_189",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 385,
    "protein": 16,
    "carbs": 42,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_191",
    "name": "Creamy Zucchini Pasta",
    "calories": 480,
    "protein": 19,
    "carbs": 56,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_192",
    "name": "Creamy Mushroom Pasta",
    "calories": 473,
    "protein": 11,
    "carbs": 60,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_193",
    "name": "Spicy Tuna Tacos",
    "calories": 390,
    "protein": 20,
    "carbs": 46,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_195",
    "name": "Beef and Noodle Bowl",
    "calories": 585,
    "protein": 52,
    "carbs": 47,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_196",
    "name": "Classic Turkey Salad",
    "calories": 465,
    "protein": 18,
    "carbs": 15,
    "fat": 37,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_198",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 459,
    "protein": 19,
    "carbs": 53,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_199",
    "name": "Spicy Tuna Tacos",
    "calories": 351,
    "protein": 22,
    "carbs": 32,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_200",
    "name": "Classic Turkey Salad",
    "calories": 312,
    "protein": 15,
    "carbs": 9,
    "fat": 24,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_202",
    "name": "Creamy Mushroom Pasta",
    "calories": 529,
    "protein": 22,
    "carbs": 72,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_203",
    "name": "Tuna and Quinoa Bowl",
    "calories": 660,
    "protein": 47,
    "carbs": 73,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_204",
    "name": "Spicy Chicken Tacos",
    "calories": 520,
    "protein": 24,
    "carbs": 61,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_205",
    "name": "Spicy Shrimp Tacos",
    "calories": 505,
    "protein": 18,
    "carbs": 52,
    "fat": 25,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_206",
    "name": "Creamy Mushroom Pasta",
    "calories": 305,
    "protein": 13,
    "carbs": 34,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_207",
    "name": "Classic Beef Salad",
    "calories": 323,
    "protein": 24,
    "carbs": 5,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_208",
    "name": "Roasted Spinach with Quinoa",
    "calories": 427,
    "protein": 10,
    "carbs": 72,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_209",
    "name": "Creamy Mushroom Pasta",
    "calories": 444,
    "protein": 22,
    "carbs": 35,
    "fat": 24,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_210",
    "name": "Spicy Turkey Tacos",
    "calories": 461,
    "protein": 19,
    "carbs": 49,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_211",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 357,
    "protein": 10,
    "carbs": 50,
    "fat": 13,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_212",
    "name": "Classic Shrimp Salad",
    "calories": 416,
    "protein": 22,
    "carbs": 10,
    "fat": 32,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_213",
    "name": "Roasted Spinach with Quinoa",
    "calories": 409,
    "protein": 21,
    "carbs": 43,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_214",
    "name": "Spicy Beef Tacos",
    "calories": 411,
    "protein": 21,
    "carbs": 57,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_215",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 415,
    "protein": 18,
    "carbs": 61,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_216",
    "name": "Classic Chicken Salad",
    "calories": 408,
    "protein": 15,
    "carbs": 15,
    "fat": 32,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_217",
    "name": "Creamy Spinach Pasta",
    "calories": 379,
    "protein": 20,
    "carbs": 41,
    "fat": 15,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_218",
    "name": "Spicy Turkey Tacos",
    "calories": 440,
    "protein": 14,
    "carbs": 42,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_219",
    "name": "Spicy Chicken Tacos",
    "calories": 295,
    "protein": 10,
    "carbs": 39,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_221",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 550,
    "protein": 53,
    "carbs": 35,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_222",
    "name": "Creamy Zucchini Pasta",
    "calories": 313,
    "protein": 13,
    "carbs": 36,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_223",
    "name": "Creamy Cauliflower Pasta",
    "calories": 521,
    "protein": 23,
    "carbs": 60,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_224",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 547,
    "protein": 24,
    "carbs": 70,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_225",
    "name": "Spicy Shrimp Tacos",
    "calories": 444,
    "protein": 21,
    "carbs": 45,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_226",
    "name": "Creamy Zucchini Pasta",
    "calories": 462,
    "protein": 22,
    "carbs": 62,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_227",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 424,
    "protein": 14,
    "carbs": 47,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_228",
    "name": "Spicy Shrimp Tacos",
    "calories": 423,
    "protein": 18,
    "carbs": 36,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_229",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 440,
    "protein": 18,
    "carbs": 38,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_230",
    "name": "Classic Salmon Salad",
    "calories": 401,
    "protein": 21,
    "carbs": 14,
    "fat": 29,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_231",
    "name": "Spicy Tuna Tacos",
    "calories": 481,
    "protein": 11,
    "carbs": 62,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_232",
    "name": "Tuna and Noodle Bowl",
    "calories": 430,
    "protein": 45,
    "carbs": 31,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_233",
    "name": "Spicy Chicken Tacos",
    "calories": 520,
    "protein": 19,
    "carbs": 66,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_234",
    "name": "Creamy Spinach Pasta",
    "calories": 504,
    "protein": 22,
    "carbs": 59,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_235",
    "name": "Classic Tuna Salad",
    "calories": 338,
    "protein": 25,
    "carbs": 10,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_236",
    "name": "Spicy Shrimp Tacos",
    "calories": 421,
    "protein": 24,
    "carbs": 34,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_237",
    "name": "Creamy Zucchini Pasta",
    "calories": 416,
    "protein": 20,
    "carbs": 48,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_238",
    "name": "Spicy Turkey Tacos",
    "calories": 342,
    "protein": 12,
    "carbs": 33,
    "fat": 18,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_239",
    "name": "Chicken and Quinoa Bowl",
    "calories": 549,
    "protein": 50,
    "carbs": 40,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_240",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 384,
    "protein": 18,
    "carbs": 51,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_241",
    "name": "Creamy Spinach Pasta",
    "calories": 429,
    "protein": 22,
    "carbs": 47,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_242",
    "name": "Spicy Turkey Tacos",
    "calories": 532,
    "protein": 18,
    "carbs": 61,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_243",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 440,
    "protein": 19,
    "carbs": 46,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_244",
    "name": "Spicy Shrimp Tacos",
    "calories": 377,
    "protein": 20,
    "carbs": 45,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_245",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 450,
    "protein": 17,
    "carbs": 55,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_246",
    "name": "Spicy Salmon Tacos",
    "calories": 486,
    "protein": 14,
    "carbs": 58,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_247",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 455,
    "protein": 22,
    "carbs": 67,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_248",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 538,
    "protein": 47,
    "carbs": 65,
    "fat": 10,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_249",
    "name": "Creamy Mushroom Pasta",
    "calories": 403,
    "protein": 17,
    "carbs": 59,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_250",
    "name": "Spicy Turkey Tacos",
    "calories": 400,
    "protein": 24,
    "carbs": 40,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_251",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 471,
    "protein": 10,
    "carbs": 56,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_252",
    "name": "Classic Chicken Salad",
    "calories": 440,
    "protein": 18,
    "carbs": 11,
    "fat": 36,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_253",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 481,
    "protein": 10,
    "carbs": 63,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_254",
    "name": "Creamy Eggplant Pasta",
    "calories": 480,
    "protein": 18,
    "carbs": 75,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_255",
    "name": "Shrimp and Potato Bowl",
    "calories": 382,
    "protein": 32,
    "carbs": 32,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_256",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 379,
    "protein": 16,
    "carbs": 54,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_257",
    "name": "Creamy Zucchini Pasta",
    "calories": 397,
    "protein": 10,
    "carbs": 33,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_258",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 438,
    "protein": 13,
    "carbs": 47,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_259",
    "name": "Creamy Mushroom Pasta",
    "calories": 449,
    "protein": 16,
    "carbs": 58,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_260",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 522,
    "protein": 11,
    "carbs": 70,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_261",
    "name": "Spicy Chicken Tacos",
    "calories": 387,
    "protein": 10,
    "carbs": 53,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_262",
    "name": "Classic Turkey Salad",
    "calories": 301,
    "protein": 23,
    "carbs": 5,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_263",
    "name": "Creamy Spinach Pasta",
    "calories": 471,
    "protein": 25,
    "carbs": 41,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_264",
    "name": "Roasted Spinach with Quinoa",
    "calories": 454,
    "protein": 20,
    "carbs": 62,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_265",
    "name": "Beef and Rice Bowl",
    "calories": 539,
    "protein": 31,
    "carbs": 61,
    "fat": 19,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_266",
    "name": "Salmon and Rice Bowl",
    "calories": 619,
    "protein": 37,
    "carbs": 75,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_268",
    "name": "Classic Chicken Salad",
    "calories": 535,
    "protein": 24,
    "carbs": 13,
    "fat": 43,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_269",
    "name": "Spicy Chicken Tacos",
    "calories": 545,
    "protein": 22,
    "carbs": 58,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_270",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 387,
    "protein": 13,
    "carbs": 50,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_271",
    "name": "Creamy Cauliflower Pasta",
    "calories": 321,
    "protein": 11,
    "carbs": 40,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_272",
    "name": "Spicy Shrimp Tacos",
    "calories": 408,
    "protein": 15,
    "carbs": 42,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_274",
    "name": "Beef and Noodle Bowl",
    "calories": 510,
    "protein": 37,
    "carbs": 50,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_275",
    "name": "Creamy Mushroom Pasta",
    "calories": 400,
    "protein": 18,
    "carbs": 37,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_276",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 506,
    "protein": 50,
    "carbs": 36,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_277",
    "name": "Spicy Beef Tacos",
    "calories": 384,
    "protein": 16,
    "carbs": 53,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_278",
    "name": "Creamy Cauliflower Pasta",
    "calories": 516,
    "protein": 18,
    "carbs": 75,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_279",
    "name": "Shrimp and Potato Bowl",
    "calories": 567,
    "protein": 39,
    "carbs": 69,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_280",
    "name": "Tuna and Noodle Bowl",
    "calories": 537,
    "protein": 47,
    "carbs": 40,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_281",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 531,
    "protein": 23,
    "carbs": 58,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_282",
    "name": "Spicy Tuna Tacos",
    "calories": 300,
    "protein": 18,
    "carbs": 30,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_283",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 433,
    "protein": 14,
    "carbs": 47,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_284",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 447,
    "protein": 25,
    "carbs": 44,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_286",
    "name": "Spicy Chicken Tacos",
    "calories": 504,
    "protein": 21,
    "carbs": 69,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_287",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 456,
    "protein": 13,
    "carbs": 65,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_288",
    "name": "Creamy Spinach Pasta",
    "calories": 340,
    "protein": 18,
    "carbs": 40,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_289",
    "name": "Classic Chicken Salad",
    "calories": 496,
    "protein": 11,
    "carbs": 14,
    "fat": 44,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_290",
    "name": "Spicy Salmon Tacos",
    "calories": 548,
    "protein": 11,
    "carbs": 72,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_291",
    "name": "Classic Salmon Salad",
    "calories": 350,
    "protein": 11,
    "carbs": 9,
    "fat": 30,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_292",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 320,
    "protein": 15,
    "carbs": 38,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_293",
    "name": "Spicy Beef Tacos",
    "calories": 591,
    "protein": 22,
    "carbs": 74,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_294",
    "name": "Classic Beef Salad",
    "calories": 348,
    "protein": 20,
    "carbs": 13,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_295",
    "name": "Spicy Salmon Tacos",
    "calories": 428,
    "protein": 16,
    "carbs": 37,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_296",
    "name": "Spicy Chicken Tacos",
    "calories": 427,
    "protein": 22,
    "carbs": 60,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_297",
    "name": "Classic Tuna Salad",
    "calories": 439,
    "protein": 25,
    "carbs": 15,
    "fat": 31,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_298",
    "name": "Creamy Eggplant Pasta",
    "calories": 492,
    "protein": 16,
    "carbs": 62,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_299",
    "name": "Classic Tuna Salad",
    "calories": 377,
    "protein": 22,
    "carbs": 7,
    "fat": 29,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_301",
    "name": "Creamy Mushroom Pasta",
    "calories": 270,
    "protein": 14,
    "carbs": 31,
    "fat": 10,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_302",
    "name": "Chicken and Rice Bowl",
    "calories": 487,
    "protein": 42,
    "carbs": 55,
    "fat": 11,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_303",
    "name": "Spicy Tuna Tacos",
    "calories": 380,
    "protein": 13,
    "carbs": 46,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_304",
    "name": "Chicken and Quinoa Bowl",
    "calories": 500,
    "protein": 45,
    "carbs": 44,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_305",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 446,
    "protein": 13,
    "carbs": 49,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_306",
    "name": "Creamy Cauliflower Pasta",
    "calories": 538,
    "protein": 18,
    "carbs": 67,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_307",
    "name": "Beef and Rice Bowl",
    "calories": 520,
    "protein": 52,
    "carbs": 33,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_308",
    "name": "Spicy Turkey Tacos",
    "calories": 567,
    "protein": 16,
    "carbs": 74,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_309",
    "name": "Classic Tuna Salad",
    "calories": 313,
    "protein": 19,
    "carbs": 12,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_310",
    "name": "Shrimp and Potato Bowl",
    "calories": 535,
    "protein": 46,
    "carbs": 45,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_311",
    "name": "Turkey and Rice Bowl",
    "calories": 475,
    "protein": 38,
    "carbs": 47,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_312",
    "name": "Roasted Spinach with Quinoa",
    "calories": 343,
    "protein": 20,
    "carbs": 41,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_313",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 450,
    "protein": 25,
    "carbs": 56,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_314",
    "name": "Roasted Spinach with Quinoa",
    "calories": 434,
    "protein": 17,
    "carbs": 51,
    "fat": 18,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_315",
    "name": "Creamy Mushroom Pasta",
    "calories": 482,
    "protein": 22,
    "carbs": 58,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_316",
    "name": "Creamy Cauliflower Pasta",
    "calories": 518,
    "protein": 18,
    "carbs": 71,
    "fat": 18,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_317",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 459,
    "protein": 19,
    "carbs": 44,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_319",
    "name": "Spicy Chicken Tacos",
    "calories": 348,
    "protein": 25,
    "carbs": 35,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_320",
    "name": "Spicy Turkey Tacos",
    "calories": 405,
    "protein": 12,
    "carbs": 51,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_321",
    "name": "Spicy Turkey Tacos",
    "calories": 325,
    "protein": 18,
    "carbs": 34,
    "fat": 13,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_322",
    "name": "Creamy Cauliflower Pasta",
    "calories": 334,
    "protein": 17,
    "carbs": 35,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_323",
    "name": "Spicy Beef Tacos",
    "calories": 374,
    "protein": 11,
    "carbs": 60,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_325",
    "name": "Turkey and Quinoa Bowl",
    "calories": 600,
    "protein": 40,
    "carbs": 56,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_327",
    "name": "Shrimp and Rice Bowl",
    "calories": 588,
    "protein": 52,
    "carbs": 50,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_329",
    "name": "Turkey and Noodle Bowl",
    "calories": 518,
    "protein": 42,
    "carbs": 56,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_330",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 465,
    "protein": 20,
    "carbs": 58,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_331",
    "name": "Creamy Cauliflower Pasta",
    "calories": 505,
    "protein": 18,
    "carbs": 52,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_332",
    "name": "Classic Tuna Salad",
    "calories": 534,
    "protein": 24,
    "carbs": 15,
    "fat": 42,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_333",
    "name": "Chicken and Sweet Potato Bowl",
    "calories": 475,
    "protein": 45,
    "carbs": 31,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_334",
    "name": "Spicy Tuna Tacos",
    "calories": 376,
    "protein": 10,
    "carbs": 30,
    "fat": 24,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_335",
    "name": "Spicy Shrimp Tacos",
    "calories": 402,
    "protein": 13,
    "carbs": 38,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_336",
    "name": "Creamy Eggplant Pasta",
    "calories": 492,
    "protein": 25,
    "carbs": 53,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_337",
    "name": "Classic Shrimp Salad",
    "calories": 403,
    "protein": 20,
    "carbs": 11,
    "fat": 31,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_338",
    "name": "Roasted Spinach with Quinoa",
    "calories": 484,
    "protein": 23,
    "carbs": 62,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_339",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 367,
    "protein": 16,
    "carbs": 42,
    "fat": 15,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_340",
    "name": "Creamy Mushroom Pasta",
    "calories": 448,
    "protein": 21,
    "carbs": 64,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_341",
    "name": "Classic Salmon Salad",
    "calories": 288,
    "protein": 15,
    "carbs": 12,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_342",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 371,
    "protein": 12,
    "carbs": 56,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_344",
    "name": "Classic Turkey Salad",
    "calories": 545,
    "protein": 24,
    "carbs": 11,
    "fat": 45,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_345",
    "name": "Chicken and Noodle Bowl",
    "calories": 527,
    "protein": 47,
    "carbs": 33,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_346",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 630,
    "protein": 40,
    "carbs": 68,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_347",
    "name": "Creamy Zucchini Pasta",
    "calories": 502,
    "protein": 21,
    "carbs": 64,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_348",
    "name": "Beef and Rice Bowl",
    "calories": 504,
    "protein": 49,
    "carbs": 41,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_349",
    "name": "Creamy Mushroom Pasta",
    "calories": 425,
    "protein": 23,
    "carbs": 36,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_350",
    "name": "Spicy Chicken Tacos",
    "calories": 376,
    "protein": 18,
    "carbs": 40,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_351",
    "name": "Creamy Cauliflower Pasta",
    "calories": 328,
    "protein": 16,
    "carbs": 39,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_352",
    "name": "Classic Shrimp Salad",
    "calories": 495,
    "protein": 22,
    "carbs": 14,
    "fat": 39,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_353",
    "name": "Creamy Eggplant Pasta",
    "calories": 416,
    "protein": 18,
    "carbs": 50,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_354",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 500,
    "protein": 10,
    "carbs": 61,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_357",
    "name": "Roasted Spinach with Quinoa",
    "calories": 409,
    "protein": 20,
    "carbs": 44,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_358",
    "name": "Creamy Eggplant Pasta",
    "calories": 507,
    "protein": 14,
    "carbs": 61,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_359",
    "name": "Creamy Spinach Pasta",
    "calories": 394,
    "protein": 18,
    "carbs": 58,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_360",
    "name": "Creamy Zucchini Pasta",
    "calories": 523,
    "protein": 20,
    "carbs": 59,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_361",
    "name": "Creamy Eggplant Pasta",
    "calories": 465,
    "protein": 20,
    "carbs": 49,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_362",
    "name": "Classic Chicken Salad",
    "calories": 322,
    "protein": 17,
    "carbs": 14,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_363",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 720,
    "protein": 52,
    "carbs": 74,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_364",
    "name": "Spicy Shrimp Tacos",
    "calories": 450,
    "protein": 18,
    "carbs": 63,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_365",
    "name": "Spicy Beef Tacos",
    "calories": 472,
    "protein": 19,
    "carbs": 72,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_366",
    "name": "Spicy Chicken Tacos",
    "calories": 499,
    "protein": 20,
    "carbs": 53,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_367",
    "name": "Roasted Spinach with Quinoa",
    "calories": 374,
    "protein": 14,
    "carbs": 57,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_368",
    "name": "Spicy Beef Tacos",
    "calories": 402,
    "protein": 18,
    "carbs": 60,
    "fat": 10,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_369",
    "name": "Classic Turkey Salad",
    "calories": 354,
    "protein": 24,
    "carbs": 6,
    "fat": 26,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_370",
    "name": "Chicken and Quinoa Bowl",
    "calories": 479,
    "protein": 49,
    "carbs": 46,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_372",
    "name": "Spicy Tuna Tacos",
    "calories": 499,
    "protein": 14,
    "carbs": 59,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_373",
    "name": "Classic Chicken Salad",
    "calories": 497,
    "protein": 25,
    "carbs": 7,
    "fat": 41,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_374",
    "name": "Creamy Eggplant Pasta",
    "calories": 482,
    "protein": 15,
    "carbs": 74,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_376",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 439,
    "protein": 24,
    "carbs": 52,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_377",
    "name": "Classic Tuna Salad",
    "calories": 472,
    "protein": 20,
    "carbs": 8,
    "fat": 40,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_378",
    "name": "Spicy Turkey Tacos",
    "calories": 306,
    "protein": 19,
    "carbs": 35,
    "fat": 10,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_379",
    "name": "Classic Shrimp Salad",
    "calories": 376,
    "protein": 19,
    "carbs": 12,
    "fat": 28,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_380",
    "name": "Creamy Eggplant Pasta",
    "calories": 331,
    "protein": 22,
    "carbs": 36,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_381",
    "name": "Creamy Mushroom Pasta",
    "calories": 324,
    "protein": 24,
    "carbs": 30,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_382",
    "name": "Spicy Tuna Tacos",
    "calories": 406,
    "protein": 17,
    "carbs": 62,
    "fat": 10,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_383",
    "name": "Spicy Tuna Tacos",
    "calories": 379,
    "protein": 18,
    "carbs": 43,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_384",
    "name": "Classic Tuna Salad",
    "calories": 438,
    "protein": 22,
    "carbs": 11,
    "fat": 34,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_385",
    "name": "Classic Shrimp Salad",
    "calories": 380,
    "protein": 14,
    "carbs": 9,
    "fat": 32,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_386",
    "name": "Classic Salmon Salad",
    "calories": 389,
    "protein": 10,
    "carbs": 13,
    "fat": 33,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_387",
    "name": "Roasted Spinach with Quinoa",
    "calories": 548,
    "protein": 22,
    "carbs": 70,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_388",
    "name": "Spicy Salmon Tacos",
    "calories": 455,
    "protein": 14,
    "carbs": 66,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_389",
    "name": "Classic Beef Salad",
    "calories": 289,
    "protein": 10,
    "carbs": 6,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_390",
    "name": "Spicy Beef Tacos",
    "calories": 439,
    "protein": 19,
    "carbs": 39,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_391",
    "name": "Creamy Spinach Pasta",
    "calories": 474,
    "protein": 20,
    "carbs": 58,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_392",
    "name": "Classic Beef Salad",
    "calories": 321,
    "protein": 20,
    "carbs": 13,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_393",
    "name": "Creamy Mushroom Pasta",
    "calories": 395,
    "protein": 14,
    "carbs": 51,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_394",
    "name": "Creamy Eggplant Pasta",
    "calories": 377,
    "protein": 17,
    "carbs": 39,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_395",
    "name": "Creamy Zucchini Pasta",
    "calories": 508,
    "protein": 20,
    "carbs": 71,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_396",
    "name": "Classic Beef Salad",
    "calories": 305,
    "protein": 21,
    "carbs": 8,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_397",
    "name": "Creamy Zucchini Pasta",
    "calories": 450,
    "protein": 25,
    "carbs": 56,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_398",
    "name": "Chicken and Quinoa Bowl",
    "calories": 460,
    "protein": 49,
    "carbs": 39,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_399",
    "name": "Chicken and Quinoa Bowl",
    "calories": 502,
    "protein": 42,
    "carbs": 52,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_400",
    "name": "Beef and Rice Bowl",
    "calories": 560,
    "protein": 42,
    "carbs": 53,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_401",
    "name": "Classic Chicken Salad",
    "calories": 408,
    "protein": 24,
    "carbs": 15,
    "fat": 28,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_402",
    "name": "Classic Turkey Salad",
    "calories": 355,
    "protein": 13,
    "carbs": 6,
    "fat": 31,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_403",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 459,
    "protein": 14,
    "carbs": 58,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_404",
    "name": "Classic Tuna Salad",
    "calories": 510,
    "protein": 20,
    "carbs": 13,
    "fat": 42,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_405",
    "name": "Shrimp and Noodle Bowl",
    "calories": 568,
    "protein": 54,
    "carbs": 34,
    "fat": 24,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_406",
    "name": "Creamy Cauliflower Pasta",
    "calories": 488,
    "protein": 16,
    "carbs": 61,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_407",
    "name": "Classic Beef Salad",
    "calories": 312,
    "protein": 13,
    "carbs": 11,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_408",
    "name": "Classic Tuna Salad",
    "calories": 322,
    "protein": 21,
    "carbs": 10,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_409",
    "name": "Classic Shrimp Salad",
    "calories": 420,
    "protein": 19,
    "carbs": 14,
    "fat": 32,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_410",
    "name": "Spicy Shrimp Tacos",
    "calories": 382,
    "protein": 12,
    "carbs": 34,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_412",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 376,
    "protein": 12,
    "carbs": 55,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_413",
    "name": "Creamy Zucchini Pasta",
    "calories": 350,
    "protein": 21,
    "carbs": 35,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_414",
    "name": "Salmon and Potato Bowl",
    "calories": 525,
    "protein": 48,
    "carbs": 36,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_415",
    "name": "Chicken and Rice Bowl",
    "calories": 559,
    "protein": 41,
    "carbs": 56,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_416",
    "name": "Creamy Zucchini Pasta",
    "calories": 413,
    "protein": 18,
    "carbs": 47,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_417",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 476,
    "protein": 15,
    "carbs": 68,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_418",
    "name": "Classic Turkey Salad",
    "calories": 488,
    "protein": 16,
    "carbs": 7,
    "fat": 44,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_419",
    "name": "Classic Beef Salad",
    "calories": 401,
    "protein": 11,
    "carbs": 15,
    "fat": 33,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_420",
    "name": "Creamy Eggplant Pasta",
    "calories": 473,
    "protein": 11,
    "carbs": 60,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_422",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 433,
    "protein": 48,
    "carbs": 31,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_423",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 549,
    "protein": 34,
    "carbs": 74,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_424",
    "name": "Spicy Shrimp Tacos",
    "calories": 472,
    "protein": 16,
    "carbs": 66,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_425",
    "name": "Classic Salmon Salad",
    "calories": 358,
    "protein": 25,
    "carbs": 15,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_426",
    "name": "Spicy Turkey Tacos",
    "calories": 474,
    "protein": 16,
    "carbs": 71,
    "fat": 14,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_427",
    "name": "Creamy Mushroom Pasta",
    "calories": 552,
    "protein": 23,
    "carbs": 70,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_428",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 553,
    "protein": 16,
    "carbs": 75,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_429",
    "name": "Beef and Quinoa Bowl",
    "calories": 586,
    "protein": 35,
    "carbs": 62,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_430",
    "name": "Creamy Zucchini Pasta",
    "calories": 374,
    "protein": 17,
    "carbs": 45,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_431",
    "name": "Spicy Turkey Tacos",
    "calories": 432,
    "protein": 23,
    "carbs": 31,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_432",
    "name": "Tuna and Quinoa Bowl",
    "calories": 444,
    "protein": 31,
    "carbs": 53,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_433",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 576,
    "protein": 23,
    "carbs": 67,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_434",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 491,
    "protein": 22,
    "carbs": 49,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_435",
    "name": "Creamy Eggplant Pasta",
    "calories": 436,
    "protein": 23,
    "carbs": 50,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_437",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 463,
    "protein": 53,
    "carbs": 38,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_438",
    "name": "Classic Shrimp Salad",
    "calories": 437,
    "protein": 10,
    "carbs": 7,
    "fat": 41,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_439",
    "name": "Creamy Cauliflower Pasta",
    "calories": 456,
    "protein": 19,
    "carbs": 59,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_440",
    "name": "Spicy Turkey Tacos",
    "calories": 447,
    "protein": 15,
    "carbs": 45,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_441",
    "name": "Spicy Salmon Tacos",
    "calories": 432,
    "protein": 10,
    "carbs": 62,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_442",
    "name": "Classic Salmon Salad",
    "calories": 485,
    "protein": 23,
    "carbs": 15,
    "fat": 37,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_443",
    "name": "Creamy Spinach Pasta",
    "calories": 499,
    "protein": 16,
    "carbs": 75,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_444",
    "name": "Spicy Beef Tacos",
    "calories": 396,
    "protein": 13,
    "carbs": 59,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_445",
    "name": "Tuna and Quinoa Bowl",
    "calories": 587,
    "protein": 31,
    "carbs": 73,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_446",
    "name": "Spicy Tuna Tacos",
    "calories": 476,
    "protein": 25,
    "carbs": 49,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_447",
    "name": "Spicy Turkey Tacos",
    "calories": 367,
    "protein": 18,
    "carbs": 40,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_449",
    "name": "Classic Chicken Salad",
    "calories": 362,
    "protein": 10,
    "carbs": 13,
    "fat": 30,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_450",
    "name": "Chicken and Potato Bowl",
    "calories": 578,
    "protein": 55,
    "carbs": 49,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_451",
    "name": "Creamy Mushroom Pasta",
    "calories": 398,
    "protein": 17,
    "carbs": 42,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_452",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 544,
    "protein": 17,
    "carbs": 74,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_453",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 484,
    "protein": 20,
    "carbs": 65,
    "fat": 16,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_454",
    "name": "Shrimp and Rice Bowl",
    "calories": 694,
    "protein": 50,
    "carbs": 74,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_455",
    "name": "Classic Tuna Salad",
    "calories": 345,
    "protein": 24,
    "carbs": 15,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_456",
    "name": "Shrimp and Potato Bowl",
    "calories": 397,
    "protein": 33,
    "carbs": 37,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_457",
    "name": "Classic Chicken Salad",
    "calories": 431,
    "protein": 22,
    "carbs": 7,
    "fat": 35,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_458",
    "name": "Classic Turkey Salad",
    "calories": 313,
    "protein": 17,
    "carbs": 5,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_459",
    "name": "Classic Shrimp Salad",
    "calories": 397,
    "protein": 20,
    "carbs": 5,
    "fat": 33,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_460",
    "name": "Beef and Rice Bowl",
    "calories": 502,
    "protein": 30,
    "carbs": 64,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_461",
    "name": "Roasted Spinach with Quinoa",
    "calories": 331,
    "protein": 20,
    "carbs": 38,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_462",
    "name": "Chicken and Rice Bowl",
    "calories": 534,
    "protein": 41,
    "carbs": 61,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_463",
    "name": "Spicy Chicken Tacos",
    "calories": 449,
    "protein": 17,
    "carbs": 57,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_464",
    "name": "Roasted Spinach with Quinoa",
    "calories": 441,
    "protein": 11,
    "carbs": 61,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_465",
    "name": "Classic Beef Salad",
    "calories": 435,
    "protein": 16,
    "carbs": 5,
    "fat": 39,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_466",
    "name": "Classic Beef Salad",
    "calories": 395,
    "protein": 24,
    "carbs": 5,
    "fat": 31,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_467",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 341,
    "protein": 11,
    "carbs": 36,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_468",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 373,
    "protein": 12,
    "carbs": 52,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_469",
    "name": "Shrimp and Potato Bowl",
    "calories": 710,
    "protein": 54,
    "carbs": 74,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_470",
    "name": "Tuna and Noodle Bowl",
    "calories": 606,
    "protein": 38,
    "carbs": 64,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_471",
    "name": "Creamy Cauliflower Pasta",
    "calories": 367,
    "protein": 10,
    "carbs": 30,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_472",
    "name": "Classic Tuna Salad",
    "calories": 421,
    "protein": 11,
    "carbs": 11,
    "fat": 37,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_473",
    "name": "Turkey and Rice Bowl",
    "calories": 375,
    "protein": 30,
    "carbs": 30,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_474",
    "name": "Spicy Beef Tacos",
    "calories": 458,
    "protein": 21,
    "carbs": 53,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_475",
    "name": "Salmon and Potato Bowl",
    "calories": 574,
    "protein": 33,
    "carbs": 61,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_476",
    "name": "Classic Shrimp Salad",
    "calories": 466,
    "protein": 16,
    "carbs": 6,
    "fat": 42,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_477",
    "name": "Creamy Eggplant Pasta",
    "calories": 423,
    "protein": 19,
    "carbs": 62,
    "fat": 11,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_478",
    "name": "Classic Beef Salad",
    "calories": 478,
    "protein": 20,
    "carbs": 5,
    "fat": 42,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_479",
    "name": "Salmon and Potato Bowl",
    "calories": 407,
    "protein": 31,
    "carbs": 46,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_480",
    "name": "Spicy Chicken Tacos",
    "calories": 465,
    "protein": 25,
    "carbs": 53,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_481",
    "name": "Spicy Chicken Tacos",
    "calories": 416,
    "protein": 20,
    "carbs": 39,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_482",
    "name": "Beef and Noodle Bowl",
    "calories": 488,
    "protein": 42,
    "carbs": 35,
    "fat": 20,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_483",
    "name": "Spicy Tuna Tacos",
    "calories": 407,
    "protein": 18,
    "carbs": 32,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_484",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 409,
    "protein": 22,
    "carbs": 51,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_485",
    "name": "Classic Turkey Salad",
    "calories": 373,
    "protein": 18,
    "carbs": 10,
    "fat": 29,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_486",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 340,
    "protein": 20,
    "carbs": 38,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_488",
    "name": "Shrimp and Quinoa Bowl",
    "calories": 591,
    "protein": 42,
    "carbs": 54,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_489",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 480,
    "protein": 23,
    "carbs": 43,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_490",
    "name": "Turkey and Rice Bowl",
    "calories": 542,
    "protein": 45,
    "carbs": 68,
    "fat": 10,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_491",
    "name": "Spicy Salmon Tacos",
    "calories": 327,
    "protein": 16,
    "carbs": 32,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_492",
    "name": "Turkey and Quinoa Bowl",
    "calories": 560,
    "protein": 55,
    "carbs": 58,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_494",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 391,
    "protein": 20,
    "carbs": 44,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_495",
    "name": "Spicy Turkey Tacos",
    "calories": 540,
    "protein": 22,
    "carbs": 68,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_496",
    "name": "Creamy Mushroom Pasta",
    "calories": 354,
    "protein": 16,
    "carbs": 50,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_497",
    "name": "Beef and Quinoa Bowl",
    "calories": 417,
    "protein": 35,
    "carbs": 31,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_499",
    "name": "Roasted Spinach with Quinoa",
    "calories": 306,
    "protein": 18,
    "carbs": 36,
    "fat": 10,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_500",
    "name": "Classic Shrimp Salad",
    "calories": 485,
    "protein": 16,
    "carbs": 13,
    "fat": 41,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_501",
    "name": "Creamy Eggplant Pasta",
    "calories": 364,
    "protein": 13,
    "carbs": 42,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_502",
    "name": "Creamy Eggplant Pasta",
    "calories": 443,
    "protein": 15,
    "carbs": 71,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_503",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 370,
    "protein": 19,
    "carbs": 42,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_504",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 504,
    "protein": 40,
    "carbs": 59,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_505",
    "name": "Classic Beef Salad",
    "calories": 378,
    "protein": 24,
    "carbs": 12,
    "fat": 26,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_507",
    "name": "Classic Beef Salad",
    "calories": 422,
    "protein": 14,
    "carbs": 15,
    "fat": 34,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_508",
    "name": "Classic Shrimp Salad",
    "calories": 520,
    "protein": 23,
    "carbs": 8,
    "fat": 44,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_509",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 415,
    "protein": 32,
    "carbs": 47,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_510",
    "name": "Creamy Eggplant Pasta",
    "calories": 416,
    "protein": 15,
    "carbs": 35,
    "fat": 24,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_511",
    "name": "Shrimp and Rice Bowl",
    "calories": 611,
    "protein": 44,
    "carbs": 66,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_512",
    "name": "Creamy Spinach Pasta",
    "calories": 445,
    "protein": 21,
    "carbs": 61,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_513",
    "name": "Classic Shrimp Salad",
    "calories": 414,
    "protein": 14,
    "carbs": 13,
    "fat": 34,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_514",
    "name": "Spicy Tuna Tacos",
    "calories": 483,
    "protein": 14,
    "carbs": 55,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_515",
    "name": "Spicy Tuna Tacos",
    "calories": 571,
    "protein": 20,
    "carbs": 71,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_516",
    "name": "Classic Tuna Salad",
    "calories": 369,
    "protein": 12,
    "carbs": 15,
    "fat": 29,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_517",
    "name": "Creamy Eggplant Pasta",
    "calories": 559,
    "protein": 21,
    "carbs": 67,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_518",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 459,
    "protein": 25,
    "carbs": 65,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_519",
    "name": "Classic Chicken Salad",
    "calories": 475,
    "protein": 13,
    "carbs": 9,
    "fat": 43,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_520",
    "name": "Shrimp and Sweet Potato Bowl",
    "calories": 414,
    "protein": 33,
    "carbs": 48,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_521",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 416,
    "protein": 12,
    "carbs": 47,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_522",
    "name": "Creamy Eggplant Pasta",
    "calories": 390,
    "protein": 15,
    "carbs": 42,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_523",
    "name": "Classic Turkey Salad",
    "calories": 401,
    "protein": 11,
    "carbs": 6,
    "fat": 37,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_524",
    "name": "Creamy Mushroom Pasta",
    "calories": 489,
    "protein": 18,
    "carbs": 57,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_525",
    "name": "Classic Tuna Salad",
    "calories": 356,
    "protein": 14,
    "carbs": 12,
    "fat": 28,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_526",
    "name": "Chicken and Potato Bowl",
    "calories": 478,
    "protein": 39,
    "carbs": 40,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_527",
    "name": "Salmon and Quinoa Bowl",
    "calories": 515,
    "protein": 48,
    "carbs": 47,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_528",
    "name": "Beef and Potato Bowl",
    "calories": 572,
    "protein": 35,
    "carbs": 72,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_529",
    "name": "Classic Tuna Salad",
    "calories": 280,
    "protein": 16,
    "carbs": 9,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_530",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 307,
    "protein": 20,
    "carbs": 32,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_531",
    "name": "Spicy Shrimp Tacos",
    "calories": 498,
    "protein": 12,
    "carbs": 63,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_533",
    "name": "Creamy Zucchini Pasta",
    "calories": 436,
    "protein": 10,
    "carbs": 72,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_534",
    "name": "Creamy Spinach Pasta",
    "calories": 402,
    "protein": 18,
    "carbs": 33,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_535",
    "name": "Turkey and Rice Bowl",
    "calories": 637,
    "protein": 32,
    "carbs": 71,
    "fat": 25,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_537",
    "name": "Chicken and Noodle Bowl",
    "calories": 675,
    "protein": 44,
    "carbs": 73,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_538",
    "name": "Turkey and Potato Bowl",
    "calories": 546,
    "protein": 41,
    "carbs": 46,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_540",
    "name": "Beef and Quinoa Bowl",
    "calories": 637,
    "protein": 51,
    "carbs": 70,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_541",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 325,
    "protein": 10,
    "carbs": 33,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_542",
    "name": "Chicken and Sweet Potato Bowl",
    "calories": 608,
    "protein": 52,
    "carbs": 55,
    "fat": 20,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_543",
    "name": "Spicy Beef Tacos",
    "calories": 421,
    "protein": 22,
    "carbs": 45,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_544",
    "name": "Creamy Cauliflower Pasta",
    "calories": 332,
    "protein": 11,
    "carbs": 45,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_545",
    "name": "Beef and Potato Bowl",
    "calories": 565,
    "protein": 43,
    "carbs": 42,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_546",
    "name": "Creamy Spinach Pasta",
    "calories": 431,
    "protein": 23,
    "carbs": 33,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_547",
    "name": "Creamy Spinach Pasta",
    "calories": 516,
    "protein": 11,
    "carbs": 64,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_548",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 408,
    "protein": 10,
    "carbs": 56,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_549",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 436,
    "protein": 21,
    "carbs": 43,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_550",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 341,
    "protein": 12,
    "carbs": 44,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_552",
    "name": "Roasted Spinach with Quinoa",
    "calories": 397,
    "protein": 10,
    "carbs": 51,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_553",
    "name": "Classic Salmon Salad",
    "calories": 479,
    "protein": 14,
    "carbs": 9,
    "fat": 43,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_554",
    "name": "Tuna and Potato Bowl",
    "calories": 625,
    "protein": 41,
    "carbs": 59,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_555",
    "name": "Tuna and Quinoa Bowl",
    "calories": 663,
    "protein": 43,
    "carbs": 71,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_556",
    "name": "Roasted Spinach with Quinoa",
    "calories": 469,
    "protein": 12,
    "carbs": 67,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_557",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 399,
    "protein": 17,
    "carbs": 31,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_558",
    "name": "Spicy Beef Tacos",
    "calories": 494,
    "protein": 20,
    "carbs": 54,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_559",
    "name": "Classic Salmon Salad",
    "calories": 486,
    "protein": 22,
    "carbs": 5,
    "fat": 42,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_560",
    "name": "Classic Shrimp Salad",
    "calories": 464,
    "protein": 25,
    "carbs": 10,
    "fat": 36,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_561",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 414,
    "protein": 18,
    "carbs": 54,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_562",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 448,
    "protein": 12,
    "carbs": 46,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_563",
    "name": "Creamy Spinach Pasta",
    "calories": 383,
    "protein": 12,
    "carbs": 41,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_564",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 493,
    "protein": 13,
    "carbs": 63,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_565",
    "name": "Chicken and Noodle Bowl",
    "calories": 496,
    "protein": 43,
    "carbs": 54,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_566",
    "name": "Shrimp and Potato Bowl",
    "calories": 548,
    "protein": 54,
    "carbs": 47,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_567",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 531,
    "protein": 20,
    "carbs": 70,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_568",
    "name": "Creamy Mushroom Pasta",
    "calories": 488,
    "protein": 23,
    "carbs": 54,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_569",
    "name": "Creamy Zucchini Pasta",
    "calories": 439,
    "protein": 20,
    "carbs": 65,
    "fat": 11,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_570",
    "name": "Turkey and Noodle Bowl",
    "calories": 454,
    "protein": 39,
    "carbs": 34,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_571",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 455,
    "protein": 23,
    "carbs": 39,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_572",
    "name": "Classic Beef Salad",
    "calories": 543,
    "protein": 25,
    "carbs": 14,
    "fat": 43,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_573",
    "name": "Creamy Spinach Pasta",
    "calories": 574,
    "protein": 22,
    "carbs": 72,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_574",
    "name": "Classic Salmon Salad",
    "calories": 378,
    "protein": 24,
    "carbs": 12,
    "fat": 26,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_576",
    "name": "Chicken and Rice Bowl",
    "calories": 558,
    "protein": 50,
    "carbs": 58,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_577",
    "name": "Creamy Zucchini Pasta",
    "calories": 346,
    "protein": 16,
    "carbs": 30,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_578",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 381,
    "protein": 13,
    "carbs": 44,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_580",
    "name": "Creamy Cauliflower Pasta",
    "calories": 402,
    "protein": 24,
    "carbs": 36,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_581",
    "name": "Spicy Chicken Tacos",
    "calories": 479,
    "protein": 19,
    "carbs": 58,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_582",
    "name": "Beef and Rice Bowl",
    "calories": 443,
    "protein": 42,
    "carbs": 35,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_583",
    "name": "Classic Chicken Salad",
    "calories": 488,
    "protein": 15,
    "carbs": 8,
    "fat": 44,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_584",
    "name": "Creamy Spinach Pasta",
    "calories": 465,
    "protein": 24,
    "carbs": 63,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_585",
    "name": "Classic Salmon Salad",
    "calories": 540,
    "protein": 25,
    "carbs": 11,
    "fat": 44,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_586",
    "name": "Tuna and Potato Bowl",
    "calories": 548,
    "protein": 35,
    "carbs": 48,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_587",
    "name": "Classic Chicken Salad",
    "calories": 462,
    "protein": 16,
    "carbs": 5,
    "fat": 42,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_588",
    "name": "Turkey and Potato Bowl",
    "calories": 539,
    "protein": 34,
    "carbs": 58,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_589",
    "name": "Spicy Tuna Tacos",
    "calories": 473,
    "protein": 25,
    "carbs": 46,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_590",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 474,
    "protein": 24,
    "carbs": 54,
    "fat": 18,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_591",
    "name": "Creamy Eggplant Pasta",
    "calories": 343,
    "protein": 15,
    "carbs": 46,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_593",
    "name": "Classic Salmon Salad",
    "calories": 392,
    "protein": 21,
    "carbs": 14,
    "fat": 28,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_594",
    "name": "Turkey and Rice Bowl",
    "calories": 449,
    "protein": 36,
    "carbs": 47,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_595",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 427,
    "protein": 15,
    "carbs": 67,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_596",
    "name": "Turkey and Quinoa Bowl",
    "calories": 506,
    "protein": 36,
    "carbs": 41,
    "fat": 22,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_597",
    "name": "Shrimp and Rice Bowl",
    "calories": 550,
    "protein": 40,
    "carbs": 57,
    "fat": 18,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_598",
    "name": "Classic Beef Salad",
    "calories": 495,
    "protein": 21,
    "carbs": 6,
    "fat": 43,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_599",
    "name": "Spicy Beef Tacos",
    "calories": 441,
    "protein": 25,
    "carbs": 47,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_600",
    "name": "Creamy Eggplant Pasta",
    "calories": 462,
    "protein": 17,
    "carbs": 67,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_601",
    "name": "Creamy Cauliflower Pasta",
    "calories": 422,
    "protein": 21,
    "carbs": 35,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_602",
    "name": "Spicy Chicken Tacos",
    "calories": 357,
    "protein": 15,
    "carbs": 45,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_603",
    "name": "Spicy Beef Tacos",
    "calories": 434,
    "protein": 24,
    "carbs": 62,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_604",
    "name": "Classic Chicken Salad",
    "calories": 405,
    "protein": 25,
    "carbs": 11,
    "fat": 29,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_605",
    "name": "Creamy Eggplant Pasta",
    "calories": 515,
    "protein": 11,
    "carbs": 75,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_606",
    "name": "Classic Chicken Salad",
    "calories": 329,
    "protein": 19,
    "carbs": 7,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_607",
    "name": "Salmon and Potato Bowl",
    "calories": 552,
    "protein": 32,
    "carbs": 52,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_608",
    "name": "Classic Beef Salad",
    "calories": 521,
    "protein": 24,
    "carbs": 5,
    "fat": 45,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_610",
    "name": "Creamy Eggplant Pasta",
    "calories": 420,
    "protein": 20,
    "carbs": 58,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_611",
    "name": "Shrimp and Sweet Potato Bowl",
    "calories": 576,
    "protein": 49,
    "carbs": 41,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_612",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 343,
    "protein": 18,
    "carbs": 43,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_613",
    "name": "Spicy Tuna Tacos",
    "calories": 494,
    "protein": 19,
    "carbs": 73,
    "fat": 14,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_614",
    "name": "Classic Salmon Salad",
    "calories": 548,
    "protein": 25,
    "carbs": 13,
    "fat": 44,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_615",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 430,
    "protein": 24,
    "carbs": 61,
    "fat": 10,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_616",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 384,
    "protein": 11,
    "carbs": 31,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_617",
    "name": "Classic Turkey Salad",
    "calories": 376,
    "protein": 21,
    "carbs": 10,
    "fat": 28,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_619",
    "name": "Turkey and Quinoa Bowl",
    "calories": 617,
    "protein": 55,
    "carbs": 43,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_620",
    "name": "Spicy Turkey Tacos",
    "calories": 581,
    "protein": 25,
    "carbs": 64,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_621",
    "name": "Creamy Zucchini Pasta",
    "calories": 472,
    "protein": 23,
    "carbs": 68,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_622",
    "name": "Classic Salmon Salad",
    "calories": 333,
    "protein": 22,
    "carbs": 14,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_623",
    "name": "Classic Turkey Salad",
    "calories": 429,
    "protein": 19,
    "carbs": 5,
    "fat": 37,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_624",
    "name": "Creamy Spinach Pasta",
    "calories": 315,
    "protein": 11,
    "carbs": 43,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_625",
    "name": "Classic Shrimp Salad",
    "calories": 359,
    "protein": 10,
    "carbs": 10,
    "fat": 31,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_626",
    "name": "Classic Chicken Salad",
    "calories": 442,
    "protein": 16,
    "carbs": 9,
    "fat": 38,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_627",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 290,
    "protein": 14,
    "carbs": 36,
    "fat": 10,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_628",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 451,
    "protein": 11,
    "carbs": 68,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_630",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 487,
    "protein": 12,
    "carbs": 67,
    "fat": 19,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_631",
    "name": "Creamy Zucchini Pasta",
    "calories": 519,
    "protein": 22,
    "carbs": 74,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_632",
    "name": "Creamy Zucchini Pasta",
    "calories": 412,
    "protein": 19,
    "carbs": 57,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_633",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 588,
    "protein": 48,
    "carbs": 45,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_634",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 423,
    "protein": 25,
    "carbs": 38,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_635",
    "name": "Roasted Spinach with Quinoa",
    "calories": 434,
    "protein": 22,
    "carbs": 46,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_636",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 469,
    "protein": 17,
    "carbs": 44,
    "fat": 25,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_637",
    "name": "Tuna and Quinoa Bowl",
    "calories": 432,
    "protein": 31,
    "carbs": 41,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_638",
    "name": "Shrimp and Noodle Bowl",
    "calories": 493,
    "protein": 32,
    "carbs": 44,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_639",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 455,
    "protein": 12,
    "carbs": 68,
    "fat": 15,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_640",
    "name": "Roasted Spinach with Quinoa",
    "calories": 374,
    "protein": 14,
    "carbs": 57,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_643",
    "name": "Chicken and Sweet Potato Bowl",
    "calories": 561,
    "protein": 53,
    "carbs": 49,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_644",
    "name": "Turkey and Quinoa Bowl",
    "calories": 468,
    "protein": 47,
    "carbs": 43,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_645",
    "name": "Creamy Zucchini Pasta",
    "calories": 510,
    "protein": 21,
    "carbs": 57,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_646",
    "name": "Creamy Cauliflower Pasta",
    "calories": 370,
    "protein": 17,
    "carbs": 44,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_647",
    "name": "Creamy Zucchini Pasta",
    "calories": 505,
    "protein": 23,
    "carbs": 74,
    "fat": 13,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_648",
    "name": "Spicy Salmon Tacos",
    "calories": 455,
    "protein": 22,
    "carbs": 49,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_649",
    "name": "Creamy Spinach Pasta",
    "calories": 294,
    "protein": 12,
    "carbs": 30,
    "fat": 14,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_650",
    "name": "Chicken and Quinoa Bowl",
    "calories": 524,
    "protein": 49,
    "carbs": 55,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_651",
    "name": "Creamy Spinach Pasta",
    "calories": 318,
    "protein": 10,
    "carbs": 38,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_652",
    "name": "Classic Salmon Salad",
    "calories": 437,
    "protein": 16,
    "carbs": 10,
    "fat": 37,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_653",
    "name": "Classic Salmon Salad",
    "calories": 484,
    "protein": 15,
    "carbs": 7,
    "fat": 44,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_654",
    "name": "Classic Turkey Salad",
    "calories": 490,
    "protein": 18,
    "carbs": 10,
    "fat": 42,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_655",
    "name": "Spicy Chicken Tacos",
    "calories": 497,
    "protein": 20,
    "carbs": 66,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_656",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 611,
    "protein": 55,
    "carbs": 64,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_657",
    "name": "Classic Tuna Salad",
    "calories": 519,
    "protein": 25,
    "carbs": 8,
    "fat": 43,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_658",
    "name": "Spicy Shrimp Tacos",
    "calories": 341,
    "protein": 19,
    "carbs": 37,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_659",
    "name": "Spicy Salmon Tacos",
    "calories": 442,
    "protein": 21,
    "carbs": 58,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_660",
    "name": "Creamy Zucchini Pasta",
    "calories": 497,
    "protein": 22,
    "carbs": 46,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_661",
    "name": "Creamy Mushroom Pasta",
    "calories": 491,
    "protein": 19,
    "carbs": 70,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_662",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 397,
    "protein": 25,
    "carbs": 45,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_663",
    "name": "Creamy Eggplant Pasta",
    "calories": 314,
    "protein": 13,
    "carbs": 34,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_664",
    "name": "Classic Turkey Salad",
    "calories": 330,
    "protein": 16,
    "carbs": 8,
    "fat": 26,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_665",
    "name": "Classic Tuna Salad",
    "calories": 441,
    "protein": 10,
    "carbs": 8,
    "fat": 41,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_668",
    "name": "Spicy Tuna Tacos",
    "calories": 435,
    "protein": 14,
    "carbs": 70,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_669",
    "name": "Spicy Tuna Tacos",
    "calories": 486,
    "protein": 11,
    "carbs": 61,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_670",
    "name": "Creamy Zucchini Pasta",
    "calories": 444,
    "protein": 13,
    "carbs": 71,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_671",
    "name": "Beef and Noodle Bowl",
    "calories": 561,
    "protein": 47,
    "carbs": 37,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_672",
    "name": "Classic Beef Salad",
    "calories": 349,
    "protein": 11,
    "carbs": 11,
    "fat": 29,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_673",
    "name": "Classic Shrimp Salad",
    "calories": 501,
    "protein": 24,
    "carbs": 9,
    "fat": 41,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_674",
    "name": "Classic Chicken Salad",
    "calories": 400,
    "protein": 18,
    "carbs": 10,
    "fat": 32,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_675",
    "name": "Creamy Zucchini Pasta",
    "calories": 343,
    "protein": 10,
    "carbs": 51,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_676",
    "name": "Classic Chicken Salad",
    "calories": 322,
    "protein": 16,
    "carbs": 6,
    "fat": 26,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_679",
    "name": "Creamy Eggplant Pasta",
    "calories": 383,
    "protein": 10,
    "carbs": 43,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_680",
    "name": "Classic Tuna Salad",
    "calories": 472,
    "protein": 24,
    "carbs": 13,
    "fat": 36,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_681",
    "name": "Classic Chicken Salad",
    "calories": 269,
    "protein": 14,
    "carbs": 6,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_682",
    "name": "Creamy Mushroom Pasta",
    "calories": 477,
    "protein": 15,
    "carbs": 75,
    "fat": 13,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_683",
    "name": "Spicy Chicken Tacos",
    "calories": 371,
    "protein": 11,
    "carbs": 39,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_684",
    "name": "Classic Beef Salad",
    "calories": 301,
    "protein": 14,
    "carbs": 5,
    "fat": 25,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_685",
    "name": "Creamy Eggplant Pasta",
    "calories": 507,
    "protein": 16,
    "carbs": 59,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_686",
    "name": "Creamy Eggplant Pasta",
    "calories": 468,
    "protein": 20,
    "carbs": 70,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_688",
    "name": "Creamy Cauliflower Pasta",
    "calories": 490,
    "protein": 25,
    "carbs": 48,
    "fat": 22,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_689",
    "name": "Classic Chicken Salad",
    "calories": 296,
    "protein": 11,
    "carbs": 9,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_690",
    "name": "Roasted Spinach with Quinoa",
    "calories": 362,
    "protein": 19,
    "carbs": 31,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_691",
    "name": "Creamy Spinach Pasta",
    "calories": 554,
    "protein": 23,
    "carbs": 75,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_693",
    "name": "Classic Beef Salad",
    "calories": 320,
    "protein": 21,
    "carbs": 5,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_694",
    "name": "Spicy Chicken Tacos",
    "calories": 377,
    "protein": 24,
    "carbs": 32,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_695",
    "name": "Creamy Zucchini Pasta",
    "calories": 571,
    "protein": 22,
    "carbs": 69,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_696",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 514,
    "protein": 11,
    "carbs": 68,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_697",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 431,
    "protein": 14,
    "carbs": 69,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_698",
    "name": "Spicy Chicken Tacos",
    "calories": 580,
    "protein": 20,
    "carbs": 71,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_699",
    "name": "Roasted Spinach with Quinoa",
    "calories": 431,
    "protein": 11,
    "carbs": 45,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_701",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 375,
    "protein": 14,
    "carbs": 37,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_702",
    "name": "Creamy Spinach Pasta",
    "calories": 360,
    "protein": 24,
    "carbs": 39,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_703",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 579,
    "protein": 55,
    "carbs": 38,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_704",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 470,
    "protein": 13,
    "carbs": 55,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_705",
    "name": "Creamy Eggplant Pasta",
    "calories": 326,
    "protein": 10,
    "carbs": 49,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_706",
    "name": "Spicy Beef Tacos",
    "calories": 489,
    "protein": 15,
    "carbs": 51,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_707",
    "name": "Classic Turkey Salad",
    "calories": 467,
    "protein": 22,
    "carbs": 7,
    "fat": 39,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_708",
    "name": "Creamy Cauliflower Pasta",
    "calories": 457,
    "protein": 13,
    "carbs": 72,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_709",
    "name": "Spicy Chicken Tacos",
    "calories": 314,
    "protein": 11,
    "carbs": 36,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_710",
    "name": "Classic Chicken Salad",
    "calories": 392,
    "protein": 18,
    "carbs": 8,
    "fat": 32,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_711",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 368,
    "protein": 22,
    "carbs": 34,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_713",
    "name": "Spicy Salmon Tacos",
    "calories": 529,
    "protein": 19,
    "carbs": 57,
    "fat": 25,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_714",
    "name": "Classic Shrimp Salad",
    "calories": 440,
    "protein": 24,
    "carbs": 14,
    "fat": 32,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_715",
    "name": "Tuna and Potato Bowl",
    "calories": 355,
    "protein": 33,
    "carbs": 31,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_716",
    "name": "Spicy Chicken Tacos",
    "calories": 428,
    "protein": 21,
    "carbs": 59,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_717",
    "name": "Classic Tuna Salad",
    "calories": 470,
    "protein": 22,
    "carbs": 10,
    "fat": 38,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_718",
    "name": "Classic Chicken Salad",
    "calories": 336,
    "protein": 22,
    "carbs": 8,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_719",
    "name": "Spicy Turkey Tacos",
    "calories": 433,
    "protein": 17,
    "carbs": 62,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_720",
    "name": "Creamy Eggplant Pasta",
    "calories": 467,
    "protein": 23,
    "carbs": 69,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_721",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 484,
    "protein": 18,
    "carbs": 67,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_722",
    "name": "Creamy Mushroom Pasta",
    "calories": 360,
    "protein": 23,
    "carbs": 31,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_723",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 506,
    "protein": 21,
    "carbs": 56,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_724",
    "name": "Turkey and Quinoa Bowl",
    "calories": 612,
    "protein": 31,
    "carbs": 68,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_725",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 420,
    "protein": 16,
    "carbs": 44,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_726",
    "name": "Classic Tuna Salad",
    "calories": 400,
    "protein": 12,
    "carbs": 7,
    "fat": 36,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_727",
    "name": "Creamy Eggplant Pasta",
    "calories": 426,
    "protein": 19,
    "carbs": 38,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_728",
    "name": "Creamy Mushroom Pasta",
    "calories": 327,
    "protein": 10,
    "carbs": 47,
    "fat": 11,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_729",
    "name": "Classic Beef Salad",
    "calories": 335,
    "protein": 13,
    "carbs": 10,
    "fat": 27,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_730",
    "name": "Spicy Chicken Tacos",
    "calories": 314,
    "protein": 17,
    "carbs": 30,
    "fat": 14,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_731",
    "name": "Creamy Mushroom Pasta",
    "calories": 420,
    "protein": 10,
    "carbs": 50,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_732",
    "name": "Classic Beef Salad",
    "calories": 413,
    "protein": 23,
    "carbs": 15,
    "fat": 29,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_733",
    "name": "Classic Tuna Salad",
    "calories": 459,
    "protein": 13,
    "carbs": 14,
    "fat": 39,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_734",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 342,
    "protein": 22,
    "carbs": 32,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_735",
    "name": "Creamy Eggplant Pasta",
    "calories": 433,
    "protein": 16,
    "carbs": 63,
    "fat": 13,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_736",
    "name": "Creamy Cauliflower Pasta",
    "calories": 311,
    "protein": 14,
    "carbs": 30,
    "fat": 15,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_737",
    "name": "Salmon and Noodle Bowl",
    "calories": 555,
    "protein": 47,
    "carbs": 49,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_738",
    "name": "Spicy Shrimp Tacos",
    "calories": 536,
    "protein": 25,
    "carbs": 55,
    "fat": 24,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_740",
    "name": "Classic Beef Salad",
    "calories": 311,
    "protein": 12,
    "carbs": 5,
    "fat": 27,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_741",
    "name": "Spicy Tuna Tacos",
    "calories": 325,
    "protein": 11,
    "carbs": 32,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_743",
    "name": "Shrimp and Quinoa Bowl",
    "calories": 545,
    "protein": 31,
    "carbs": 58,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_744",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 429,
    "protein": 10,
    "carbs": 41,
    "fat": 25,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_745",
    "name": "Roasted Spinach with Quinoa",
    "calories": 336,
    "protein": 10,
    "carbs": 38,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_746",
    "name": "Spicy Shrimp Tacos",
    "calories": 326,
    "protein": 10,
    "carbs": 40,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_747",
    "name": "Classic Turkey Salad",
    "calories": 369,
    "protein": 16,
    "carbs": 11,
    "fat": 29,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_748",
    "name": "Salmon and Sweet Potato Bowl",
    "calories": 658,
    "protein": 49,
    "carbs": 66,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_749",
    "name": "Classic Tuna Salad",
    "calories": 417,
    "protein": 24,
    "carbs": 15,
    "fat": 29,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_750",
    "name": "Creamy Spinach Pasta",
    "calories": 592,
    "protein": 21,
    "carbs": 73,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_751",
    "name": "Roasted Spinach with Quinoa",
    "calories": 531,
    "protein": 20,
    "carbs": 61,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_752",
    "name": "Spicy Shrimp Tacos",
    "calories": 452,
    "protein": 14,
    "carbs": 63,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_754",
    "name": "Classic Shrimp Salad",
    "calories": 481,
    "protein": 13,
    "carbs": 15,
    "fat": 41,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_755",
    "name": "Creamy Cauliflower Pasta",
    "calories": 525,
    "protein": 21,
    "carbs": 54,
    "fat": 25,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_756",
    "name": "Creamy Spinach Pasta",
    "calories": 449,
    "protein": 10,
    "carbs": 73,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_757",
    "name": "Spicy Beef Tacos",
    "calories": 463,
    "protein": 19,
    "carbs": 45,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_758",
    "name": "Roasted Spinach with Quinoa",
    "calories": 432,
    "protein": 11,
    "carbs": 61,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_759",
    "name": "Creamy Spinach Pasta",
    "calories": 354,
    "protein": 25,
    "carbs": 41,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_760",
    "name": "Classic Salmon Salad",
    "calories": 492,
    "protein": 17,
    "carbs": 7,
    "fat": 44,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_761",
    "name": "Spicy Shrimp Tacos",
    "calories": 453,
    "protein": 21,
    "carbs": 45,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_762",
    "name": "Creamy Mushroom Pasta",
    "calories": 506,
    "protein": 17,
    "carbs": 69,
    "fat": 18,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_763",
    "name": "Spicy Chicken Tacos",
    "calories": 415,
    "protein": 24,
    "carbs": 46,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_765",
    "name": "Salmon and Rice Bowl",
    "calories": 536,
    "protein": 53,
    "carbs": 54,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_766",
    "name": "Creamy Zucchini Pasta",
    "calories": 469,
    "protein": 22,
    "carbs": 57,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_767",
    "name": "Creamy Mushroom Pasta",
    "calories": 415,
    "protein": 13,
    "carbs": 39,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_768",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 503,
    "protein": 11,
    "carbs": 72,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_769",
    "name": "Classic Chicken Salad",
    "calories": 379,
    "protein": 11,
    "carbs": 14,
    "fat": 31,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_770",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 430,
    "protein": 10,
    "carbs": 75,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_771",
    "name": "Spicy Beef Tacos",
    "calories": 298,
    "protein": 10,
    "carbs": 33,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_772",
    "name": "Creamy Mushroom Pasta",
    "calories": 347,
    "protein": 23,
    "carbs": 39,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_773",
    "name": "Creamy Zucchini Pasta",
    "calories": 378,
    "protein": 15,
    "carbs": 39,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_774",
    "name": "Spicy Turkey Tacos",
    "calories": 436,
    "protein": 18,
    "carbs": 37,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_776",
    "name": "Shrimp and Noodle Bowl",
    "calories": 528,
    "protein": 33,
    "carbs": 54,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_777",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 486,
    "protein": 11,
    "carbs": 70,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_779",
    "name": "Creamy Eggplant Pasta",
    "calories": 368,
    "protein": 13,
    "carbs": 52,
    "fat": 12,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_780",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 436,
    "protein": 16,
    "carbs": 57,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_781",
    "name": "Creamy Cauliflower Pasta",
    "calories": 422,
    "protein": 22,
    "carbs": 52,
    "fat": 14,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_782",
    "name": "Salmon and Sweet Potato Bowl",
    "calories": 565,
    "protein": 43,
    "carbs": 42,
    "fat": 25,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_783",
    "name": "Beef and Quinoa Bowl",
    "calories": 541,
    "protein": 53,
    "carbs": 35,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_784",
    "name": "Classic Salmon Salad",
    "calories": 375,
    "protein": 15,
    "carbs": 9,
    "fat": 31,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_785",
    "name": "Roasted Spinach with Quinoa",
    "calories": 440,
    "protein": 10,
    "carbs": 64,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_786",
    "name": "Creamy Eggplant Pasta",
    "calories": 419,
    "protein": 14,
    "carbs": 39,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_787",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 378,
    "protein": 10,
    "carbs": 53,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_788",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 359,
    "protein": 22,
    "carbs": 43,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_789",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 528,
    "protein": 17,
    "carbs": 70,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_790",
    "name": "Classic Turkey Salad",
    "calories": 385,
    "protein": 25,
    "carbs": 15,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_791",
    "name": "Classic Chicken Salad",
    "calories": 313,
    "protein": 10,
    "carbs": 12,
    "fat": 25,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_792",
    "name": "Roasted Spinach with Quinoa",
    "calories": 504,
    "protein": 24,
    "carbs": 48,
    "fat": 24,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_793",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 395,
    "protein": 12,
    "carbs": 62,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_794",
    "name": "Spicy Beef Tacos",
    "calories": 557,
    "protein": 25,
    "carbs": 67,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_795",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 438,
    "protein": 13,
    "carbs": 74,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_796",
    "name": "Roasted Spinach with Quinoa",
    "calories": 282,
    "protein": 13,
    "carbs": 35,
    "fat": 10,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_797",
    "name": "Creamy Mushroom Pasta",
    "calories": 575,
    "protein": 25,
    "carbs": 67,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_798",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 471,
    "protein": 12,
    "carbs": 72,
    "fat": 15,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_799",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 459,
    "protein": 11,
    "carbs": 70,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_800",
    "name": "Turkey and Quinoa Bowl",
    "calories": 552,
    "protein": 42,
    "carbs": 60,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_801",
    "name": "Classic Beef Salad",
    "calories": 527,
    "protein": 23,
    "carbs": 12,
    "fat": 43,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_802",
    "name": "Roasted Spinach with Quinoa",
    "calories": 368,
    "protein": 14,
    "carbs": 33,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_803",
    "name": "Classic Turkey Salad",
    "calories": 408,
    "protein": 12,
    "carbs": 9,
    "fat": 36,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_804",
    "name": "Creamy Mushroom Pasta",
    "calories": 516,
    "protein": 11,
    "carbs": 73,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_806",
    "name": "Spicy Salmon Tacos",
    "calories": 435,
    "protein": 18,
    "carbs": 48,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_807",
    "name": "Classic Shrimp Salad",
    "calories": 343,
    "protein": 21,
    "carbs": 13,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_808",
    "name": "Creamy Spinach Pasta",
    "calories": 436,
    "protein": 17,
    "carbs": 38,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_809",
    "name": "Classic Turkey Salad",
    "calories": 288,
    "protein": 14,
    "carbs": 13,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_810",
    "name": "Spicy Tuna Tacos",
    "calories": 511,
    "protein": 14,
    "carbs": 71,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_811",
    "name": "Classic Salmon Salad",
    "calories": 280,
    "protein": 17,
    "carbs": 8,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_812",
    "name": "Turkey and Potato Bowl",
    "calories": 610,
    "protein": 48,
    "carbs": 64,
    "fat": 18,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_813",
    "name": "Creamy Zucchini Pasta",
    "calories": 359,
    "protein": 18,
    "carbs": 38,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_814",
    "name": "Classic Chicken Salad",
    "calories": 411,
    "protein": 14,
    "carbs": 10,
    "fat": 35,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_815",
    "name": "Creamy Cauliflower Pasta",
    "calories": 449,
    "protein": 25,
    "carbs": 40,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_816",
    "name": "Beef and Potato Bowl",
    "calories": 506,
    "protein": 44,
    "carbs": 33,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_817",
    "name": "Chicken and Noodle Bowl",
    "calories": 478,
    "protein": 53,
    "carbs": 44,
    "fat": 10,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_818",
    "name": "Classic Salmon Salad",
    "calories": 365,
    "protein": 11,
    "carbs": 6,
    "fat": 33,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_819",
    "name": "Turkey and Potato Bowl",
    "calories": 483,
    "protein": 44,
    "carbs": 52,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_822",
    "name": "Creamy Cauliflower Pasta",
    "calories": 413,
    "protein": 11,
    "carbs": 63,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_823",
    "name": "Spicy Salmon Tacos",
    "calories": 438,
    "protein": 12,
    "carbs": 66,
    "fat": 14,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_825",
    "name": "Creamy Spinach Pasta",
    "calories": 409,
    "protein": 10,
    "carbs": 63,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_826",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 427,
    "protein": 18,
    "carbs": 64,
    "fat": 11,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_827",
    "name": "Creamy Cauliflower Pasta",
    "calories": 520,
    "protein": 22,
    "carbs": 54,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_828",
    "name": "Classic Salmon Salad",
    "calories": 410,
    "protein": 11,
    "carbs": 6,
    "fat": 38,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_830",
    "name": "Roasted Spinach with Quinoa",
    "calories": 544,
    "protein": 19,
    "carbs": 72,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_831",
    "name": "Creamy Mushroom Pasta",
    "calories": 380,
    "protein": 18,
    "carbs": 41,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_832",
    "name": "Spicy Chicken Tacos",
    "calories": 365,
    "protein": 11,
    "carbs": 33,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_833",
    "name": "Creamy Eggplant Pasta",
    "calories": 387,
    "protein": 16,
    "carbs": 56,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_834",
    "name": "Beef and Noodle Bowl",
    "calories": 371,
    "protein": 38,
    "carbs": 30,
    "fat": 11,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_837",
    "name": "Spicy Shrimp Tacos",
    "calories": 385,
    "protein": 24,
    "carbs": 43,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_838",
    "name": "Chicken and Noodle Bowl",
    "calories": 518,
    "protein": 38,
    "carbs": 51,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_839",
    "name": "Spicy Salmon Tacos",
    "calories": 417,
    "protein": 11,
    "carbs": 46,
    "fat": 21,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_840",
    "name": "Classic Chicken Salad",
    "calories": 384,
    "protein": 25,
    "carbs": 8,
    "fat": 28,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_841",
    "name": "Classic Tuna Salad",
    "calories": 334,
    "protein": 20,
    "carbs": 14,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_842",
    "name": "Creamy Cauliflower Pasta",
    "calories": 305,
    "protein": 10,
    "carbs": 37,
    "fat": 13,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_843",
    "name": "Spicy Shrimp Tacos",
    "calories": 342,
    "protein": 19,
    "carbs": 35,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_844",
    "name": "Classic Shrimp Salad",
    "calories": 486,
    "protein": 25,
    "carbs": 11,
    "fat": 38,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_845",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 345,
    "protein": 15,
    "carbs": 42,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_846",
    "name": "Turkey and Potato Bowl",
    "calories": 476,
    "protein": 34,
    "carbs": 58,
    "fat": 12,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_848",
    "name": "Spicy Beef Tacos",
    "calories": 490,
    "protein": 12,
    "carbs": 61,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_849",
    "name": "Chicken and Potato Bowl",
    "calories": 591,
    "protein": 39,
    "carbs": 66,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_850",
    "name": "Classic Shrimp Salad",
    "calories": 421,
    "protein": 14,
    "carbs": 8,
    "fat": 37,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_851",
    "name": "Creamy Eggplant Pasta",
    "calories": 487,
    "protein": 25,
    "carbs": 45,
    "fat": 23,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_852",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 543,
    "protein": 15,
    "carbs": 69,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_853",
    "name": "Classic Salmon Salad",
    "calories": 508,
    "protein": 25,
    "carbs": 12,
    "fat": 40,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_854",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 482,
    "protein": 15,
    "carbs": 56,
    "fat": 22,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_855",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 446,
    "protein": 10,
    "carbs": 70,
    "fat": 14,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_856",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 437,
    "protein": 10,
    "carbs": 70,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_857",
    "name": "Classic Beef Salad",
    "calories": 474,
    "protein": 12,
    "carbs": 12,
    "fat": 42,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_859",
    "name": "Spicy Tuna Tacos",
    "calories": 344,
    "protein": 22,
    "carbs": 37,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_860",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 515,
    "protein": 25,
    "carbs": 52,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_861",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 468,
    "protein": 11,
    "carbs": 70,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_862",
    "name": "Classic Tuna Salad",
    "calories": 346,
    "protein": 10,
    "carbs": 9,
    "fat": 30,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_863",
    "name": "Shrimp and Noodle Bowl",
    "calories": 561,
    "protein": 54,
    "carbs": 48,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_864",
    "name": "Classic Chicken Salad",
    "calories": 483,
    "protein": 18,
    "carbs": 6,
    "fat": 43,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_865",
    "name": "Salmon and Noodle Bowl",
    "calories": 653,
    "protein": 42,
    "carbs": 74,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_866",
    "name": "Spicy Chicken Tacos",
    "calories": 485,
    "protein": 24,
    "carbs": 50,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_867",
    "name": "Spicy Shrimp Tacos",
    "calories": 315,
    "protein": 19,
    "carbs": 35,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_868",
    "name": "Salmon and Rice Bowl",
    "calories": 419,
    "protein": 41,
    "carbs": 39,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_869",
    "name": "Spicy Salmon Tacos",
    "calories": 407,
    "protein": 11,
    "carbs": 48,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_870",
    "name": "Creamy Zucchini Pasta",
    "calories": 543,
    "protein": 23,
    "carbs": 70,
    "fat": 19,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_871",
    "name": "Roasted Spinach with Quinoa",
    "calories": 529,
    "protein": 18,
    "carbs": 58,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_872",
    "name": "Creamy Eggplant Pasta",
    "calories": 373,
    "protein": 16,
    "carbs": 30,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_873",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 375,
    "protein": 11,
    "carbs": 58,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_874",
    "name": "Classic Turkey Salad",
    "calories": 378,
    "protein": 19,
    "carbs": 8,
    "fat": 30,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_875",
    "name": "Shrimp and Sweet Potato Bowl",
    "calories": 608,
    "protein": 41,
    "carbs": 75,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_876",
    "name": "Beef and Rice Bowl",
    "calories": 476,
    "protein": 53,
    "carbs": 39,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_877",
    "name": "Beef and Sweet Potato Bowl",
    "calories": 664,
    "protein": 55,
    "carbs": 66,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_878",
    "name": "Classic Turkey Salad",
    "calories": 533,
    "protein": 17,
    "carbs": 15,
    "fat": 45,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_879",
    "name": "Tuna and Sweet Potato Bowl",
    "calories": 441,
    "protein": 44,
    "carbs": 37,
    "fat": 13,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_880",
    "name": "Creamy Mushroom Pasta",
    "calories": 480,
    "protein": 18,
    "carbs": 75,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_881",
    "name": "Creamy Zucchini Pasta",
    "calories": 457,
    "protein": 10,
    "carbs": 66,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_882",
    "name": "Tuna and Quinoa Bowl",
    "calories": 537,
    "protein": 46,
    "carbs": 50,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_883",
    "name": "Spicy Beef Tacos",
    "calories": 533,
    "protein": 22,
    "carbs": 73,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_884",
    "name": "Creamy Zucchini Pasta",
    "calories": 503,
    "protein": 14,
    "carbs": 60,
    "fat": 23,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_885",
    "name": "Beef and Potato Bowl",
    "calories": 511,
    "protein": 33,
    "carbs": 52,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_886",
    "name": "Classic Chicken Salad",
    "calories": 340,
    "protein": 25,
    "carbs": 6,
    "fat": 24,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_887",
    "name": "Spicy Beef Tacos",
    "calories": 379,
    "protein": 11,
    "carbs": 41,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_888",
    "name": "Creamy Cauliflower Pasta",
    "calories": 525,
    "protein": 13,
    "carbs": 71,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_889",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 357,
    "protein": 10,
    "carbs": 41,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_890",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 469,
    "protein": 20,
    "carbs": 41,
    "fat": 25,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_891",
    "name": "Shrimp and Noodle Bowl",
    "calories": 633,
    "protein": 53,
    "carbs": 67,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_892",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 524,
    "protein": 13,
    "carbs": 73,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_893",
    "name": "Creamy Cauliflower Pasta",
    "calories": 363,
    "protein": 19,
    "carbs": 47,
    "fat": 11,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_894",
    "name": "Roasted Spinach with Quinoa",
    "calories": 507,
    "protein": 17,
    "carbs": 58,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_895",
    "name": "Creamy Zucchini Pasta",
    "calories": 403,
    "protein": 13,
    "carbs": 63,
    "fat": 11,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_896",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 393,
    "protein": 13,
    "carbs": 47,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_897",
    "name": "Turkey and Potato Bowl",
    "calories": 483,
    "protein": 44,
    "carbs": 34,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_898",
    "name": "Creamy Cauliflower Pasta",
    "calories": 423,
    "protein": 25,
    "carbs": 47,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_899",
    "name": "Creamy Eggplant Pasta",
    "calories": 316,
    "protein": 17,
    "carbs": 35,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_900",
    "name": "Salmon and Noodle Bowl",
    "calories": 468,
    "protein": 48,
    "carbs": 42,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_901",
    "name": "Roasted Spinach with Quinoa",
    "calories": 310,
    "protein": 11,
    "carbs": 44,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_902",
    "name": "Spicy Chicken Tacos",
    "calories": 373,
    "protein": 15,
    "carbs": 40,
    "fat": 17,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_903",
    "name": "Classic Beef Salad",
    "calories": 295,
    "protein": 15,
    "carbs": 7,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_905",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 441,
    "protein": 24,
    "carbs": 30,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_906",
    "name": "Beef and Noodle Bowl",
    "calories": 450,
    "protein": 30,
    "carbs": 60,
    "fat": 10,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_907",
    "name": "Creamy Eggplant Pasta",
    "calories": 441,
    "protein": 11,
    "carbs": 61,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_908",
    "name": "Creamy Eggplant Pasta",
    "calories": 371,
    "protein": 16,
    "carbs": 43,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_909",
    "name": "Turkey and Sweet Potato Bowl",
    "calories": 557,
    "protein": 52,
    "carbs": 58,
    "fat": 13,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_910",
    "name": "Classic Beef Salad",
    "calories": 526,
    "protein": 24,
    "carbs": 13,
    "fat": 42,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_911",
    "name": "Shrimp and Potato Bowl",
    "calories": 561,
    "protein": 30,
    "carbs": 72,
    "fat": 17,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_912",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 378,
    "protein": 24,
    "carbs": 48,
    "fat": 10,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_913",
    "name": "Classic Chicken Salad",
    "calories": 463,
    "protein": 14,
    "carbs": 5,
    "fat": 43,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_914",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 440,
    "protein": 13,
    "carbs": 70,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_915",
    "name": "Turkey and Potato Bowl",
    "calories": 556,
    "protein": 50,
    "carbs": 62,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_916",
    "name": "Spicy Chicken Tacos",
    "calories": 420,
    "protein": 10,
    "carbs": 50,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_917",
    "name": "Creamy Eggplant Pasta",
    "calories": 421,
    "protein": 11,
    "carbs": 56,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_918",
    "name": "Creamy Eggplant Pasta",
    "calories": 413,
    "protein": 18,
    "carbs": 38,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_919",
    "name": "Spicy Beef Tacos",
    "calories": 343,
    "protein": 18,
    "carbs": 43,
    "fat": 11,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_920",
    "name": "Creamy Spinach Pasta",
    "calories": 431,
    "protein": 20,
    "carbs": 54,
    "fat": 15,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_921",
    "name": "Roasted Spinach with Quinoa",
    "calories": 533,
    "protein": 18,
    "carbs": 59,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_922",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 433,
    "protein": 17,
    "carbs": 44,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_923",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 461,
    "protein": 15,
    "carbs": 53,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_924",
    "name": "Spicy Shrimp Tacos",
    "calories": 522,
    "protein": 19,
    "carbs": 71,
    "fat": 18,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_925",
    "name": "Salmon and Quinoa Bowl",
    "calories": 504,
    "protein": 46,
    "carbs": 44,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_926",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 495,
    "protein": 18,
    "carbs": 63,
    "fat": 19,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_927",
    "name": "Salmon and Noodle Bowl",
    "calories": 569,
    "protein": 55,
    "carbs": 58,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_928",
    "name": "Chicken and Noodle Bowl",
    "calories": 645,
    "protein": 52,
    "carbs": 53,
    "fat": 25,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_929",
    "name": "Creamy Cauliflower Pasta",
    "calories": 492,
    "protein": 22,
    "carbs": 65,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_930",
    "name": "Spicy Salmon Tacos",
    "calories": 464,
    "protein": 25,
    "carbs": 55,
    "fat": 16,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_931",
    "name": "Classic Turkey Salad",
    "calories": 313,
    "protein": 21,
    "carbs": 10,
    "fat": 21,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_932",
    "name": "Creamy Eggplant Pasta",
    "calories": 461,
    "protein": 13,
    "carbs": 73,
    "fat": 13,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_933",
    "name": "Spicy Beef Tacos",
    "calories": 417,
    "protein": 20,
    "carbs": 55,
    "fat": 13,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_934",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 479,
    "protein": 24,
    "carbs": 53,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_936",
    "name": "Classic Tuna Salad",
    "calories": 415,
    "protein": 14,
    "carbs": 11,
    "fat": 35,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_937",
    "name": "Spicy Shrimp Tacos",
    "calories": 368,
    "protein": 17,
    "carbs": 30,
    "fat": 20,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_938",
    "name": "Beef and Potato Bowl",
    "calories": 541,
    "protein": 37,
    "carbs": 51,
    "fat": 21,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_939",
    "name": "Classic Beef Salad",
    "calories": 508,
    "protein": 24,
    "carbs": 13,
    "fat": 40,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_940",
    "name": "Spicy Turkey Tacos",
    "calories": 424,
    "protein": 19,
    "carbs": 42,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_941",
    "name": "Tuna and Quinoa Bowl",
    "calories": 463,
    "protein": 42,
    "carbs": 31,
    "fat": 19,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "quinoa",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_942",
    "name": "Classic Tuna Salad",
    "calories": 288,
    "protein": 18,
    "carbs": 9,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_944",
    "name": "Spicy Beef Tacos",
    "calories": 571,
    "protein": 25,
    "carbs": 66,
    "fat": 23,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_946",
    "name": "Shrimp and Sweet Potato Bowl",
    "calories": 472,
    "protein": 35,
    "carbs": 56,
    "fat": 12,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "sweet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_947",
    "name": "Classic Salmon Salad",
    "calories": 315,
    "protein": 12,
    "carbs": 6,
    "fat": 27,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_948",
    "name": "Salmon and Rice Bowl",
    "calories": 502,
    "protein": 41,
    "carbs": 44,
    "fat": 18,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_950",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 544,
    "protein": 17,
    "carbs": 74,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_951",
    "name": "Spicy Beef Tacos",
    "calories": 415,
    "protein": 14,
    "carbs": 56,
    "fat": 15,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1559649823-cd4628902249?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_952",
    "name": "Spicy Shrimp Tacos",
    "calories": 346,
    "protein": 18,
    "carbs": 46,
    "fat": 10,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_953",
    "name": "Shrimp and Potato Bowl",
    "calories": 651,
    "protein": 50,
    "carbs": 61,
    "fat": 23,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "russet potatoes",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_954",
    "name": "Roasted Eggplant with Quinoa",
    "calories": 447,
    "protein": 14,
    "carbs": 64,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "eggplant",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_955",
    "name": "Classic Beef Salad",
    "calories": 330,
    "protein": 14,
    "carbs": 10,
    "fat": 26,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground beef",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_956",
    "name": "Roasted Zucchini with Quinoa",
    "calories": 478,
    "protein": 15,
    "carbs": 73,
    "fat": 14,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "zucchini",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_957",
    "name": "Creamy Cauliflower Pasta",
    "calories": 408,
    "protein": 11,
    "carbs": 46,
    "fat": 20,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_958",
    "name": "Classic Turkey Salad",
    "calories": 314,
    "protein": 14,
    "carbs": 15,
    "fat": 22,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_959",
    "name": "Spicy Chicken Tacos",
    "calories": 390,
    "protein": 24,
    "carbs": 51,
    "fat": 10,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_960",
    "name": "Creamy Eggplant Pasta",
    "calories": 372,
    "protein": 13,
    "carbs": 53,
    "fat": 12,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_961",
    "name": "Classic Turkey Salad",
    "calories": 441,
    "protein": 24,
    "carbs": 12,
    "fat": 33,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_962",
    "name": "Creamy Zucchini Pasta",
    "calories": 497,
    "protein": 20,
    "carbs": 57,
    "fat": 21,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_965",
    "name": "Classic Salmon Salad",
    "calories": 382,
    "protein": 20,
    "carbs": 8,
    "fat": 30,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_966",
    "name": "Creamy Mushroom Pasta",
    "calories": 435,
    "protein": 22,
    "carbs": 53,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_967",
    "name": "Creamy Zucchini Pasta",
    "calories": 501,
    "protein": 21,
    "carbs": 48,
    "fat": 25,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_968",
    "name": "Chicken and Rice Bowl",
    "calories": 676,
    "protein": 49,
    "carbs": 75,
    "fat": 20,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "white rice",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_969",
    "name": "Tuna and Noodle Bowl",
    "calories": 448,
    "protein": 39,
    "carbs": 46,
    "fat": 12,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "high-protein",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "rice noodles",
      "broccoli",
      "soy sauce"
    ],
    "cuisineType": "asian",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_970",
    "name": "Creamy Cauliflower Pasta",
    "calories": 405,
    "protein": 18,
    "carbs": 36,
    "fat": 21,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_971",
    "name": "Creamy Spinach Pasta",
    "calories": 549,
    "protein": 25,
    "carbs": 65,
    "fat": 21,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_972",
    "name": "Creamy Zucchini Pasta",
    "calories": 392,
    "protein": 11,
    "carbs": 33,
    "fat": 24,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_973",
    "name": "Creamy Mushroom Pasta",
    "calories": 444,
    "protein": 12,
    "carbs": 63,
    "fat": 16,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_974",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 531,
    "protein": 15,
    "carbs": 66,
    "fat": 23,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_975",
    "name": "Roasted Spinach with Quinoa",
    "calories": 514,
    "protein": 19,
    "carbs": 60,
    "fat": 22,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_976",
    "name": "Spicy Shrimp Tacos",
    "calories": 565,
    "protein": 13,
    "carbs": 72,
    "fat": 25,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "shrimp",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1618184479302-1abc8d3b6f4d?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_977",
    "name": "Creamy Eggplant Pasta",
    "calories": 318,
    "protein": 18,
    "carbs": 39,
    "fat": 10,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_978",
    "name": "Creamy Mushroom Pasta",
    "calories": 436,
    "protein": 23,
    "carbs": 50,
    "fat": 16,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_980",
    "name": "Creamy Mushroom Pasta",
    "calories": 401,
    "protein": 10,
    "carbs": 52,
    "fat": 17,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cremini mushrooms",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_981",
    "name": "Creamy Spinach Pasta",
    "calories": 552,
    "protein": 20,
    "carbs": 73,
    "fat": 20,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_982",
    "name": "Roasted Spinach with Quinoa",
    "calories": 521,
    "protein": 17,
    "carbs": 75,
    "fat": 17,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "spinach",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_983",
    "name": "Creamy Cauliflower Pasta",
    "calories": 395,
    "protein": 24,
    "carbs": 32,
    "fat": 19,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "cauliflower florets",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_984",
    "name": "Creamy Eggplant Pasta",
    "calories": 419,
    "protein": 21,
    "carbs": 32,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_985",
    "name": "Creamy Eggplant Pasta",
    "calories": 491,
    "protein": 24,
    "carbs": 65,
    "fat": 15,
    "mealType": [
      "lunch"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_986",
    "name": "Classic Tuna Salad",
    "calories": 468,
    "protein": 18,
    "carbs": 9,
    "fat": 40,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_987",
    "name": "Spicy Turkey Tacos",
    "calories": 378,
    "protein": 23,
    "carbs": 31,
    "fat": 18,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_988",
    "name": "Spicy Turkey Tacos",
    "calories": 511,
    "protein": 23,
    "carbs": 62,
    "fat": 19,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_989",
    "name": "Spicy Salmon Tacos",
    "calories": 332,
    "protein": 12,
    "carbs": 35,
    "fat": 16,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "salmon fillet",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1599599810694-b5ac4dd94b61?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_990",
    "name": "Classic Turkey Salad",
    "calories": 535,
    "protein": 22,
    "carbs": 15,
    "fat": 43,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "ground turkey",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_991",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 430,
    "protein": 20,
    "carbs": 38,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_992",
    "name": "Spicy Chicken Tacos",
    "calories": 304,
    "protein": 17,
    "carbs": 32,
    "fat": 12,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_993",
    "name": "Spicy Chicken Tacos",
    "calories": 487,
    "protein": 15,
    "carbs": 73,
    "fat": 15,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_994",
    "name": "Creamy Eggplant Pasta",
    "calories": 477,
    "protein": 13,
    "carbs": 68,
    "fat": 17,
    "mealType": [
      "breakfast"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "eggplant",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_995",
    "name": "Roasted Mushroom with Quinoa",
    "calories": 503,
    "protein": 16,
    "carbs": 58,
    "fat": 23,
    "mealType": [
      "breakfast",
      "snack"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cremini mushrooms",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_996",
    "name": "Roasted Cauliflower with Quinoa",
    "calories": 564,
    "protein": 14,
    "carbs": 73,
    "fat": 24,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "vegan",
      "vegetarian",
      "gluten-free"
    ],
    "isVegetarian": true,
    "isVegan": true,
    "mainIngredients": [
      "cauliflower florets",
      "quinoa",
      "olive oil",
      "lemon",
      "tahini"
    ],
    "cuisineType": "mediterranean",
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_997",
    "name": "Classic Chicken Salad",
    "calories": 302,
    "protein": 15,
    "carbs": 11,
    "fat": 22,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "low-carb",
      "keto"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumbers",
      "balsamic vinaigrette"
    ],
    "cuisineType": "american",
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_998",
    "name": "Spicy Tuna Tacos",
    "calories": 344,
    "protein": 11,
    "carbs": 39,
    "fat": 16,
    "mealType": [
      "lunch",
      "dinner"
    ],
    "tags": [
      "quick-meal",
      "dairy-free"
    ],
    "isVegetarian": false,
    "isVegan": false,
    "mainIngredients": [
      "canned tuna",
      "corn tortillas",
      "salsa",
      "cilantro",
      "lime"
    ],
    "cuisineType": "mexican",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_999",
    "name": "Creamy Zucchini Pasta",
    "calories": 389,
    "protein": 20,
    "carbs": 39,
    "fat": 17,
    "mealType": [
      "dinner"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "zucchini",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  },
  {
    "_id": "m_1000",
    "name": "Creamy Spinach Pasta",
    "calories": 511,
    "protein": 12,
    "carbs": 73,
    "fat": 19,
    "mealType": [
      "lunch",
      "snack"
    ],
    "tags": [
      "vegetarian",
      "comfort-food"
    ],
    "isVegetarian": true,
    "isVegan": false,
    "mainIngredients": [
      "penne pasta",
      "spinach",
      "heavy cream",
      "parmesan",
      "garlic"
    ],
    "cuisineType": "italian",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
  }
];

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set in .env');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to MongoDB');

  const db = client.db('fitness-app');
  const collection = db.collection('meals');

  const deleted = await collection.deleteMany({});
  console.log(`Cleared ${deleted.deletedCount} existing meals`);

  const result = await collection.insertMany(meals);
  console.log(`Seeded ${result.insertedCount} meals successfully`);

  await client.close();
  console.log('Done');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});



