Product Name: Root & Hearth or Pure Plate 
Tagline: Vegan, Gluten-Free & Dairy-Free Cuisine in Memphis
Root & Hearth: to connect with our audience and evoke feelings of warmth, nourishment, and community
Brand Colors: 
●●●●
Problem Statement:

The Big Problem: Eating Out with Special Diets in Memphis is a Real Challenge

Competition: HappyCow, Fig (Food Is Good), Spokin, AllergyEats, Mainstream Restaurant Discovery Platforms with Advanced Filters

SWOT Analysis: 
Strengths: Niche focus, Solve the problem of misleading restaurant tags and inaccurate dietary information, AI/ML Powered Core, Reducing Research Burden, Semantic Search
Weakness: Limited Data Scope, Dependency on Data Quality
Opportunities: Partnerships, Expansion to Other Dietary Needs, Frustration with Existing Solutions
Threats: Competition from Established Platforms, User Adoption, Maintaining Accuracy

Users

For Travelers Like Trish: Trish is traveling 7 hours from Kentucky to visit her family in Alabama. As she is passing through Memphis, she wants to quickly find a vegan restaurant, and resume traveling before sunset. What seemed simple, turned into 40 minutes of research. Trish rummaged through websites such as grubhub, 901 memphis, reddit, and google to find a vegan restaurant which ultimately put her behind schedule. 

For New Vegans Like John: It’s a new year and one of John’s goals is to eat healthier. To do this, John attempts a vegan diet by only buying fruits, grains, oats, and vegetables. John's first week of his vegan lifestyle is perfect, however, by the second week he is tired of cooking every meal. One day, while running errands, he wanted to grab something quick to eat but found difficulty locating a nearby vegan restaurant in his area. 

⭐ For International Visitors Like Anya: Anya is an experienced international traveler, often visiting major cities for work. While she enjoys experiencing local cultures through food, her family follows a strict vegetarian diet for religious and personal reasons. She's also mindful of gluten due to the mild sensitivity she's noticed when traveling. Anya speaks fluent English, but subtleties in menu descriptions or casual local slang can sometimes be confusing. She relies on technology for navigation and information while abroad.


Pain Points 
Users struggle to find genuinely suitable dining options due to:
Inaccurate Dietary Information: Restaurants often misrepresent their dietary offerings, leading to misleading search results (e.g., a 'vegan' hashtag for a single salad in a steakhouse).
Overwhelming Search Filters: Users face difficulty searching through numerous irrelevant tags to locate specific dietary needs like 'vegan' or 'vegetarian.'
Time-Consuming Validation: Extensive manual research (visiting multiple websites, reviewing menus and 'About Us' sections) is required to verify if a restaurant truly meets their dietary restrictions.
Missed Opportunities: Users frequently overlook restaurants that genuinely specialize in their dietary needs due to poor discoverability and limited, unspecific tagging.
Solution: 

Create a local restaurant directory or review site for restaurants that specialize in dietary restrictions
Include a chatbot that can search for restaurants that cater to users needs
Stretch Goal: Ai that can analyze online menus to identify suitable dishes.

Goals: 

Make it easier for users to locate restaurants and foods that specialize in dietary restrictions.
Increase visibility of restaurants that specialize in dietary restrictions.
Encourage news users to try dietary restrictions
Be the source of dietary restricted restaurants in Memphis


Data Pre-Processing Approach (Work In Progress)

Research Sources: 
 https://www.ediblememphis.com/vegan-dining-guide
 https://choose901.com/eat-your-veggies-a-vegetarian-vegan-guide-to-memphis/
 Memphis Restaurants | Memphis Travel
Eat Your Veggies: A Vegetarian, Vegan Guide to Memphis - Choose901
Poll: 🌱 Pure Plate - Google Forms
Potential Sources: API’s from Google Places, Yelp, and Zomato
Research Plans: Interview people that have dietary restrictions and restaurants that specialize in it. Attend the Planet Rock Vegan Festival August 5th 

Data Format: XML 
To store detailed Menu Information
Legible for humans and machine
Hierarchical and Tree-Like Structure
Question: Could JSON potentially be a better option ?
Comments: I attempted web scraping using ParseHub, chatgpt, and manually adding data. 
This is a work in progress.

Technical Description of the AI Model (umm this might need to be rewritten)
Prepared restaurant data from a CSV, using the Category as text input and Vegan as the target label, then encoded these labels numerically. The data was split for training and testing. Text from the "Category" column was tokenized using a DistilBERT tokenizer to prepare it for the model.

Evaluation of Model:  Achieved high overall accuracy of 0.96 on test data. The Vegan Class showed lower precision of 0.67