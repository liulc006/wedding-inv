import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./surveyTheme";

const SurveyForm = () => {
    const surveyJson = {
        "surveyId": "af6084b1-4bbb-400b-a188-2da059cb962e",
        "surveyPostId": "bd8afa91-4313-4761-91d6-adc179f503e2",
        "surveyShowDataSaving": true,
    };

    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    return (
        <div className='invite-card' style={{display:'flex', justifyContent:'center', alignItems:'center', width:'80%'}}>
            <Survey model = {survey}/>
        </div>
    );
};

export default SurveyForm;