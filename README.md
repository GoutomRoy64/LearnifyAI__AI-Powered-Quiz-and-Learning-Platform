# LearnifyAI - AI-Powered Quiz and Learning Platform

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" alt="Google Gemini">
</p>

LearnifyAI is a modern, full-stack web application designed to be a personal AI-powered learning companion. It provides an interactive and engaging platform for both teachers and students.

---

### **[Live Demo](https:https://learnifyai1.web.app)**

---

## Project Demonstration

Watch a full demonstration of the LearnifyAI platform in action, from user registration to AI-powered quiz generation and analysis.

**[Watch the Project Demonstration on Google Drive](https://drive.google.com/file/d/1GASV8iLud_cl70bQNmnNCv5tUxfFkdJM/view?usp=sharing)**

---

## Key Features

### For Students:
-   **Secure Authentication:** Safe and secure signup and login system with validation and CAPTCHA.
-   **Personalized Dashboard:** A central hub to access public quizzes and view quiz history.
-   **Classroom System:** Join classrooms, view class-specific quizzes and posts, and see a list of members.
-   **AI Study Buddy:** A conversational AI tutor that can answer questions about various subjects and analyze uploaded images and PDFs.
-   **Secure Quiz Environment:** Quizzes must be taken in fullscreen mode, with automatic submission and disabled text copying to ensure integrity.
-   **Detailed Results:** After each quiz, students can review their answers, see the correct ones, and get AI-powered explanations for their mistakes.
-   **Profile Management:** View personal statistics like average scores and performance by subject, and edit personal information.

### For Teachers:
-   **Secure Authentication:** Dedicated and secure login and signup for teachers.
-   **Professional Dashboard:** Manage all created quizzes, view the number of attempts, and access quick actions.
-   **Classroom Management:** Create and manage classrooms, view student members, and approve or deny join requests.
-   **AI-Powered Quiz Generation:**
    -   **From Text:** Generate quizzes by providing a topic or pasting a block of text.
    -   **From PDF:** Upload a PDF document, and the AI will generate relevant questions.
    -   **Customization:** Choose the number of questions and the skill level for AI-generated quizzes.
-   **Manual Quiz Creation:** Full control to create quizzes question by question, with multiple-choice options and a designated correct answer.
-   **Quiz Results Analysis:** View detailed results for each quiz, including the total number of attempts and the class's average score.

---

## Tech Stack

-   **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript (ES6 Modules)
-   **Backend & Database:** Firebase (Authentication, Firestore)
-   **AI Integration:** Google Gemini API
-   **Libraries:** Marked.js (for Markdown rendering), PDF.js (for PDF text extraction)

---

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/GoutomRoy64/LearnifyAI__AI-Powered-Quiz-and-Learning-Platform.git](https://github.com/GoutomRoy64/LearnifyAI__AI-Powered-Quiz-and-Learning-Platform.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd LearnifyAI__AI-Powered-Quiz-and-Learning-Platform
    ```
3.  **Create your Firebase Keys file:**
    -   In the `public` folder, create a file named `firebase-keys.js`.
    -   Add your Firebase project configuration to this file.
4.  **Create your AI Keys file:**
    -   In the `public/ai` folder, create a file named `page.js`.
    -   Add your Google Gemini API key to this file.
5.  **Run the local server:**
    -   You will need the Firebase CLI. If you don't have it, run `npm install -g firebase-tools`.
    -   Start the local hosting emulator:
    ```bash
    firebase serve --only hosting
    ```
6.  Open your browser and navigate to `http://localhost:5000`.

---


## Security

-   **API Key Protection:** All sensitive API keys and Firebase configuration details are stored in files that are included in the `.gitignore`. This prevents them from being committed to the public GitHub repository.
-   **User Authentication:** All pages beyond the landing, login, and signup pages are protected and require a user to be logged in.
-   **Role-Based Access:** The application distinguishes between 'student' and 'teacher' roles, ensuring that users can only access the pages and features relevant to them.

---

## Future Work

-   **Full Backend API Calls:** Migrate all client-side Gemini API calls to a secure backend (like Firebase Cloud Functions) to fully protect the API key in a production environment.
-   **Gamification:** Introduce points, badges, and leaderboards to increase student engagement.
-   **Advanced Analytics:** Provide teachers with more detailed analytics on student and class performance.

---

## Author

This project was created by **Goutom Roy**.

-   **Portfolio:** [goutomroy64.github.io/Portfolio_V1](https://goutomroy64.github.io/Portfolio_V1)
-   **Email:** [goutom.roy0364@gmail.com](mailto:goutom.roy0364@gmail.com)
