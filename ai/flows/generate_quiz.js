// ai/flows/generate_quiz.js

import { GEMINI_API_KEY } from '../page.js';

/**
 * Generates a quiz from a given text context using the Gemini API.
 * @param {string} context The text, topic, or content to generate questions from.
 * @param {number} numQuestions The number of questions to generate.
 * @param {string} skillLevel The difficulty level for the questions (e.g., 'Beginner', 'Intermediate').
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of question objects.
 */
export async function generateQuizFromContext(context, numQuestions, skillLevel) {
    const apiKey = GEMINI_API_KEY;
    // Note: Using a specific version for more predictable structured JSON output.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const prompt = `
        Based on the following context, generate a multiple-choice quiz.

        Context: "${context}"

        Generate exactly ${numQuestions} questions.
        The difficulty level for the questions should be: ${skillLevel}.
        Each question must have exactly 4 options.
        One of the options must be the correct answer.

        Return the response as a valid JSON object. Do not include any text outside of the JSON object.
        The JSON object should be an array of questions.
        Each question object in the array must have the following structure:
        {
          "questionText": "The text of the question",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correctAnswerIndex": 0
        }
        The "correctAnswerIndex" should be the 0-based index of the correct option in the "options" array.
    `;

    const payload = {
        contents: [{
            parts: [{ "text": prompt }]
        }],
        generationConfig: {
            "responseMimeType": "application/json",
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API request failed: ${errorData?.error?.message || response.statusText}`);
        }

        const result = await response.json();
        const jsonString = result.candidates[0].content.parts[0].text;
        
        // The API returns the JSON as a string, so we need to parse it.
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Error generating quiz with AI:", error);
        throw error; // Re-throw to be handled by the calling function
    }
}
