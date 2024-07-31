# T-Mobile Sentiment Analysis

T-Mobile Sentiment Analysis utilizes the Your Number Anywhere (YNA) API in order to promote personal and professional development using AI. Behavioral Sentiment Analysis provides a platform for consumers and businesses alike to develop individuals' interpersonal oral communication skills and improve business to consumer interactions.

## Functionality
### Personal Use Case:
    - AI powered general summaries of calls
    - Tone recognition with 0-100% ratings for tonality
    - Uses tone to draw inferences about mental headspace
    - Ligualistic learning with 0-100% grammar ratings 
    - AI checker on incoming calls 
### Business Use Case:
    - Analyze call responses and use tonality data to assign a 0-100 value on effectiveness of call
    - Ability to set a efficiency threshold and have AI rewrite advert script until threshold is reached
    - Recursively calls to rewrite depending on set # of calls or time passed by business user
    - Seperate functionality for AI advert calls and real representative calls 
    - AI calls recieve same script tested and rewritten until threshold met
    - Representative calls recieve different AI generated scripts to accomodate individual differences

## Pseudo
```java
    /* Make YNA API Call
     * Set ChatGPT bot up with seperate personal/business prompt
     * Prompt:
     * 
     * Welcome to the Oral Communication Skills Analysis service! ChatGPT will help you improve your communication skills by analyzing your tone, diction, and syntax during a conversation. Have a conversation with ChatGPT, and it will provide you with insights and data on various aspects of your speech, such as empathy, responsiveness, and more. It will reveal percentages indicating how well you performed in these areas, giving you valuable feedback to enhance your oral communication skills. The user will pass in a transcript of a phone conversation to ChatGPT and ChatGPT's only job is to return percentage values (0-100) of categories relating to tone such as (Emphaty, Stress, Responsiveness, Clarity, etc...). 
     * 
     * Record call with YNA
     * Use GPT speech to text to get transcript
     * Pass transcript into GPT bot
     * Return answers in graphical form 
     * Combine tonal index to efficiency index using converstion algorithm
     * Display all metrics in table and graphical formats using Power BI
     * Recursively rewrite script until threshold passes (business specific)
    */
```

## Expanded Pseudo Modules

pseudoGPT: Included is a pseudo react app (pseudoGPT.jsx) that demonstrates the process of a transcript being put through chatGPT and the response of a (0-100%) being taken in to analyze and show. 

pseudoTMobile: Another pseudo react app (pseudoTMobile.jsx) demonstrates the process of how the YNA API is being used to acquire the transcript. 

## Contributers

Mehul Chaudhari
Agastya Mongia
Chaitanya Shekar

## License

T-Mobile