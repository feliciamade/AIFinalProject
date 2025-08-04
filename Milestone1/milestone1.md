1.Project Overview
● Project Title: Food Finder
● Problem Statement: A user is visiting a restaurant for the first time and is unfamiliar with the menu. They need to avoid certain foods due to allergies, food sensitivities, etc
● Objectives and Goals: Outline the primary objectives and expected outcomes. Define what success will look like for this project.
Help users choose restaurant. 
Help users plan and budget at restaurant for a party.
Help new customers order find the best option
Help users choose which meal they should get based on cost and preferences
2.Scope and Use Case
● Target Audience: Identify who will use or benefit from the project’s outcomes.
Young Adult and older 
People w/ food allergies and sensitivities 
● Use Case Scenarios: Detail specific scenarios where the project’s solution would be
applied. Describe the anticipated impact or benefits of the project in these cases.
A tourist unfamiliar with the area looking for places to eat dinner. 
● Project Constraints: List any known limitations, such as data availability, time, or
computational resources.
Data - we are using publicly available datasets from Kaggle
Time - we have about 9 weeks to complete the project
Money - we are using low cost computing resources
3.Data Requirements
● Data Sources: Describe where you will obtain the data needed to train or fine-tune your model. Specify if the data will come from open-source datasets, generated data, or
proprietary sources.
The data will come from an open-source dataset containing menu items from Doordash.
We may also consider getting data from web scraping and having a user upload information from a picture. 
● Data Preprocessing Needs: Identify any preprocessing steps, like cleaning, feature
selection, scaling, or augmentation.
The dataset would need to be scaled, we would need to select the features that we need most, such as the name of the menu item. We would need to use data augmentation in order to include more menu items. 
● Data Labeling: Specify if labeled data is needed and how labeling will be handled (e.g.,
manual labeling, pre-existing labels, or automated techniques).
We would need to label the data with tags in order to determine if the recipes fit specific dietary restrictions, such as containing allergens. The data doesn’t seem to have pre-existing labels that have the dietary restrictions, so we would need to do it preferably with automated techniques, even though we may need to do it manually.
4.Model Selection
● Model Type: State whether the model will be:
○ Fine-tuned from a pre-trained model (e.g., BERT, ResNet, GPT)
● Model Justification: Explain why this type of model is the best fit for the problem,
referring to its strengths and applicability.
Pretrained models are trained on large amounts of data. Our project is going to use a very large dataset (menus from restaurants) and given the time constraints of the project, I believe that the pretrained model will be the best choice to handle this project.
● Transfer Learning (if applicable): If fine-tuning, specify the pre-trained model to be
used and the rationale for choosing it.
We can use transfer learning to fine-tune information about the ingredients.
5.Project Timeline and Milestones
● Timeline: 
✅ Part 1: Project Proposal Phase
Week 1 (June 17–June 23):
Define project scope, write problem statement, and design system architecture.
Select and explore dataset.
Submit Part 1: Project Proposal (Due: June 20).
Initialize GitHub repository.

🧠 Part 2: AI System Prototype Phase
Week 2 (June 24–June 30):
Preprocess dataset and implement a pre-trained AI model (e.g., BERT, CNN, etc.).
Begin model training.

Week 3 (July 1–July 7):
Evaluate model using metrics (accuracy, F1-score, etc.).
Tune hyperparameters for improved performance.
Update GitHub with current results.

Week 4 (July 8–July 14):
Finalize prototype results and discuss limitations.
Submit Part 2: AI System Prototype (Due: July 10).

💻 Part 3: Web App Development Phase
Week 5 (July 15–July 21):
Build FastAPI backend to serve model predictions.
Set up RESTful API routes and test locally.

Week 6 (July 22–July 28):
Design UI wireframes and build front-end prototype.
Begin connecting front-end with backend.

Week 7 (July 29–August 4):
Integrate AI predictions into front-end.
Perform basic functionality testing.
Push progress to GitHub.

Week 8 (August 5–August 11):
Conduct end-to-end testing of the application.
Fix bugs, improve UI/UX, and polish features.
Submit Part 3: Web App Progress (Due: August 14).

🚀 Part 4: Final Submission & Presentation Phase
Week 9 (August 12–August 18):
Deploy application to Azure.
Test live version and gather feedback.

Week 10 (August 19–August 25):
Write final project report and prepare slides.
Create demo walkthrough.
Finalize documentation and GitHub cleanup.

Week 11 (August 26–August 28):
Submit Part 4: Final Project (Due: August 28).
Deliver presentation and live demo.
● Milestones: Define clear, measurable milestones (e.g., data preprocessing complete,
initial model training, deployment-ready model) and target dates for completion.
✅ 1. Project Proposal Submitted
Due: June 20

Includes: Problem statement, system design, dataset selection, and GitHub setup.

Milestone Outcome: Clear plan and direction for the AI project, approved by instructor.

🧠 2. AI System Prototype Completed
Due: July 10

Includes: Preprocessed dataset, working AI model (partially or fully trained), performance evaluation, and current results.

Milestone Outcome: A functioning AI model that demonstrates feasibility and direction.

💻 3. Web App Progress Demonstrated
Due: August 14

Includes: Front-end mockups, FastAPI backend, and initial model integration.

Milestone Outcome: A working web interface connected to the AI model, with visible progress toward full functionality.

🚀 4. Final System Deployed and Presented
Due: August 28

Includes: Fully deployed AI web app on Azure, final report, and presentation/demo.

Milestone Outcome: A completed, live product with full documentation, ready for evaluation.


