/**
 * course-data-en.js - English Curriculum Translations
 * Full translations for all 9 units and 27 lessons (Theory, Takeaways, Quizzes, Labs, Evaluators).
 */

const COURSE_TRANSLATIONS_EN = {
  "units": {
    "Unidad 1: Introducción al ML": "Unit 1: Introduction to ML",
    "Unidad 2: Regresión": "Unit 2: Regression",
    "Unidad 3: Aplicación Web": "Unit 3: Web Application",
    "Unidad 4: Clasificación": "Unit 4: Classification",
    "Unidad 5: Clustering": "Unit 5: Clustering",
    "Unidad 6: NLP (Lenguaje Natural)": "Unit 6: NLP (Natural Language Processing)",
    "Unidad 7: Series de Tiempo": "Unit 7: Time Series",
    "Unidad 8: Aprendizaje por Refuerzo": "Unit 8: Reinforcement Learning",
    "Unidad 9: ML en el Mundo Real": "Unit 9: Real-World ML"
  },
  "externalPractice": {
    "Unidad 1: Introducción al ML": {
      "provider": "Google Teachable Machine",
      "badge": "Vision & Audio (No-Code)",
      "title": "Train Your First No-Code Model with Teachable Machine",
      "url": "https://teachablemachine.withgoogle.com/",
      "description": "Experience firsthand the difference between coding explicit rules and training models. Use your webcam or upload images to create 2+ classes (e.g. postures, objects, gestures). The model trains in seconds using browser-side Transfer Learning.",
      "tasks": [
        "Create a standard image project with at least 2 distinct classes.",
        "Capture at least 20 sample images per class under varied lighting and angles.",
        "Train the model and inspect the live real-time confidence probability bars."
      ],
      "recommendedMetric": "Classification confidence > 90% on unseen test samples"
    },
    "Unidad 2: Regresión": {
      "provider": "Kaggle Competitions",
      "badge": "Real Tabular Regression",
      "title": "Kaggle: House Prices — Advanced Regression Techniques",
      "url": "https://www.kaggle.com/c/house-prices-advanced-regression-techniques",
      "description": "The canonical data science regression benchmark. Predict final residential sale prices across 79 explanatory features. Master skewness handling, outlier detection, and multicollinearity.",
      "tasks": [
        "Apply log transformation on the target variable (SalePrice) to normalize variance.",
        "Impute missing values on critical features (LotFrontage, GarageYrBlt) and one-hot encode categoricals.",
        "Train a regularized linear model (Ridge/Lasso) and evaluate cross-validated RMSE."
      ],
      "recommendedMetric": "Log(SalePrice) RMSE < 0.14"
    },
    "Unidad 3: Aplicación Web": {
      "provider": "Streamlit Open Source",
      "badge": "Deployment & MLOps",
      "title": "Deploy Your ML Model as an Interactive Web App with Streamlit",
      "url": "https://docs.streamlit.io/get-started",
      "description": "Transform Python scripts and trained machine learning models into interactive web apps in under 20 lines of code—without writing HTML, CSS, or JS. Perfect for rapid prototyping.",
      "tasks": [
        "Create an app.py script importing streamlit and your serialized model.",
        "Add interactive input widgets (st.slider, st.selectbox) to capture user features.",
        "Feed inputs into model.predict() and render output using st.metric and reactive charts."
      ],
      "recommendedMetric": "Functional web app running locally via 'streamlit run app.py'"
    },
    "Unidad 4: Clasificación": {
      "provider": "Kaggle Competitions",
      "badge": "Binary Classification",
      "title": "Kaggle: Titanic — Machine Learning from Disaster",
      "url": "https://www.kaggle.com/c/titanic",
      "description": "The world's most renowned binary classification challenge. Build a predictive model answering: 'what sorts of people were more likely to survive?' using passenger class, gender, age, and fare.",
      "tasks": [
        "Engineer title features ('Mr.', 'Mrs.', 'Master') parsed directly from passenger names.",
        "Train a Decision Tree or Random Forest classifier with scikit-learn.",
        "Generate a confusion matrix and analyze the Precision-Recall tradeoff on validation splits."
      ],
      "recommendedMetric": "Test set Accuracy > 78%"
    },
    "Unidad 5: Clustering": {
      "provider": "Kaggle Datasets",
      "badge": "Unsupervised Clustering",
      "title": "Kaggle: Mall Customer Segmentation with K-Means",
      "url": "https://www.kaggle.com/datasets/vjchoudhary7/customer-segmentation-tutorial-in-python",
      "description": "Learn to segment mall customers based on Annual Income and Spending Score. Without ground-truth labels, K-Means discovers high-value cohorts, conservative shoppers, and impulsive spenders.",
      "tasks": [
        "Standardize features (Annual Income and Spending Score) using StandardScaler.",
        "Compute WCSS inertia across K=1..10 and plot the Elbow curve to isolate the optimal inflection point.",
        "Isolate the optimal cluster count (K=5) and profile the commercial personas of each cluster."
      ],
      "recommendedMetric": "Silhouette Score > 0.55 at K=5 clusters"
    },
    "Unidad 6: NLP (Lenguaje Natural)": {
      "provider": "Hugging Face & Kaggle",
      "badge": "Natural Language Processing",
      "title": "Hugging Face NLP Course & Kaggle IMDB 50K Sentiment Analysis",
      "url": "https://huggingface.co/learn/nlp-course",
      "description": "Master modern NLP progression: from TF-IDF n-gram vectorization on 50,000 IMDB movie reviews to subword tokenizers and state-of-the-art Hugging Face Transformer pipelines.",
      "tasks": [
        "Fit a TfidfVectorizer(ngram_range=(1,2), max_features=10000) on the IMDB dataset.",
        "Train a Logistic Regression classifier and inspect top positive and negative vocabulary coefficients.",
        "Compare accuracy and nuance against the Hugging Face pretrained pipeline('sentiment-analysis')."
      ],
      "recommendedMetric": "F1-score > 0.88 on binary sentiment polarity"
    },
    "Unidad 7: Series de Tiempo": {
      "provider": "Kaggle Competitions",
      "badge": "Multivariate Time Series",
      "title": "Kaggle: Store Sales — Time Series Forecasting",
      "url": "https://www.kaggle.com/competitions/store-sales-time-series-forecasting",
      "description": "Forecast demand and grocery sales across thousands of items for Ecuadorian supermarket chain Corporación Favorita. Model cyclical seasonality (paydays, holidays), trends, and external shocks (oil price).",
      "tasks": [
        "Decompose sales time series into Trend, Seasonal, and Residual components.",
        "Engineer 7-day and 30-day lag features and rolling window statistical aggregations.",
        "Train a SARIMAX or lag-feature gradient boosting model evaluated with RMSLE."
      ],
      "recommendedMetric": "Time-split RMSLE < 0.42"
    },
    "Unidad 8: Aprendizaje por Refuerzo": {
      "provider": "Farama Gymnasium & Hugging Face Deep RL",
      "badge": "Q-Learning & MDPs",
      "title": "Gymnasium: FrozenLake & Hugging Face Deep RL Course",
      "url": "https://gymnasium.farama.org/",
      "description": "The gold standard library for reinforcement learning agents. Run the classic env.reset() and env.step(action) loop, update Q-tables using Bellman optimality, and solve FrozenLake-v1 and CliffWalking.",
      "tasks": [
        "Initialize Gymnasium FrozenLake-v1 environment with is_slippery=True.",
        "Code the Q-Learning update rule with learning rate alpha=0.8 and discount gamma=0.95.",
        "Implement exponential epsilon-greedy decay to guarantee convergence to the optimal policy."
      ],
      "recommendedMetric": "Agent win rate > 0.74 across 100 evaluation episodes"
    },
    "Unidad 9: ML en el Mundo Real": {
      "provider": "Microsoft Responsible AI Toolbox",
      "badge": "Governance & Ethical Auditing",
      "title": "Microsoft Responsible AI Dashboard: Fairness, Interpretability & Error Analysis",
      "url": "https://github.com/microsoft/responsible-ai-toolbox",
      "description": "Microsoft's open source suite for production ML model debugging and governance. Combines Fairlearn (demographic parity and disparate impact), InterpretML (SHAP explanations), and Error Analysis cohort trees.",
      "tasks": [
        "Audit false positive rate disparity across protected demographic cohorts (gender, age, location).",
        "Generate local SHAP summary attributions for adverse outcome decisions.",
        "Synthesize counterfactual explanations (DiCE) providing actionable recourse to affected users."
      ],
      "recommendedMetric": "Disparate Impact Ratio > 0.80 (Four-Fifths Rule compliance)"
    }
  },
  "lessons": {
    "1": {
      "title": "What is Machine Learning",
      "p1": "Imagine teaching a puppy to sit. With normal rules, you tell it exactly what to do, step by step. But in Machine Learning, it's the other way around: instead of programming the rule, you show it many examples —'when this happens, do that'— and let it discover the pattern on its own. Machine Learning is the same: instead of hand-coding rules, we provide the computer with lots of examples (inputs and expected outputs) so it uncovers the underlying function that connects them.",
      "p2": "Notice that not every problem needs Machine Learning. If a task has an exact, deterministic rule —like calculating tax or checking if a password has 8 characters— writing an if/else rule directly is simpler, faster, and cheaper. Machine Learning shines when the pattern is too complex, noisy, or hard to articulate in code for any human programmer — such as recognizing human speech, detecting fraud, or recommending movies.",
      "takeaways": [
        "Traditional programming: you write the rules and the computer executes them. Machine Learning: you provide examples and the machine infers the rules.",
        "An ML model does not guarantee 100% certainty — it learns a probabilistic generalization, not absolute truth.",
        "If a problem can be solved with a simple deterministic if/else condition, you do not need Machine Learning."
      ],
      "instructions": [
        "Inspect the 4 proposed problems in the element tray.",
        "Assign each card to either 'Traditional Rules (if/else)' or 'Machine Learning (Probabilistic)'.",
        "Click 'Validate & Submit' to have the algorithmic auditor verify your architecture."
      ],
      "hint": "Ask yourself: does this problem have a fixed, exact formula (like an algebraic calculation), or does it depend on noisy patterns with exceptions?",
      "quiz": {
        "q": "In which of the following scenarios is it better to use traditional programming rules instead of Machine Learning?",
        "opts": [
          "Detecting fraudulent transactions whose patterns evolve weekly.",
          "Calculating sales tax for a purchase using a fixed statutory rate table.",
          "Classifying whether an email is spam based on its body text.",
          "Recommending movies to users based on viewing similarity."
        ],
        "correct": 1,
        "fb": "Calculating tax follows a deterministic, statutory formula with zero ambiguity. Writing a simple code rule is faster, 100% reliable, and eliminates model inference overhead."
      },
      "exercise": {
        "title": "Architecture Audit: Fixed Rule or ML Model?",
        "categories": {
          "reglas": "Traditional Rules (if/else)",
          "ml": "Machine Learning (Probabilistic)"
        },
        "items": {
          "i1": "Validate if a password has 8 characters and at least one number",
          "i2": "Forecast electricity demand based on weather forecasts and public holidays",
          "i3": "Check if a promotional discount coupon is expired based on current date",
          "i4": "Transcribe speech in real time under noisy background conditions"
        },
        "passMsg": "Flawless architecture! You precisely distinguished deterministic rule-based systems from probabilistic modeling.",
        "failMsg": "Detected erroneous assignments. Remember: validating structured schemas, dates, and static tables is strictly rule-based."
      }
    },
    "2": {
      "title": "History and Evolution of ML",
      "p1": "The history of Machine Learning resembles a rollercoaster of high expectations and harsh realities. In 1958, Frank Rosenblatt created the 'Perceptron' and boldly claimed it would soon think like a human brain. The media was thrilled, but in 1969, Marvin Minsky and Seymour Papert proved mathematically that a single-layer perceptron could not even solve a simple XOR function. Disillusionment set in, research funding evaporated, and the field entered what is known as an 'AI Winter'.",
      "p2": "What revived AI was not a single breakthrough, but the convergence of three pillars: vast datasets enabled by the internet, immense computing power via gaming GPUs, and refined mathematical algorithms like backpropagation for deep neural networks. When AlexNet decisively won the ImageNet challenge in 2012 using GPU-accelerated convolutional networks, the modern Deep Learning revolution was born.",
      "takeaways": [
        "AI Winters occurred whenever technology hype vastly outpaced actual computational and mathematical capabilities.",
        "In 2012, AlexNet ignited the modern boom by proving GPUs could train deep neural networks at unprecedented scales.",
        "The foundational mathematics of ML have existed for decades; what changed was compute capacity and data abundance."
      ],
      "instructions": [
        "Review the 4 historical milestones listed in the sorting cards.",
        "Drag and drop the cards to place them in strict chronological order from top to bottom.",
        "Click 'Validate & Submit' to verify the accuracy of your historical timeline."
      ],
      "hint": "The Perceptron was invented in 1958. Its XOR limitation was proven in 1969. Backpropagation became popular in the 1980s. AlexNet's GPU breakthrough was in 2012.",
      "quiz": {
        "q": "What was the primary cause of the historical 'AI Winters'?",
        "opts": [
          "Governments strictly banned computer science research into artificial intelligence.",
          "Early hardware and data could not live up to exaggerated, unfulfilled promises.",
          "Early mainframe computers were damaged by cold room temperatures.",
          "The internet did not yet exist to distribute neural network code."
        ],
        "correct": 1,
        "fb": "Whenever hype exceeded what existing hardware, algorithms, and data could deliver, expectations collapsed, causing research funding and commercial interest to dry up for years."
      },
      "exercise": {
        "title": "Timeline: Order the Evolution of Machine Learning",
        "items": {
          "rosenblatt": "Invention of the Perceptron by Frank Rosenblatt (1958)",
          "minsky": "Mathematical proof of the Perceptron's XOR limitation by Minsky & Papert (1969)",
          "backprop": "Popularization of the Backpropagation algorithm for multi-layer nets (Rumelhart, Hinton - 1986)",
          "alexnet": "AlexNet dominates the ImageNet challenge using GPU compute (2012)"
        },
        "passMsg": "Chronology validated! You have accurately mapped the historical trajectory of Machine Learning.",
        "failMsg": "The historical order is incorrect. Remember: Perceptron (1958) -> XOR proof (1969) -> Backprop (1986) -> AlexNet (2012)."
      }
    },
    "3": {
      "title": "Fairness, Bias, and Ethics in Data",
      "p1": "Machine Learning models do not invent biases out of thin air — they mirror and amplify historical inequities hidden within training data. If historical loan approvals favored one demographic over another, an algorithm trained on that data will systematically penalize qualified applicants from the underrepresented group, codifying discrimination behind a veneer of mathematical objectivity.",
      "p2": "Evaluating fairness requires auditing metrics beyond overall accuracy. If a facial recognition model achieves 95% overall accuracy, but suffers a 35% error rate on darker-skinned women, the model is unsafe and inequitable. ML practitioners must enforce disparate impact audits, balance false negative rates (Equal Opportunity), and calibrate classification thresholds across sensitive subgroups.",
      "takeaways": [
        "A model trained on historically biased data will automate and amplify that bias, not eliminate it.",
        "Overall accuracy can mask catastrophic error rates on minority or protected subgroups.",
        "Auditing fairness requires adjusting decision thresholds to equalize opportunity and minimize disparate harm."
      ],
      "instructions": [
        "Group A (baseline population) operates at a decision threshold of 0.50 with a 12% False Negative Rate (FNR).",
        "Adjust the slider for Group B's threshold until its FNR disparity with Group A is below 3%.",
        "Click 'Validate & Submit' to audit and approve the equitable decision boundary."
      ],
      "hint": "Lowering the decision threshold for Group B reduces false rejections, lowering its FNR towards 12%. Aim for a threshold near 0.40 - 0.45.",
      "quiz": {
        "q": "Why can high overall model accuracy (e.g. 96%) be misleading regarding fairness?",
        "opts": [
          "Because high accuracy models always overfit the training dataset.",
          "Because the model might perform exceptionally well on the majority group while failing drastically on protected subgroups.",
          "Because fairness can only be measured on regression models, not classification.",
          "Because accuracy cannot be computed when working with tabular data."
        ],
        "correct": 1,
        "fb": "If a majority group makes up 95% of the data, a model could be 100% accurate on them and 0% accurate on the minority group, while still showing 95% overall accuracy on paper."
      },
      "exercise": {
        "title": "Fairness Audit: Equalizing False Negative Rates",
        "passMsg": "Audit passed! Disparity is within the equitable tolerance threshold (< 3%).",
        "failMsg": "Disparity remains outside the acceptable fairness margin. Calibrate the threshold to balance the False Negative Rate."
      }
    },
    "4": {
      "title": "The ML Engineer Workflow",
      "p1": "Building a machine learning solution is not about jumping straight into training code. It follows a rigorous, disciplined lifecycle: Problem Formulation -> Data Collection & Auditing -> Exploratory Data Analysis (EDA) -> Feature Engineering -> Model Training & Cross-Validation -> Deployment & Continuous Monitoring.",
      "p2": "One of the most dangerous rookie mistakes is 'Data Leakage'. If you normalize your entire dataset using the global mean and standard deviation before splitting into train and test sets, information from the test set leaks into your training pipeline. Your test scores will look unrealistically high, and the model will fail in production.",
      "takeaways": [
        "The golden rule of ML: Split into train and test sets BEFORE performing any scaling, imputation, or feature engineering.",
        "Data preparation and cleansing typically consumes 70-80% of an engineer's time on real-world projects.",
        "A model's lifecycle does not end at deployment: models suffer from data drift and require continuous observability."
      ],
      "instructions": [
        "Review the 4 core pipeline stages displayed in the workflow sequence.",
        "Arrange the stages in strict order to avoid data leakage and guarantee valid evaluation.",
        "Click 'Validate & Submit' to verify pipeline integrity."
      ],
      "hint": "You must always split the data before fitting scalers or transformers, train on the scaled training split, and evaluate strictly on the held-out test split.",
      "quiz": {
        "q": "What happens if you fit a standard scaler on your entire dataset before splitting into train and test sets?",
        "opts": [
          "The model will train faster because features are already centered.",
          "Data leakage occurs: test set statistics contaminate training, leading to overly optimistic test metrics.",
          "The model will crash with a dimensionality mismatch error.",
          "Nothing, as long as the test set has fewer rows than the training set."
        ],
        "correct": 1,
        "fb": "Fitting scalers globally introduces information from the future (the test set) into the training distribution. Transformers must be fit exclusively on training data."
      },
      "exercise": {
        "title": "Pipeline Hygiene: Order the Anti-Leakage Workflow",
        "items": {
          "split": "Split raw dataset into Train and Test partitions (train_test_split)",
          "fit_scaler": "Fit scaler (StandardScaler.fit_transform) exclusively on the training partition",
          "train_model": "Train the estimator (model.fit) on scaled training data",
          "eval_test": "Transform test data using fitted scaler and evaluate metrics (model.score)"
        },
        "passMsg": "Pipeline verified! Zero data leakage detected; your workflow adheres to production engineering standards.",
        "failMsg": "Pipeline violated. Remember: Split data -> Fit transformer on train only -> Train model -> Evaluate on transformed test set."
      }
    },
    "5": {
      "title": "Foundations of Regression",
      "p1": "Regression models predict continuous numeric values — such as housing prices, ambient temperature, or stock market volatility. Unlike classification where the model selects among discrete categories (e.g. Cat vs Dog), regression outputs a quantity on a continuous scale.",
      "p2": "The simplest regression model is Ordinary Least Squares (OLS) Linear Regression: y = wx + b. The goal during training is to find the slope w (weight) and intercept b (bias) that minimize the Residual Sum of Squares (RSS) or Mean Squared Error (MSE) between true and predicted targets.",
      "takeaways": [
        "Regression predicts continuous quantitative targets; classification predicts qualitative categories.",
        "Ordinary Least Squares (OLS) minimizes the squared vertical distances between observed points and the regression line.",
        "Mean Squared Error (MSE) and R-squared (coefficient of determination) are foundational metrics for evaluating regression fit."
      ],
      "instructions": [
        "Classify the 4 business scenarios into 'Continuous Regression' or 'Discrete Classification'.",
        "Place each item into its respective bin.",
        "Click 'Validate & Submit' to check your problem formulation."
      ],
      "hint": "Ask yourself: Is the target an unconstrained number with decimals (e.g., $450,230.50), or a distinct label from a set of choices?",
      "quiz": {
        "q": "Which of the following problems is formulated as a regression task?",
        "opts": [
          "Predicting whether a bank loan applicant will default (Yes or No).",
          "Estimating the monetary sale price of a second-hand vehicle in thousands of dollars.",
          "Categorizing an uploaded photo into Dog, Cat, or Bird.",
          "Identifying the blood type of an individual (A, B, AB, O)."
        ],
        "correct": 1,
        "fb": "Predicting monetary value involves a continuous numerical output on a real number scale, which defines a classic regression problem."
      },
      "exercise": {
        "title": "Task Formulation: Regression vs. Classification",
        "categories": {
          "reg": "Continuous Regression",
          "clf": "Discrete Classification"
        },
        "items": {
          "c1": "Estimate total annual kilowatt-hour energy consumption of an industrial building",
          "c2": "Determine if a patient has pneumonia from a chest X-ray image",
          "c3": "Forecast the exact transit arrival delay in minutes for an urban train",
          "c4": "Classify incoming user support tickets into Billing, Technical, or Account"
        },
        "passMsg": "Excellent task formulation! You accurately differentiated continuous regression targets from categorical classification.",
        "failMsg": "Misassigned tasks. Remember: quantities with infinite numeric gradations are regression; discrete tags are classification."
      }
    },
    "6": {
      "title": "Pumpkin Data Cleaning & Exploration",
      "p1": "Real-world tabular data is messy: inconsistent packaging units, categorical fields encoded with typos, and missing values. In the classic Microsoft pumpkin pricing dataset, pumpkins are sold in bushels, 1/2 bushels, crates, and cartons, making raw prices non-comparable.",
      "p2": "Before fitting a regression model, you must standardize units. If a full bushel contains twice as many pumpkins as a 1/2 bushel, you must normalize prices to a single unit (price per bushel) and filter out non-standard packages that distort your price-per-volume calculations.",
      "takeaways": [
        "Exploratory Data Analysis (EDA) reveals package unit discrepancies that distort regression targets.",
        "Normalizing units to a common baseline is essential when dealing with physical goods and transactions.",
        "Filtering outliers and converting categorical columns with One-Hot or Ordinal encoding prevents model confusion."
      ],
      "instructions": [
        "Filter the pumpkin dataset to isolate standard package records (1/2 BUSHEL) with valid prices.",
        "Select the checkmarks for valid records and exclude non-conforming rows.",
        "Click 'Validate & Submit' to verify your data cleaning."
      ],
      "hint": "Select rows that feature standard packaging units suitable for regression (e.g. records #1, #3, and #5).",
      "quiz": {
        "q": "Why is it dangerous to train a regression model directly on prices when some items are sold in full bushels and others in half bushels?",
        "opts": [
          "The model will throw a Python TypeError during training.",
          "The target value represents different quantities, confusing the relationship between weight, variety, and price.",
          "Linear regression cannot handle integer prices.",
          "Because prices must always be converted to percentages first."
        ],
        "correct": 1,
        "fb": "A price of $20 for a 1/2 bushel is equivalent to $40 for a full bushel. Without price-per-volume normalization, the model learns distorted coefficients."
      },
      "exercise": {
        "title": "EDA & Data Hygiene: Filter Standardized Batches",
        "passMsg": "Dataset cleansed! Your normalized selection provides a consistent target for price regression.",
        "failMsg": "Your selection contains non-standard or missing packaging records. Review rows and filter accurately."
      }
    },
    "7": {
      "title": "Live Linear and Polynomial Regression",
      "p1": "A straight linear regression line (degree d = 1) is limited to linear relationships. When data follows a curved trajectory —such as pumpkin sales rising in autumn and plunging in summer— a straight line suffers from high bias (underfitting).",
      "p2": "Polynomial regression fits non-linear relationships by adding powers of features (x, x^2, x^3...). However, increasing the degree too high (e.g. d = 6) introduces high variance (overfitting): the curve oscillates wildly, chasing random noise rather than the underlying pattern.",
      "takeaways": [
        "Degree d = 1 underfits non-linear data; very high degrees (d >= 5) overfit noise.",
        "The bias-variance tradeoff dictates selecting a model complexity that minimizes out-of-sample test error.",
        "Always evaluate polynomial models using cross-validation to prevent extreme boundary oscillations."
      ],
      "instructions": [
        "Adjust the polynomial degree slider (d) to find the optimal balance for the parabolic data.",
        "Avoid underfitting (d = 1) and severe overfitting (d >= 5).",
        "Click 'Validate & Submit' when the curve captures the parabolic pattern without wild fluctuations."
      ],
      "hint": "Degrees d = 2 or d = 3 provide an ideal fit for parabolic curves without edge oscillations.",
      "quiz": {
        "q": "What phenomenon occurs when you train a degree 8 polynomial on 10 noisy data points?",
        "opts": [
          "Severe underfitting: the model fails to learn anything.",
          "High variance (overfitting): the model achieves near-zero training error but performs terribly on new test points.",
          "The model coefficients automatically collapse to zero.",
          "The regression line becomes perfectly horizontal."
        ],
        "correct": 1,
        "fb": "High-degree polynomials have excessive flexibility. They memorize training noise, leading to extreme out-of-sample generalization error."
      },
      "exercise": {
        "title": "Polynomial Fitting: Tune Model Complexity (d)",
        "passMsg": "Optimal fit achieved! Degree balanced bias and variance cleanly without overfitting.",
        "failMsg": "Suboptimal polynomial degree. Degree 1 underfits, while degrees above 4 overfit data noise."
      }
    },
    "8": {
      "title": "Logistic Regression & Binary Classification",
      "p1": "Despite its name, Logistic Regression is an algorithm for binary classification (0 or 1). Instead of fitting an unbounded straight line that could predict probabilities below 0 or above 1, it passes a linear combination through the Sigmoid activation function: sigma(z) = 1 / (1 + e^(-z)).",
      "p2": "The sigmoid maps any real number to a valid probability between 0.0 and 1.0. By default, a decision threshold of 0.5 is used: if sigma(z) >= 0.5, predict Class 1; otherwise Class 0. Adjusting weights changes curve steepness; adjusting bias shifts the decision boundary horizontally.",
      "takeaways": [
        "The sigmoid function squashes any linear input z = wx + b into an interpretable probability [0, 1].",
        "Logistic regression is trained using Binary Cross-Entropy (Log Loss), not Mean Squared Error.",
        "The decision threshold (default 0.5) can be calibrated based on the operational cost of False Positives vs False Negatives."
      ],
      "instructions": [
        "Adjust the Weight (w) slider to a value greater than 1.2 to steepen the sigmoid curve.",
        "Adjust the Bias (b) slider to a value between -2.0 and -5.0 to center the 50% threshold on the decision boundary.",
        "Click 'Validate & Submit' to evaluate the decision boundary."
      ],
      "hint": "Increasing 'weight' steepens the curve; shifting 'bias' moves the position of the 50% cutoff point.",
      "quiz": {
        "q": "Why can't we use standard Linear Regression directly to predict probability of loan default?",
        "opts": [
          "Linear regression takes too long to compute.",
          "Linear predictions can be greater than 1.0 or less than 0.0, violating fundamental axioms of probability.",
          "Linear regression only works when all features are negative.",
          "Linear regression cannot calculate gradients."
        ],
        "correct": 1,
        "fb": "Linear regression is unbounded (-inf, +inf). In contrast, the Sigmoid function bounds outputs strictly between 0 and 1, ensuring valid probabilities."
      },
      "exercise": {
        "title": "Sigmoid Calibration: Probability Boundary",
        "passMsg": "Sigmoid properly calibrated! The curve discriminates both classes with high confidence.",
        "failMsg": "Bias uncalibrated: adjust 'w' greater than 1.2 and 'b' between -2.0 and -5.0 to center the sigmoid."
      }
    },
    "9": {
      "title": "Deploying and Serving Models",
      "p1": "A machine learning model locked inside a Jupyter Notebook creates zero business value. Model deployment is the engineering practice of packaging an estimator (e.g. as ONNX, Pickled pipeline, or TorchScript) and exposing it through an inference service.",
      "p2": "Architects choose between Server-Side Inference (REST/gRPC APIs running on cloud Kubernetes or serverless containers) and Edge / Client-Side Inference (WebAssembly, ONNX Runtime Web, mobile CoreML). Server inference protects proprietary IP and handles massive models, while Edge inference offers ultra-low latency and zero cloud compute cost.",
      "takeaways": [
        "Server-side deployment centralizes monitoring and protects model IP, but incurs compute costs and network latency.",
        "Edge / in-browser deployment (ONNX Web, TF.js) runs offline, guarantees user data privacy, and scales with zero server cost.",
        "Exporting models to standardized formats like ONNX ensures cross-platform portability across runtimes."
      ],
      "instructions": [
        "Classify the 4 deployment requirements into 'Cloud / Server-Side (REST API)' or 'Edge / Client-Side (In-Browser/Device)'.",
        "Drag each architecture requirement into the corresponding container.",
        "Click 'Validate & Submit' to evaluate your deployment design."
      ],
      "hint": "Real-time camera frames on mobile devices require Edge compute; heavy 70B parameter models require Cloud servers.",
      "quiz": {
        "q": "What is a major advantage of deploying an ML model directly in the user's browser using ONNX Runtime Web?",
        "opts": [
          "It can train 100-billion parameter models in real time.",
          "Zero server compute costs and full user privacy, as data never leaves the client device.",
          "It completely eliminates the need for JavaScript.",
          "It automatically improves the model's test accuracy by 10%."
        ],
        "correct": 1,
        "fb": "Client-side inference processes data locally on the user's hardware. This eliminates server cloud bills, removes network latency, and protects user privacy."
      },
      "exercise": {
        "title": "Deployment Architecture: Cloud API vs. Edge Runtime",
        "categories": {
          "server": "Cloud / Server-Side API",
          "edge": "Edge / In-Browser Client"
        },
        "items": {
          "d1": "Serve a massive 30GB multi-modal foundation model across enterprise users",
          "d2": "Augmented reality face filter operating at 60 FPS offline on mobile smartphones",
          "d3": "Protect proprietary proprietary model weights and weights from client inspection",
          "d4": "Process private medical audio recordings without transmitting data over the internet"
        },
        "passMsg": "Architecture approved! You correctly partitioned edge constraints from server-side infrastructure.",
        "failMsg": "Deployment mismatch detected. Remember: large models and IP protection require server; offline low-latency belongs on edge."
      }
    },
    "10": {
      "title": "Foundations of Classification",
      "p1": "Classification is the task of predicting which discrete category an observation belongs to. Problems range from Binary Classification (Email: Spam vs Not Spam; Medical: Malignant vs Benign) to Multi-Class Classification (Handwritten digits: 0 through 9; Iris species: Setosa, Versicolor, Virginica).",
      "p2": "To train a classifier, algorithms seek a decision boundary in feature space. In two dimensions, this is a line or curve; in higher dimensions, a hyperplane. Data preprocessing must remove uninformative noise features and scale attributes so dominant variables don't distort distance calculations.",
      "takeaways": [
        "Classification assigns inputs into distinct categorical buckets based on decision boundaries.",
        "Feature selection eliminates noise variables that degrade classifier generalization.",
        "Class imbalance (e.g. 99% legitimate, 1% fraudulent) requires evaluating Precision, Recall, and PR-AUC rather than raw Accuracy."
      ],
      "instructions": [
        "Categorize the 4 proposed features into 'Discriminative Predictive Signals' or 'Non-Informative Noise Features'.",
        "Place each card in its corresponding container.",
        "Click 'Validate & Submit' to audit feature quality."
      ],
      "hint": "Customer ID numbers and random timestamps are noise; account age and transaction frequency are predictive signals.",
      "quiz": {
        "q": "If a fraud detection dataset contains 995 legitimate transactions and 5 fraudulent ones, what accuracy does a naive model achieve that always predicts 'Legitimate'?",
        "opts": [
          "50.0%",
          "99.5%, but it catches zero fraudulent transactions, making it useless.",
          "0.5%",
          "100.0%"
        ],
        "correct": 1,
        "fb": "In severe class imbalance, accuracy is dangerously deceptive. A dummy model predicting majority class achieves 99.5% accuracy while completely failing its operational mission."
      },
      "exercise": {
        "title": "Feature Hygiene: Signals vs. Uninformative Noise",
        "categories": {
          "disc": "Discriminative Predictive Signal",
          "noise": "Non-Informative Noise / Artifact"
        },
        "items": {
          "i1": "Transaction amount relative to user's 30-day historical average",
          "i2": "Internal auto-increment primary key database ID (e.g., #849204)",
          "i3": "Geographic distance between physical card swipe and previous swipe 10 minutes ago",
          "i4": "Sequential milliseconds portion of transaction logging timestamp"
        },
        "passMsg": "Feature space sanitized! You successfully filtered spurious identifiers from genuine predictive signals.",
        "failMsg": "Noise features retained. Remember: database IDs and random millisecond stamps cause overfitting and have zero predictive value."
      }
    },
    "11": {
      "title": "Classifiers I: k-NN and Naive Bayes",
      "p1": "k-Nearest Neighbors (k-NN) is a non-parametric, instance-based algorithm: to classify a new point, it measures Euclidean distances to all known training examples, selects the 'k' closest neighbors, and takes a majority vote. Small values of k (e.g. k = 1) create complex, noisy decision boundaries; larger k values produce smoother boundaries.",
      "p2": "Naive Bayes, in contrast, is a probabilistic classifier grounded in Bayes' Theorem. It calculates P(Class | Features) proportional to P(Class) * product(P(Feature_i | Class)). It is termed 'Naive' because it makes the strong assumption that all features are conditionally independent given the class label. Despite this unrealistic assumption, it performs exceptionally well on high-dimensional text classification and spam filtering.",
      "takeaways": [
        "k-NN classifies by proximity to nearest neighbors; it requires feature scaling to prevent high-magnitude features from dominating Euclidean distance.",
        "Naive Bayes calculates posterior probabilities assuming conditional feature independence.",
        "k-NN has zero training time (lazy learner) but slow inference O(N); Naive Bayes is extremely fast to train and evaluate."
      ],
      "instructions": [
        "Click anywhere inside the feature plane canvas to place a query observation (green dot).",
        "Adjust the hyperparameter k slider (odd numbers: 1, 3, 5, 7) to inspect neighbor voting.",
        "Click 'Validate & Submit' when the query point and k parameter are configured."
      ],
      "hint": "Setting k = 3 or k = 5 provides an optimal balance, preventing tie votes while smoothing out local noise outliers.",
      "quiz": {
        "q": "Why is it strongly recommended to choose an odd number for k (e.g., k = 3, 5) in binary classification with k-NN?",
        "opts": [
          "Because odd numbers compute distance faster in Python.",
          "To prevent voting ties between the two classes when taking a majority vote.",
          "Because even values of k cause Euclidean distance to equal zero.",
          "Odd numbers automatically scale the features."
        ],
        "correct": 1,
        "fb": "With two classes, an even k (such as k = 4) can result in a 2-versus-2 tie, requiring arbitrary tie-breaking. Odd values guarantee a decisive majority."
      },
      "exercise": {
        "title": "k-NN Proximity: Query Point & Neighborhood k",
        "passMsg": "k-NN query evaluated! You observed how neighborhood size k governs the decision boundary.",
        "failMsg": "Adjust k and place a query point to observe neighborhood consensus before submitting."
      }
    },
    "12": {
      "title": "Classifiers II: Trees, SVM and Metrics",
      "p1": "Decision Trees split feature space recursively using greedy heuristics like Gini Impurity or Information Gain (Entropy). They are intuitive and easily interpretable, but prone to deep overfitting unless regularized with maximum depth limits or pruned.",
      "p2": "Evaluating classifiers requires looking beyond accuracy. The Confusion Matrix tracks True Positives (TP), False Positives (FP), False Negatives (FN), and True Negatives (TN). Precision measures 'of all predicted positives, how many were correct' (TP / (TP + FP)); Recall measures 'of all actual positives, how many did we catch' (TP / (TP + FN)). The F1-Score harmonic mean balances both.",
      "takeaways": [
        "Decision Trees partition features orthogonally; unconstrained trees overfit rapidly.",
        "Support Vector Machines (SVM) find the maximum-margin hyperplane separating classes in high dimensions.",
        "In medical diagnosis and fraud detection, Recall is critical: a False Negative (missed cancer diagnosis) is far more dangerous than a False Positive."
      ],
      "instructions": [
        "Inspect the live medical screening confusion matrix with 10 actual positive (sick) cases.",
        "Adjust the Cutoff Threshold slider until Recall reaches at least 80% (catching at least 8 of 10 sick patients).",
        "Click 'Validate & Submit' to verify diagnostic safety."
      ],
      "hint": "Lowering the decision threshold (e.g. threshold <= 0.40) makes the model more sensitive, capturing more true positives and raising Recall above 80%.",
      "quiz": {
        "q": "In an automated cancer screening test, which metric is most critical to maximize to avoid sending sick patients home undetected?",
        "opts": [
          "Precision, to ensure healthy people never get tested twice.",
          "Recall (Sensitivity), to minimize False Negatives and catch as many positive cases as possible.",
          "Accuracy on the negative class.",
          "Training speed in seconds."
        ],
        "correct": 1,
        "fb": "A False Negative means a cancer patient goes untreated. In safety-critical screening, maximizing Recall is paramount to minimize fatal misses."
      },
      "exercise": {
        "title": "Confusion Matrix: Calibrate Decision Threshold for Recall",
        "passMsg": "Diagnostic calibrated! Recall >= 80%, ensuring safety while maintaining viable specificity.",
        "failMsg": "Recall is below the required 80% medical safety threshold. Lower the cutoff threshold to catch more true positives."
      }
    },
    "13": {
      "title": "Cuisine Recommender and Softmax",
      "p1": "When classifying among more than two classes (Multi-Class Classification), models output raw unnormalized scores (logits) for each class. To convert these logits into a valid probability distribution where all probabilities sum to 1.0, we apply the Softmax function.",
      "p2": "Softmax exponentiates each score e^(z_i) and divides by the sum of exponentials across all classes. In this recommender lab, selecting ingredients (e.g. jalapeño, cilantro, lime, soy sauce, ginger, fish sauce) accumulates feature weights that Softmax translates into percentage affinities for Mexican, Japanese, or Thai cuisines.",
      "takeaways": [
        "Softmax generalizes the binary Sigmoid function to multi-class output distributions summing to 1.0.",
        "The highest Softmax probability determines the argmax predicted class label.",
        "Cross-Entropy Loss compares the predicted Softmax probability vector directly against the true one-hot encoded label."
      ],
      "instructions": [
        "Select a combination of ingredients from the interactive culinary tray.",
        "Observe the dynamic probability bars computed via Softmax across Mexican and Japanese cuisines.",
        "Select ingredients to drive one cuisine's probability above 60%, then click 'Validate & Submit'."
      ],
      "hint": "Selecting Cilantro and Jalapeño drives Mexican cuisine affinity; selecting Soy Sauce and Ginger boosts Japanese cuisine.",
      "quiz": {
        "q": "What is the mathematical purpose of the Softmax activation function in multi-class neural networks and linear models?",
        "opts": [
          "To set negative weights to zero.",
          "To convert an arbitrary vector of real-valued logits into a normalized probability distribution that sums to 1.0.",
          "To compute the derivative of polynomial regression.",
          "To reduce the number of features in half."
        ],
        "correct": 1,
        "fb": "Softmax exponentiates logits so all values become positive, then normalizes by the sum of exponentials so they form a valid probability distribution summing to 1.0."
      },
      "exercise": {
        "title": "Softmax Recommender: Multi-Class Probability Engine",
        "passMsg": "Cuisine classified! Softmax accurately resolved distinct culinary affinity with high confidence (> 60%).",
        "failMsg": "Affinities remain ambiguous or unselected. Select ingredients to establish a distinct culinary profile above 60%."
      }
    },
    "14": {
      "title": "Unsupervised Learning and Geometry",
      "p1": "In Unsupervised Learning, there are no target labels y provided during training. The algorithm's mission is to discover latent geometric structure, clusters, or manifold representations directly from the unlabeled input features X.",
      "p2": "Distance metrics determine how similarity is defined in multi-dimensional space. Euclidean Distance measures straight-line Pythagorean distance; Manhattan Distance (L1 norm) sums absolute coordinate differences along grid axes; Cosine Similarity measures the cosine of the angle between two vectors, ignoring magnitude.",
      "takeaways": [
        "Unsupervised algorithms uncover hidden patterns, groupings, and low-dimensional manifolds without ground-truth labels.",
        "Euclidean distance is sensitive to magnitude; Cosine similarity evaluates directional alignment regardless of vector length.",
        "Feature scaling is non-negotiable: without standardization, features with large scales dominate all geometric distance calculations."
      ],
      "instructions": [
        "Match the 3 distance metrics ('Euclidean Distance', 'Cosine Similarity', 'Manhattan (City Block) Distance') to their optimal domain applications.",
        "Assign each problem to its respective mathematical distance container.",
        "Click 'Validate & Submit' to verify your geometric intuition."
      ],
      "hint": "Document text comparison uses Cosine Similarity (direction over length); city street grid navigation uses Manhattan Distance.",
      "quiz": {
        "q": "Why is Cosine Similarity preferred over Euclidean Distance when comparing word frequency vectors between long and short documents on the same topic?",
        "opts": [
          "Because cosine distance can only be calculated on small numbers.",
          "Because cosine similarity evaluates orientation (topic alignment) rather than vector magnitude (document length).",
          "Because Euclidean distance cannot be used with text data.",
          "Because cosine similarity runs faster on GPU."
        ],
        "correct": 1,
        "fb": "A long article and a short summary on the same topic share identical word frequency ratios. Euclidean distance would penalize the length difference; Cosine evaluates angle, matching them perfectly."
      },
      "exercise": {
        "title": "Distance Metrics: Aligning Geometry to Domains",
        "categories": {
          "euc": "Euclidean Metric (L2 Straight Line)",
          "cos": "Cosine Metric (Angular Alignment)",
          "man": "Manhattan Metric (L1 Grid / City Block)"
        },
        "items": {
          "m1": "Compare topical similarity between a 500-word blog post and a 5,000-word whitepaper",
          "m2": "Calculate minimum delivery vehicle travel distance along orthogonal urban grid street intersections",
          "m3": "Compute direct Euclidean distance between geographic GPS latitude and longitude coordinates"
        },
        "passMsg": "Geometric intuition validated! You precisely matched distance metrics to their real-world domain requirements.",
        "failMsg": "Mismatched distance metrics. Remember: angles match text topics (cosine); city grids require L1 (Manhattan)."
      }
    },
    "15": {
      "title": "Live K-Means and Musical Tastes",
      "p1": "K-Means is the most popular clustering algorithm. It partitions N observations into K distinct clusters where each observation belongs to the cluster with the nearest centroid (mean). The objective is minimizing within-cluster inertia (the sum of squared distances to centroids).",
      "p2": "The algorithm alternates between two steps until convergence: 1) Assignment Step: assign each point to its closest centroid. 2) Update Step: recompute each centroid as the geometric mean of all points assigned to it. Because it is sensitive to initial random centroid placement, multiple runs with K-Means++ initialization are standard.",
      "takeaways": [
        "K-Means iteratively optimizes centroid positions to minimize within-cluster inertia.",
        "Selecting the number of clusters K is often determined using the Elbow Method or Silhouette Analysis.",
        "K-Means assumes spherical clusters of similar density; it struggles with arbitrary concentric or elongated shapes."
      ],
      "instructions": [
        "Click 'K-Means Step (Iterate)' to observe the iterative convergence of centroids towards data clusters.",
        "Advance the iterations until the centroids stabilize (reach convergence at Step >= 3).",
        "Click 'Validate & Submit' to verify cluster convergence."
      ],
      "hint": "Click the step button at least 3 times to observe the centroids migrate and settle into cluster centers.",
      "quiz": {
        "q": "What does the 'Elbow Method' identify when deciding the optimal number of clusters K?",
        "opts": [
          "The iteration where training accuracy reaches 100%.",
          "The point on the inertia curve where adding another cluster yields diminishing marginal reduction in variance.",
          "The exact number of outliers present in the dataset.",
          "The learning rate that prevents gradient descent from diverging."
        ],
        "correct": 1,
        "fb": "As K increases, inertia naturally drops. The 'elbow' is the inflection point where additional clusters no longer provide significant explanatory gain."
      },
      "exercise": {
        "title": "K-Means Simulation: Centroid Convergence",
        "passMsg": "Centroids converged! The algorithm successfully discovered the latent cluster partitions in the feature space.",
        "failMsg": "Centroids have not reached convergence. Click 'K-Means Step' to iterate until positions stabilize."
      }
    },
    "16": {
      "title": "Intro to NLP and Simple Chatbots",
      "p1": "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. Early NLP relied on rule-based regular expressions and context-free grammars; modern NLP leverages statistical representations and transformer language models.",
      "p2": "In intent classification for customer support chatbots, user utterances ('Book me a flight to Madrid', 'Cancel my reservation', 'Where is my order?') are classified into predefined business intents. The model maps variable human phrasing to deterministic API triggers.",
      "takeaways": [
        "NLP bridges unstructured human text with structured computational operations.",
        "Intent classification identifies the user's primary goal; entity recognition extracts key parameters (dates, locations, numbers).",
        "Robust NLP chatbots handle linguistic variations, synonyms, and typos without breaking."
      ],
      "instructions": [
        "Classify the 3 incoming customer utterances into their corresponding operational intent containers ('Book Flight', 'Cancel Order', 'Check Status').",
        "Drag each customer message into its target intent bucket.",
        "Click 'Validate & Submit' to test intent routing."
      ],
      "hint": "Identify the core verb and objective in each sentence to determine its business destination.",
      "quiz": {
        "q": "In conversational AI, what is the difference between an 'Intent' and an 'Entity'?",
        "opts": [
          "Intent is the language model; Entity is the database.",
          "Intent is the user's overall goal (e.g. 'BookFlight'); Entity is a specific parameter extracted from text (e.g. Destination: 'Paris', Date: 'Friday').",
          "Intent is for English text; Entity is for Spanish text.",
          "They are completely interchangeable terms."
        ],
        "correct": 1,
        "fb": "Intent represents the high-level action the user wants to execute; Entities are the specific slots/parameters needed to carry out that action."
      },
      "exercise": {
        "title": "Intent Routing: Map Utterances to Business Triggers",
        "categories": {
          "book": "Intent: Reserve / Book Travel",
          "cancel": "Intent: Cancel Existing Order",
          "status": "Intent: Check Shipment Status"
        },
        "items": {
          "p1": "I need two round-trip flight tickets to Madrid departing next Tuesday morning",
          "p2": "Please abort my active shipment #58291 and issue a refund to my credit card",
          "p3": "Has package tracking code #9924 left the distribution warehouse yet?"
        },
        "passMsg": "Intent classification verified! All customer utterances accurately routed to downstream business handlers.",
        "failMsg": "Intent routing error detected. Verify the customer's communicative goal for each message."
      }
    },
    "17": {
      "title": "Live Text Cleaning & Tokenization",
      "p1": "Computers cannot process raw text strings directly; text must undergo text preprocessing and tokenization to be converted into numeric sequences. Raw text is full of noise: irregular capitalization, punctuation marks, emojis, and HTML tags.",
      "p2": "The classic preprocessing pipeline involves: 1) Case Normalization (lowercasing), 2) Punctuation & Special Character Removal, 3) Tokenization (splitting into distinct word or subword units), 4) Stopword Filtering (removing uninformative functional words like 'the', 'is', 'at'), and 5) Stemming or Lemmatization (reducing words to their grammatical root).",
      "takeaways": [
        "Tokenization breaks continuous string text into atomic linguistic units (tokens).",
        "Stopword removal discards frequent grammatical tokens that add zero semantic value in keyword search and bag-of-words.",
        "Lemmatization reduces words to their dictionary root using morphological analysis (e.g. 'better' -> 'good')."
      ],
      "instructions": [
        "Click 'Apply Tokenizer Pipeline' to execute lowercasing, punctuation stripping, and stopword filtering.",
        "Inspect the extracted informative tokens and filtered stopwords.",
        "Click 'Validate & Submit' to verify text tokenization."
      ],
      "hint": "Observe how words like 'the', 'is', and 'and' are filtered out, leaving high-information semantic terms.",
      "quiz": {
        "q": "What is the primary motivation for filtering 'stopwords' (such as 'the', 'is', 'at') in traditional bag-of-words and TF-IDF models?",
        "opts": [
          "Because stopwords cause programming language syntax errors in Python.",
          "Because they appear with extreme frequency across all documents, offering virtually zero discriminative power for topic modeling or classification.",
          "To reduce vocabulary size to exactly 10 words.",
          "Stopwords cannot be converted to ASCII code."
        ],
        "correct": 1,
        "fb": "Stopwords carry structural grammar rather than domain topic content. In bag-of-words models, filtering them reduces dimensionality and focuses on informative keywords."
      },
      "exercise": {
        "title": "Tokenization Pipeline: Punctuation, Case & Stopwords",
        "passMsg": "Tokenization pipeline verified! Clean semantic tokens extracted and vocabulary noise filtered.",
        "failMsg": "Pipeline execution required. Run the tokenizer pipeline to generate token arrays before submitting."
      }
    },
    "18": {
      "title": "Sentiment Analysis & Lexical Approaches",
      "p1": "Sentiment Analysis determines the emotional valence or opinion polarity (Positive, Negative, or Neutral) expressed in text. Early approaches use Lexicon-Based Methods (such as VADER or SentiWordNet), where each word is assigned a predetermined polarity score.",
      "p2": "The overall sentence score is computed by summing the lexical scores of its words: positive words ('exceptional', 'clean', 'delightful') add positive value, while negative words ('horrible', 'dirty', 'broken') subtract. However, pure lexicons struggle with negation ('not good'), sarcasm ('just what I needed, another flight delay!'), and domain context.",
      "takeaways": [
        "Lexicon approaches score sentiment by looking up words in pre-compiled polarity dictionaries.",
        "Rule-based modifiers handle basic negation ('not happy') and degree intensifiers ('very delicious').",
        "Modern sentiment models rely on deep contextual embeddings (BERT, RoBERTa) to resolve sarcasm and nuanced context."
      ],
      "instructions": [
        "Review the customer hotel review text in the evaluation box.",
        "Select words from the sentence and click 'Score Polarity' to calculate the cumulative valence.",
        "Ensure the calculated sentiment accurately reflects the customer's sentiment, then click 'Validate & Submit'."
      ],
      "hint": "Identify polarized terms like 'outstanding', 'spotless', or 'unacceptable' to compute the net sentiment score.",
      "quiz": {
        "q": "Why do simple lexicon lookup methods fail on the phrase 'The hotel was not great at all'?",
        "opts": [
          "Because 'hotel' has an ambiguous dictionary definition.",
          "Because 'great' has a strong positive score in the lexicon, which naive sum-of-words methods may tally as positive unless negation context ('not') is explicitly modeled.",
          "Because lexicon models can only read sentences with fewer than 4 words.",
          "Because 'not' cannot be scored."
        ],
        "correct": 1,
        "fb": "Without n-gram awareness or contextual syntax parsing, a bag-of-words lexicon sees the word 'great' and assigns positive points, failing to detect that the preceding 'not' reverses the sentiment."
      },
      "exercise": {
        "title": "Sentiment Scoring: Lexical Polarity Valuation",
        "passMsg": "Sentiment polarity evaluated! You resolved the text's emotional valence with high fidelity.",
        "failMsg": "Sentiment evaluation incomplete. Score the sentence terms to compute overall polarity before submitting."
      }
    },
    "19": {
      "title": "Hotel Reviews I: TF-IDF",
      "p1": "Simple word counts (CountVectorizer) give excessive weight to common terms that appear frequently everywhere. TF-IDF (Term Frequency - Inverse Document Frequency) solves this by reweighting words based on their rarity across the entire document corpus.",
      "p2": "TF measures how often term t appears in document d: TF(t, d) = count(t, d) / total_words(d). IDF measures rarity: IDF(t) = log(Total_Documents / Documents_with_t). The product TF * IDF assigns the highest scores to words that appear frequently within a specific review, but rarely in the rest of the corpus — pinpointing unique keywords (e.g. 'cockroach', 'concierge', 'jacuzzi').",
      "takeaways": [
        "TF-IDF penalizes ubiquitous words and promotes terms that are uniquely characteristic of specific documents.",
        "TF measures local term frequency; IDF measures global document rarity.",
        "TF-IDF vectors transform variable-length text into fixed-length numeric vectors for machine learning classifiers."
      ],
      "instructions": [
        "Select a word from the sample document collection to inspect its Term Frequency (TF) and Inverse Document Frequency (IDF).",
        "Observe how common terms receive low IDF weights, while rare distinctive terms receive high TF-IDF scores.",
        "Click 'Validate & Submit' to confirm understanding of TF-IDF vectorization."
      ],
      "hint": "Notice that words appearing in every document have an IDF near zero, resulting in a zero TF-IDF weight regardless of frequency.",
      "quiz": {
        "q": "In a corpus of 10,000 hotel reviews, what happens to the TF-IDF score of a word that appears in all 10,000 documents?",
        "opts": [
          "It receives the highest possible score in the vocabulary.",
          "Its IDF equals log(10,000 / 10,000) = log(1) = 0, so its overall TF-IDF weight drops to zero.",
          "It causes a division-by-zero error in scikit-learn.",
          "Its score doubles for every new document added."
        ],
        "correct": 1,
        "fb": "Because IDF(t) = log(N / DF), if DF = N, the ratio is 1 and log(1) = 0. Ubiquitous words carry zero distinctive weight in TF-IDF."
      },
      "exercise": {
        "title": "TF-IDF Weighting: Term Frequency vs. Global Document Rarity",
        "passMsg": "TF-IDF vectorization inspected! You observed how inverse document frequency damps ubiquitous corpus noise.",
        "failMsg": "Select words and inspect TF and IDF components before submitting."
      }
    },
    "20": {
      "title": "Hotel Reviews II: Modeling & Diagnostics",
      "p1": "Once hotel reviews are vectorized with TF-IDF, we train a classifier (such as Logistic Regression or Linear SVM) to predict binary review polarity: Positive (4-5 stars) or Negative (1-2 stars).",
      "p2": "Model diagnostics involve inspecting the model's highest positive and negative learned feature weights. Highly positive coefficients indicate praise terms ('immaculate', 'breathtaking', 'courteous'); highly negative coefficients reveal complaints ('filthy', 'unresponsive', 'overcharged'). Analyzing misclassified reviews highlights blind spots like sarcasm or ambiguous wording.",
      "takeaways": [
        "Linear model coefficients on TF-IDF vectors offer clear feature explainability for text classification.",
        "Diagnostic error analysis examines False Positives and False Negatives to uncover subtle linguistic failure modes.",
        "N-grams (bi-grams like 'not clean', 'room service') capture contextual phrases that unigrams miss."
      ],
      "instructions": [
        "Classify the 4 vocabulary features into 'Positive Review Indicators' (High Positive Weight) or 'Negative Review Indicators' (High Negative Weight).",
        "Drag each keyword into its corresponding sentiment coefficient bin.",
        "Click 'Validate & Submit' to verify model feature diagnostics."
      ],
      "hint": "Words reflecting cleanliness and courtesy carry positive weights; terms indicating dirtiness or noise carry negative weights.",
      "quiz": {
        "q": "When inspecting a linear text classifier's learned weights, what does a large positive coefficient on the feature 'spotless' signify?",
        "opts": [
          "The word was spelled incorrectly in the dataset.",
          "The presence of the word 'spotless' strongly increases the log-odds of the review being classified as Positive.",
          "The word will be removed during the next training epoch.",
          "The classifier cannot interpret the word."
        ],
        "correct": 1,
        "fb": "In linear classification models, positive weights push the log-odds toward the positive class, confirming that 'spotless' is a strong predictive signal of customer satisfaction."
      },
      "exercise": {
        "title": "Feature Diagnostics: Top Sentiment Coefficients",
        "categories": {
          "pos": "Positive Coefficient (Boosts Positive Class)",
          "neg": "Negative Coefficient (Boosts Negative Class)"
        },
        "items": {
          "w1": "'immaculate' (Impeccable cleanliness and presentation)",
          "w2": "'cockroaches' (Infestation and sanitary violation)",
          "w3": "'courteous' (Exceptional and friendly staff service)",
          "w4": "'deafening' (Intolerable noise disturbance throughout the night)"
        },
        "passMsg": "Feature diagnostics approved! You accurately distinguished vocabulary polarity coefficients.",
        "failMsg": "Misassigned feature coefficients. Remember: complimentary terms have positive weights; complaint terms have negative weights."
      }
    },
    "21": {
      "title": "Forecasting Fundamentals & Stationarity",
      "p1": "Time Series data consists of observations recorded sequentially over time, where chronological order matters (temporal dependence). Classical decomposition breaks a time series into three components: Trend (long-term progression), Seasonality (repeating cyclical patterns, such as daily or annual peaks), and Residuals (stochastic noise).",
      "p2": "Most statistical forecasting algorithms (like ARIMA) require the series to be Stationary — meaning its statistical properties (mean, variance, and autocorrelation) do not change over time. Non-stationary series with strong trends or seasonal variance must be transformed using Differencing (subtracting y_t - y_{t-1}) or log transformations before modeling.",
      "takeaways": [
        "Time series observations violate the i.i.d. (independent and identically distributed) assumption of standard ML.",
        "Stationarity implies constant mean and variance over time, confirmed statistically via the Augmented Dickey-Fuller (ADF) test.",
        "Differencing (d = 1 or d = 2) eliminates linear trends, converting non-stationary series into stationary ones."
      ],
      "instructions": [
        "Inspect the non-stationary time series exhibiting a steep linear upward trend.",
        "Apply the First-Order Differencing operator (y_t - y_{t-1}) to stabilize the mean and achieve stationarity.",
        "Click 'Validate & Submit' to verify that the transformed series fluctuates around a constant mean."
      ],
      "hint": "Applying differencing (Order d = 1) removes the upward slope, centering fluctuations around zero.",
      "quiz": {
        "q": "Why is stationarity a prerequisite for fitting classical ARIMA time series models?",
        "opts": [
          "Because non-stationary data cannot be stored in a pandas DataFrame.",
          "Because parameters (mean, variance, auto-covariance) must remain stable over time for historical patterns to reliably generalize into future forecast horizons.",
          "Stationarity is only needed if the data was collected in winter.",
          "Non-stationary data cannot be plotted on a chart."
        ],
        "correct": 1,
        "fb": "If a series has an accelerating trend or changing variance, parameters estimated from past data will constantly drift, rendering long-term predictions invalid."
      },
      "exercise": {
        "title": "Time Series Transformation: Achieve Stationarity via Differencing",
        "passMsg": "Series stationary! Trend removed, mean stabilized, and the data is primed for ARIMA modeling.",
        "failMsg": "Series remains non-stationary. Apply differencing to eliminate trend and stabilize the mean around zero."
      }
    },
    "22": {
      "title": "ARIMA Models & Electricity Demand",
      "p1": "ARIMA (Autoregressive Integrated Moving Average) is the foundational statistical model for univariate time series forecasting. It is parameterized by three terms: ARIMA(p, d, q).",
      "p2": "p (Autoregression): uses past observations y_{t-1}...y_{t-p} to predict future values. d (Integration): the number of differencing steps applied to make the series stationary. q (Moving Average): uses past forecast forecast error residuals e_{t-1}...e_{t-q}. In power grid management, ARIMA predicts hourly electricity consumption based on historical load cycles.",
      "takeaways": [
        "ARIMA(p, d, q) combines autoregression on past values (p), differencing for stationarity (d), and moving averages of past errors (q).",
        "Autocorrelation Function (ACF) and Partial Autocorrelation (PACF) plots guide parameter selection for p and q.",
        "Seasonal ARIMA (SARIMA) adds seasonal counterparts (P, D, Q)_m to handle recurring weekly or annual electricity cycles."
      ],
      "instructions": [
        "Adjust the ARIMA parameters (p, d, q) in the interactive grid load simulator.",
        "Set d = 1 to stabilize stationarity, and configure p >= 1 and q >= 1 to capture auto-regressive demand patterns.",
        "Click 'Validate & Submit' to verify the forecast fit against actual power consumption."
      ],
      "hint": "An ARIMA(1, 1, 1) configuration reliably models linear trend stationarity with short-term error smoothing.",
      "quiz": {
        "q": "In the ARIMA(p, d, q) notation, what does the parameter 'p' specify?",
        "opts": [
          "The polynomial degree of the neural network.",
          "The number of lagged past observations of the target variable included as predictors in the autoregressive equation.",
          "The p-value of the null hypothesis test.",
          "The percentage of missing data in the time series."
        ],
        "correct": 1,
        "fb": "The 'p' parameter defines the order of the Autoregressive component — specifically, how many past time steps (lags) are used to predict the current value."
      },
      "exercise": {
        "title": "ARIMA Calibration: Forecast Energy Consumption",
        "passMsg": "ARIMA model calibrated! Forecast tracking mirrors historical load cycles with low root-mean-square error.",
        "failMsg": "Model parameters uncalibrated. Configure autoregressive lag p and differencing order d to capture series dynamics."
      }
    },
    "23": {
      "title": "Machine Learning vs. Statistics in Series (SVR)",
      "p1": "Classical statistics (ARIMA, Exponential Smoothing) models time series using mathematical stochastic equations. Modern Machine Learning (Support Vector Regressors, Random Forests, LightGBM, LSTMs) treats forecasting as a tabular regression problem via Feature Lagging.",
      "p2": "Feature Lagging converts time series into supervised learning tabular formats: columns are created for y_{t-1}, y_{t-2}, rolling means, and calendar features (day of week, hour, holiday flags). While classical models shine on small, univariate series with strict assumptions, ML regressors excel when external multi-dimensional covariates (e.g. weather forecasts, temperature, promotion flags) heavily influence the outcome.",
      "takeaways": [
        "Feature engineering transforms sequential time series into supervised tabular training matrices with lagged features.",
        "Statistical models (ARIMA) are lightweight and interpretable for univariate data; ML models (SVR, GBDTs) handle complex multi-variate exogenous drivers.",
        "Time series cross-validation must strictly respect time (Time Series Split / Rolling Window) to avoid training on future data."
      ],
      "instructions": [
        "Classify the 4 forecasting scenarios into 'Classical Statistical Models (ARIMA)' or 'Machine Learning Tabular Regressors (SVR/GBDT)'.",
        "Place each use case into its corresponding analytical approach container.",
        "Click 'Validate & Submit' to evaluate model selection."
      ],
      "hint": "Univariate series with pure seasonal cycles suit ARIMA; multi-feature problems with weather, pricing, and promotions suit ML Regressors.",
      "quiz": {
        "q": "Why must standard K-Fold Cross-Validation NEVER be used for evaluating time series models?",
        "opts": [
          "Because K-Fold runs too slowly in Python.",
          "Because standard K-Fold randomly shuffles data, training models on future data points to predict past data points (temporal data leakage).",
          "Because time series cannot have more than 5 folds.",
          "Because K-Fold only works for classification."
        ],
        "correct": 1,
        "fb": "Random shuffling destroys temporal order and creates catastrophic look-ahead leakage. Time series must be evaluated using forward-chaining rolling window splits."
      },
      "exercise": {
        "title": "Model Selection: Classical ARIMA vs. Supervised ML Regressors",
        "categories": {
          "stat": "Classical Statistics (ARIMA / Exponential Smoothing)",
          "ml": "Supervised ML Regressors (SVR / LightGBM / GBDT)"
        },
        "items": {
          "s1": "Univariate hourly electricity load with strict weekly periodicity and no external exogenous sensors",
          "s2": "Retail store demand forecasting driven by 50 external marketing promotions, price discounts, and weather covariates",
          "s3": "Lightweight embedded IoT temperature monitoring running with minimal compute on microcontroller hardware",
          "s4": "Multi-warehouse supply chain inventory replenishment with complex cross-sku correlations and lag features"
        },
        "passMsg": "Model selection approved! You correctly matched time series characteristics to statistical vs supervised ML paradigms.",
        "failMsg": "Selection mismatch. High-dimensional exogenous covariates require ML regressors; clean univariate series suit ARIMA."
      }
    },
    "24": {
      "title": "RL Foundations & the Bellman Equation",
      "p1": "Reinforcement Learning (RL) is the third major paradigm of Machine Learning alongside Supervised and Unsupervised Learning. In RL, an Agent learns to make sequential decisions by interacting with an Environment through trial and error, aiming to maximize cumulative numerical Rewards over time.",
      "p2": "The cornerstone of RL is the Bellman Equation: Q(s, a) = R(s, a) + gamma * max_{a'} Q(s', a'). It decomposes the value of an action into two terms: the immediate reward R(s, a), plus the discounted expected future return from the next state s', scaled by the discount factor gamma (0 < gamma < 1).",
      "takeaways": [
        "In RL, the agent learns optimal policies from environmental feedback (rewards/penalties) without labeled ground-truth answers.",
        "The discount factor gamma balances immediate gratification (gamma near 0) against long-term strategic vision (gamma near 1).",
        "The Bellman Equation provides the recursive mathematical foundation for Q-Learning and Deep Q-Networks (DQN)."
      ],
      "instructions": [
        "Inspect the Bellman Equation parameters: Immediate Reward (R), Discount Factor (gamma), and Next State Max Value (Q_next).",
        "Adjust the discount factor gamma to observe how future expected reward cascades into the current state-action value Q(s, a).",
        "Configure gamma >= 0.80 for a long-term strategic policy and click 'Validate & Submit'."
      ],
      "hint": "A high discount factor (gamma = 0.90) prioritizes long-term terminal goal rewards over immediate step penalties.",
      "quiz": {
        "q": "In the Bellman Equation, what is the behavioral consequence of setting the discount factor gamma = 0?",
        "opts": [
          "The agent becomes completely myopic, caring exclusively about the immediate reward and ignoring all future consequences.",
          "The agent becomes infinite-sighted, predicting millions of steps into the future.",
          "The algorithm throws a ZeroDivisionError in Python.",
          "The rewards are multiplied by infinity."
        ],
        "correct": 1,
        "fb": "When gamma = 0, the future value term gamma * max Q(s', a') becomes 0. The agent acts purely greedily for the immediate next reward, ignoring long-term survival or future goals."
      },
      "exercise": {
        "title": "Bellman Value Iteration: Discounting Future Rewards",
        "passMsg": "Bellman equation calculated! High discount factor established a long-term strategic policy.",
        "failMsg": "Configure discount factor gamma >= 0.80 to ensure the agent accounts for long-term downstream rewards."
      }
    },
    "25": {
      "title": "Gridworld Simulator: Peter and the Wolf (Gym)",
      "p1": "In the classic Microsoft ML-For-Beginners Gridworld environment ('Peter and the Wolf'), an agent (Peter) navigates a grid with obstacles, predators (wolves), and a target goal (the village or catching the wolf) to maximize episodic reward.",
      "p2": "Q-Learning maintains a lookup table Q(state, action). During training, the agent faces the Exploration vs. Exploitation dilemma: should it Exploit known high-value paths, or Explore untested moves that might discover a faster route? The epsilon-greedy policy starts with high exploration (epsilon near 1.0) and decays over time toward pure exploitation.",
      "takeaways": [
        "Q-Learning converges to an optimal policy in finite discrete Markov Decision Processes (MDPs).",
        "Epsilon-greedy schedules balance exploratory randomness with exploiting learned optimal Q-values.",
        "Step penalties (-1 per step) encourage the agent to find the shortest possible path to the terminal goal."
      ],
      "instructions": [
        "Click 'Train Q-Learning Episode' to run simulation steps in the gridworld.",
        "Observe Peter navigate past obstacles toward the goal as the Q-table updates.",
        "Train until the agent successfully reaches the goal state, then click 'Validate & Submit'."
      ],
      "hint": "Run episodes to populate the Q-table until the agent learns a collision-free policy reaching the green target.",
      "quiz": {
        "q": "Why is an 'Epsilon-Greedy' policy necessary when training a Q-Learning agent?",
        "opts": [
          "To compress the Q-table onto the hard drive.",
          "To balance Exploration (discovering new states and paths) with Exploitation (leveraging the best known path).",
          "To prevent the GPU from overheating during training.",
          "Because reinforcement learning cannot run without random numbers."
        ],
        "correct": 1,
        "fb": "If an agent only exploits from the start, it may get stuck in a suboptimal local trap and never discover the highest-reward global path. Exploration guarantees state-space coverage."
      },
      "exercise": {
        "title": "Gridworld Q-Learning: Navigation & Obstacle Avoidance",
        "passMsg": "Q-policy converged! Peter navigated the grid environment and reached the target safely.",
        "failMsg": "Agent has not reached the target goal. Run additional training episodes to update the Q-table policy."
      }
    },
    "26": {
      "title": "Industrialization, Data Drift, and MLOps",
      "p1": "Deploying a model to production is only day one of its lifecycle. Over time, model performance inevitably degrades due to Model Drift. MLOps (Machine Learning Operations) encompasses the tools, pipelines, and monitoring infrastructure required to keep models reliable, compliant, and continuously updated in production.",
      "p2": "Two distinct types of drift occur: 1) Covariate Shift (Data Drift): the input distribution P(X) changes (e.g. users buy winter coats instead of swimwear), while the underlying relationship P(y|X) stays the same. 2) Concept Drift: the underlying relationship P(y|X) itself changes (e.g. economic inflation alters purchasing power, or fraudsters adopt entirely new attack vectors). Detecting drift triggers automated re-training CI/CD pipelines.",
      "takeaways": [
        "MLOps unites DevOps practices with machine learning pipelines: automated testing, CI/CD, and continuous observability.",
        "Data Drift changes input feature distributions; Concept Drift alters the mathematical relationship between features and targets.",
        "Production monitoring must track data schemas, latency percentiles (p95/p99), and feature drift using Kolmogorov-Smirnov tests or Population Stability Index (PSI)."
      ],
      "instructions": [
        "Classify the 3 production operational incidents into 'Covariate Shift (Data Drift)', 'Concept Drift', or 'Pipeline Infrastructure Defect'.",
        "Drag each incident card into its matching MLOps triage container.",
        "Click 'Validate & Submit' to verify your operational diagnostics."
      ],
      "hint": "A new demographic using the app is Data Drift; an economic recession changing default probabilities is Concept Drift; a schema type mismatch is an Infrastructure Defect.",
      "quiz": {
        "q": "During the COVID-19 pandemic, consumer spending patterns changed abruptly overnight. What kind of drift did retail demand forecasting models experience?",
        "opts": [
          "Hardware Drift, because computers ran slower.",
          "Concept Drift: the historical relationship between past dates, holidays, and consumer buying behavior fundamentally decoupled.",
          "Zero drift, because pandas dataframes were unchanged.",
          "Syntax Drift in Python code."
        ],
        "correct": 1,
        "fb": "When human behavior or macro conditions fundamentally transform how inputs translate to outputs, historical predictive relationships break down. This is the definition of Concept Drift."
      },
      "exercise": {
        "title": "MLOps Triage: Categorize Production Incidents",
        "categories": {
          "data_drift": "Covariate Shift (Data Drift)",
          "concept_drift": "Concept Drift (Ground Truth Decoupling)",
          "pipe_error": "Pipeline Infrastructure Defect"
        },
        "items": {
          "inc1": "Mobile app expands into Latin America: user language and currency distributions change significantly, but conversion criteria remain the same",
          "inc2": "A sudden financial crisis causes historically prime borrowers with high credit scores to default at unprecedented rates",
          "inc3": "An upstream database migration silently alters a datetime column format from ISO-8601 to Epoch Unix seconds, crashing the feature pipeline"
        },
        "passMsg": "MLOps triage verified! You accurately isolated infrastructure faults from covariate and concept drift events.",
        "failMsg": "Incident triage misclassified. Distinguish upstream data defects from distribution shifts and fundamental concept drift."
      }
    },
    "27": {
      "title": "Audit & Accountability: RAI Dashboard",
      "p1": "Responsible AI (RAI) is the systematic operationalization of AI ethics, fairness, transparency, and safety across the model lifecycle. High-stakes models (lending, healthcare, criminal justice, hiring) cannot remain 'black boxes' — practitioners must provide model interpretability, error analysis, and fairness audits.",
      "p2": "The Responsible AI Dashboard integrates multiple diagnostic pillars: 1) Model Interpretability (SHAP / LIME values showing which features drove an individual prediction), 2) Disaggregated Error Analysis (pinpointing error concentrations in specific demographic slices), and 3) Counterfactual Analysis ('what minimum change would turn a rejected loan into an approval?').",
      "takeaways": [
        "Responsible AI enforces ethics, transparency, fairness, and accountability throughout the system lifecycle.",
        "SHAP (Shapley Additive exPlanations) grounds feature importance in game theory, explaining individual predictions.",
        "Counterfactual analysis reveals actionable recourse for end users affected by automated algorithmic decisions."
      ],
      "instructions": [
        "Audit the candidate model's Responsible AI dashboard across Accuracy, Disparity, and Feature Attribution.",
        "Inspect the audit findings and certify that the model complies with governance and transparency standards.",
        "Click 'Validate & Submit' to finalize the comprehensive Machine Learning Track certification."
      ],
      "hint": "Check that feature attributions are interpretable and that subgroup demographic disparity is documented and mitigated.",
      "quiz": {
        "q": "What does a 'Counterfactual Explanation' provide to a loan applicant who was rejected by an algorithmic decision model?",
        "opts": [
          "A copy of the entire Python source code of the bank's system.",
          "Actionable recourse: the minimum specific changes to their profile (e.g. 'Pay down $1,500 in credit card debt') that would flip the model's decision to 'Approved'.",
          "An apology email written by an AI chatbot.",
          "A random number generator."
        ],
        "correct": 1,
        "fb": "Counterfactual explanations deliver actionable recourse. Instead of vague scores, they tell users exactly what realistic changes in input variables would produce the desired favorable outcome."
      },
      "exercise": {
        "title": "Responsible AI Audit: Interpretability & Recourse Certification",
        "passMsg": "Responsible AI audit certified! You have completed the comprehensive Machine Learning Track with full ethical and technical rigor!",
        "failMsg": "Review the RAI audit metrics. Verify interpretability and fairness criteria before submitting certification."
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.COURSE_TRANSLATIONS_EN = COURSE_TRANSLATIONS_EN;
}

if (typeof module !== 'undefined') {
  module.exports = { COURSE_TRANSLATIONS_EN };
}
