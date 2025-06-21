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
6.Evaluation and Testing Plan
● Testing Environment: Describe the environment and tools to test the model and
application, including Quality Assurance, device testing, or A/B testing approaches.
We will deploy the application in a cloud environment like Render. We will test the model using device testing and A/B testing approaches.
● User Feedback Collection: Explain any plans to gather and incorporate user feedback.
We will get user feedback from classmates, friends, family and instructors.
● Error Handling and Monitoring: Detail any processes to track and address model
performance issues in production.
Monitor results and log any incorrect outputs. Retrain the model with more information to improve the accuracy.
7.Ethical and Responsible AI Considerations
● Data Privacy: Explain how data privacy will be handled, especially if working with
sensitive information.
We are only going to collect the minimum amount of data necessary from the user in order for the app to be functional. We will avoid collecting identifying information. If we do collect personal data, we will get user consent before doing so. We will tell the user how their information is collected and used in the app. 
● Fairness and Bias: Address any potential biases in the model or data and outline
strategies to mitigate them
It needs to be inclusive. It would need to have accurate and complete data so that it doesn’t accidentally exclude dishes that the user would enjoy safely. The AI may struggle with ingredients that from other countries. It may a healthy bias. It will need disclaimers because the AI infers ingredients.
● Environmental Impact: Discuss any plans to monitor or limit computational costs if
large models are used, or consider tools to measure environmental impact (e.g., carbon
tracking).
One strategy that we were considering was using transfer learning. We could also use a smaller more efficient model. We could use a pretrained model.
8.Project Outcomes and Impact
● Expected Impact: Summarize how the project will benefit users or stakeholders.
It will help users identify foods that they can eat safely. It will also help them to budget and plan for meals. 
● FutureExtensions: Briefly outline any potential future work or enhancements that could
follow this project.
They could click on a menu item and pictures of that specific item will pop up. They will be able to get a list of common ingredients when they click on an item. They will be able to take a picture of the menu and the app will be able to extract menu information. We will create the app as a mobile app and integrate it into the kiosks that they have at restaurants. 
9.References
● Resources and Research: Include any academic papers, articles, or tools that provide
foundational information or inspiration for the project.
● Data Sources: Reference all datasets or data providers.
Restaurant Dataset from Kaggle
https://www.kaggle.com/datasets/graphquest/restaurant-menu-items

10. Appendix

I used ChatGPT in order to create the timeline for the project in order to save time. I thought that it would do a better job with estimates of how long it would take to do each part because it is the first time Felicia and I are doing this type of project.

Reference

OpenAI. (2025). ChatGPT (June 20 version) [Large language model]. https://chatgpt.com/share/6855f4d3-3c78-8009-a654-568203ab8c54

You said:
As a team of two software engineering students working on a project creating an app that use AI, Provide a breakdown of estimated timelines for major project phases (e.g.,
data collection, model development, testing, deployment).Part 1: Project Proposal (Due: 6/20)
Define the problem your AI system will solve. Includes:
Problem statement
High-level AI system and web app design
Dataset to be used
Key features and expected outputs of your AI system
Github
Part 2: AI System Prototype (Due: 7/10)
Submit a functional prototype of your AI model (without deployment). Include:
Preprocessed dataset
AI model (partially trained or fully trained)
Evaluation metrics used to assess model performance
Discussion of current results
Updates to GitHub Repository
Part 3: Web Application Development (Due: 8/14)
Show progress on the web application. This should include:
User interface prototype (wireframes or mockups)
Initial integration of the AI model into the web app
Part 4: Final Submission and Presentation (Due: 8/28)
Fully deployed AI system embedded into a web app, live on Azure.
Final project report.
Presentation and demo of your system, explaining:
The problem you tackled
The AI model design and rationale
Key features of the web application
Challenges and lessons learned
Submit a GitHub repository link with all code, documentation, and deployment instructions.
ChatGPT said:
Here’s a breakdown of the estimated timelines for your project, divided into phases that align with your deliverables. This plan assumes you're a team of two software engineering students balancing this project with other commitments, so time is allocated realistically with room for iteration and setbacks.

✅ Part 1: Project Proposal (Due: June 20)
Goal: Define the problem, plan the solution, and lay the groundwork.
Phase
Timeline
Deliverables
Ideation & Problem Scoping
June 13–15
Clear problem statement, goals
System & App Design Draft
June 15–17
Block diagrams or system overview
Dataset Selection & Research
June 16–18
Identify and describe dataset
Define Key Features & Output
June 18–19
List features, expected model behavior
GitHub Repo Initialization
By June 19
README, initial folder structure
Proposal Due
June 20
Final proposal submitted


🧠 Part 2: AI System Prototype (Due: July 10)
Goal: Build and validate a working prototype of the AI model.
Phase
Timeline
Deliverables
Data Preprocessing & Cleaning
June 21–25
Cleaned dataset, preprocessing scripts
Model Selection & Initial Training
June 26–July 2
Trained or partially trained model
Evaluation & Tuning
July 3–7
Accuracy, precision, recall, etc.
Results Analysis
July 7–9
Summary of results & discussion
GitHub Update
Ongoing, final push by July 9
Updated code & results
Prototype Due
July 10
Submit working AI prototype


💻 Part 3: Web Application Development (Due: August 14)
Goal: Build the web interface and begin integrating the AI system.
Phase
Timeline
Deliverables
Frontend Planning & Wireframes
July 11–17
UI/UX sketches or mockups
Backend Setup & API Design
July 18–24
Backend routes, DB setup (if any)
AI Model Integration
July 25–Aug 4
Connect AI output to frontend
Testing & Iteration
Aug 5–10
Ensure model works in app
GitHub Update
Ongoing, final by Aug 13
Code with basic integration
Submission Due
August 14
Progress report with web integration


🚀 Part 4: Final Submission and Presentation (Due: August 28)
Goal: Deliver a polished, deployed product with documentation.
Phase
Timeline
Deliverables
Deployment to Azure
Aug 15–20
Live hosted app
Final Testing & Debugging
Aug 21–23
Bug fixes, cross-platform checks
Final Report Writing
Aug 20–25
Detailed report of work done
Prepare Presentation & Demo
Aug 23–26
Slides, live demo walkthrough
Final GitHub Cleanup
Aug 26–27
All code, README, instructions
Final Submission Due
August 28
Deployed app, report, demo


🔁 General Advice
Weekly Check-ins: Hold short syncs to track progress and update your GitHub.
Use Branching in GitHub: Separate dev/model/frontend branches for clean commits.
Document Early: Comment your code and maintain a project log or changelog.
Would you like this turned into a downloadable Gantt chart or timeline PDF?
You said:
can you reduce the timeline to this format: Week 1: Define project scope, collect and preprocess the dataset.
● Week 2: Implement and fine-tune the pre-trained BERT model.
● Week 3: Evaluate the model and optimize hyperparameters.
● Week 4: Build a FastAPI-based backend to serve predictions.
● Week 5: Develop a simple front-end interface for uploading reviews and viewing results.
● Week 6: Test the system, gather feedback, and deploy the application.
ChatGPT said:
Absolutely! Here's a streamlined 6-week timeline for your AI web app project, matching your format and maintaining alignment with your key deliverables:

Week 1 (June 20–June 26):
Define project scope, finalize problem statement, and design system architecture.
Collect and preprocess the dataset.

Week 2 (June 27–July 3):
Implement and fine-tune a pre-trained AI model (e.g., BERT or chosen model).
Train on your dataset and log initial results.

Week 3 (July 4–July 10):
Evaluate the model using appropriate metrics (e.g., accuracy, F1-score).
Optimize hyperparameters and improve model performance.

Week 4 (July 11–July 17):
Build a FastAPI-based backend to serve predictions from the trained model.
Begin testing endpoints locally.

Week 5 (July 18–July 24):
Develop a simple front-end interface (HTML/CSS or React) for user interaction.
Connect front-end to FastAPI backend.

Week 6 (July 25–August 1):
Test the full system end-to-end.
Fix bugs, gather feedback, and deploy the web app (e.g., to Azure).
Finalize documentation and GitHub cleanup.

Let me know if you’d like a version extended through August 28 or adjusted for specific technologies you're using!
You said:
can you create a version extended through august 28
ChatGPT said:
Absolutely! Here's a project timeline extended through August 28, still using your concise weekly format, and aligned with your four major milestones (Proposal, Prototype, Web Dev, Final Submission):

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

Let me know if you'd like this formatted into a visual timeline or editable Google Doc!
You said:
can you identify major milestones from the timeline?
ChatGPT said:
Certainly! Here are the major milestones from your extended timeline, aligned with key deliverables and progress points:

🎯 Major Project Milestones

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

Let me know if you’d like milestone checkpoints added to a visual calendar or Gantt chart.
Attach
Search
Voice
ChatGPT can make mistakes. Check important info.


https://chatgpt.com/share/6855f4d3-3c78-8009-a654-568203ab8c54

