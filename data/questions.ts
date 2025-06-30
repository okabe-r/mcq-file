
import { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
    {
        id: 1,
        questionText: "A 75-year-old man presents with return of spontaneous circulation (ROSC) after 2 minutes of ventricular fibrillation and successful defibrillation by EMS. The patient is unresponsive to verbal and painful stimuli. Vital signs on arrival are pulse, 120 beats/min; blood pressure, 130/70 mm Hg; respiratory rate, 10 breaths/min; temperature, 36°C (96.8°F); and oxygen saturation, 94%. The patient has intravenous access. The next most appropriate examination or procedure is:",
        type: 'mcq',
        choices: [
            { text: "Anteroposterior (AP) chest radiograph" },
            { text: "Arterial blood gas (ABG)" },
            { text: "Comprehensive neurologic examination" },
            { text: "Electrocardiography" }
        ],
        correctAnswer: "Electrocardiography"
    },
    {
        id: 2,
        questionText: "Which chest compression/ventilation ratio is recommended during adult resuscitation efforts performed by health care professionals before placement of an advanced airway?",
        type: 'mcq',
        choices: [
            { text: "10:1" },
            { text: "20:1" },
            { text: "20:2" },
            { text: "30:2" }
        ],
        correctAnswer: "30:2"
    },
    {
        id: 3,
        questionText: "A 'tearing' sensation is classically described for which of the following causes of chest pain?",
        type: 'mcq',
        choices: [
            { text: "Aortic dissection" },
            { text: "Esophageal rupture" },
            { text: "Mallory-Weiss tear" },
            { text: "Pneumothorax" }
        ],
        correctAnswer: "Aortic dissection"
    },
    {
        id: 4,
        questionText: "Right ventricular strain on the ECG of a patient complaining of chest pain would be most consistent with which of the following diagnoses?",
        type: 'mcq',
        choices: [
            { text: "Acute myocardial infarction" },
            { text: "Coronary ischemia" },
            { text: "Coronary spasm" },
            { text: "Pulmonary embolus" }
        ],
        correctAnswer: "Pulmonary embolus"
    },
    {
        id: 5,
        questionText: "The ECG finding of PR segment depression would be more commonly found in which of the following causes of chest pain?",
        type: 'mcq',
        choices: [
            { text: "Pericarditis" },
            { text: "Pulmonary embolus" },
            { text: "ST segment elevation myocardial infarction (STEMI)" },
            { text: "Subendocardial infarction" },
            { text: "Unstable angina" }
        ],
        correctAnswer: "Pericarditis"
    },
    {
        id: 6,
        questionText: "In a patient with suspected anaphylaxis:",
        type: 'mcq',
        choices: [
            { text: "Skin and mucosal changes are uncommon features." },
            { text: "Adrenaline 0.5 mg IM is the first line treatment of choice." },
            { text: "Colloids are preferred to crystalloids for restoring the circulation." },
            { text: "Steroids must be given early." }
        ],
        correctAnswer: "Adrenaline 0.5 mg IM is the first line treatment of choice."
    },
    {
        id: 7,
        questionText: "A patient has a history of crushing central chest pain, nausea and sweating. Her pulse rate is 38 beat / min, BP 75/45 mmHg. The ECG monitor shows sinus bradycardia. You would recommend that:",
        type: 'mcq',
        choices: [
            { text: "Opioid analgesia is contraindicated." },
            { text: "24% oxygen via a mask should be given until the results of arterial blood gas analysis are known." },
            { text: "Atropine 500 mcg IV should be given." },
            { text: "An adrenaline infusion, 20-100 mcg min', may be required" }
        ],
        correctAnswer: "Atropine 500 mcg IV should be given."
    },
    {
        id: 8,
        questionText: "Severe hyperkalaemia:",
        type: 'mcq',
        choices: [
            { text: "May be caused by heart failure." },
            { text: "Is defined as a plasma potassium concentration of > 5.5 mmol L'." },
            { text: "Can be treated by giving 10 mL 1% calcium chloride IV." },
            { text: "Causes tall, peaked T waves and ST depression on the ECG." }
        ],
        correctAnswer: "Causes tall, peaked T waves and ST depression on the ECG."
    },
    {
        id: 9,
        questionText: "You arrive at the bedside 4 min after the cardiac arrest of a 70 kg woman. An IV line is in place, there is no pulse. The ECG confirms asystole. Two nurses are performing CPR competently. You would recommend:",
        type: 'mcq',
        choices: [
            { text: "Calcium chloride 5 mL 10% solution IV." },
            { text: "Delivery of a 150 J shock." },
            { text: "Sodium bicarbonate 500 mmol IV." },
            { text: "Adrenaline 1 mg IV." }
        ],
        correctAnswer: "Adrenaline 1 mg IV."
    },
    {
        id: 10,
        questionText: "When monitoring the cardiac rhythm:",
        type: 'mcq',
        choices: [
            { text: "A ventricular rate of between 60-100 beats min' is considered normal." },
            { text: "At a standard paper speed of 25 mm s-' the ventricular rate is calculated by dividing the number of large squares between consecutive R waves by 60." },
            { text: "A ventricular tachycardia will always require immediate cardioversion." },
            { text: "Asystole presents as a completely straight line" }
        ],
        correctAnswer: "A ventricular rate of between 60-100 beats min' is considered normal."
    },
    {
        id: 11,
        questionText: "Adrenaline:",
        type: 'mcq',
        choices: [
            { text: "Decreases systemic vasoconstriction." },
            { text: "Has purely alpha-adrenergic effects." },
            { text: "Improves coronary and cerebral perfusion pressures during CPR." },
            { text: "Is associated with any long-term benefit to patients when given during a cardiac arrest." }
        ],
        correctAnswer: "Improves coronary and cerebral perfusion pressures during CPR."
    },
    {
        id: 12,
        questionText: "In acute severe asthma:",
        type: 'mcq',
        choices: [
            { text: "Oxygen should be titrated to achieve an SpO2 of 88-90%." },
            { text: "A PaCO2 of 6 kPa is a sign of good outcome." },
            { text: "Cardiac arrest is mainly secondary to hypercapnia." },
            { text: "Magnesium sulfate 2 g (8 mmol of Mg2+) IV may produce bronchodilatation." }
        ],
        correctAnswer: "Magnesium sulfate 2 g (8 mmol of Mg2+) IV may produce bronchodilatation."
    },
    {
        id: 13,
        questionText: "The correct management of an adult patient in ventricular fibrillation includes:",
        type: 'mcq',
        choices: [
            { text: "An initial shock energy of at least 150 J." },
            { text: "Adrenaline, 1 mg IV after every shock." },
            { text: "Digoxin 500 mcg IV." },
            { text: "Atropine 3 mg after 2 loops." }
        ],
        correctAnswer: "An initial shock energy of at least 150 J."
    },
    {
        id: 14,
        questionText: "With reference to the 12-lead ECG shown:",
        type: 'mcq',
        image: "/images/image1.png",
        choices: [
            { text: "Cardiac monitoring is optional." },
            { text: "Aspirin should be avoided." },
            { text: "Primary PCI may be indicated." },
            { text: "Sinus bradycardia is present." }
        ],
        correctAnswer: "Primary PCI may be indicated."
    },
    {
        id: 15,
        questionText: "With reference to the rhythm strip:",
        type: 'mcq',
        image: "/images/image2.png",
        choices: [
            { text: "Adrenaline 1 mg IV is the initial treatment of choice." },
            { text: "This rhythm can be associated with a spontaneous circulation." },
            { text: "A precordial thump is always indicated." },
            { text: "Defibrillation is the treatment of choice in the pulseless patient." }
        ],
        correctAnswer: "This rhythm can be associated with a spontaneous circulation."
    },
    {
        id: 16,
        questionText: "A 65-year-old man with a 2 h history of central chest pain develops a broad QRS tachyarrhythmia that appears regular with a rate of approximately 180 beats min'. His blood pressure is 86/54. The following treatment should be given:",
        type: 'mcq',
        choices: [
            { text: "Immediate cardioversion should be attempted." },
            { text: "If there were no adverse signs, and the QRS complex were narrow and regular, amiodarone 300 mg V should be given." },
            { text: "As he has no adverse signs, the QRS complex is > 0.12 s and regular, adenosine 6" }
        ],
        correctAnswer: "Immediate cardioversion should be attempted."
    },
    {
        id: 17,
        questionText: "Pulseless electrical activity (PEA):",
        type: 'mcq',
        choices: [
            { text: "Is characterised by evidence of ventricular activity on the ECG that would normally be associated with a pulse." },
            { text: "Is rarely the cardiac arrest rhythm in patients with severe hypovolaemia." },
            { text: "Is rarely the first monitored rhythm in a cardiac arrest." },
            { text: "Should be treated by giving 300 mg amiodarone IV." }
        ],
        correctAnswer: "Is characterised by evidence of ventricular activity on the ECG that would normally be associated with a pulse."
    },
    {
        id: 18,
        questionText: "With reference to the rhythm strip (paper speed 25mm/s):",
        type: 'mcq',
        image: "/images/image3.png",
        choices: [
            { text: "The rhythm is regular." },
            { text: "The rhythm is atrial flutter." },
            { text: "The ventricular rate is in the range 90-110 min" },
            { text: "The rhythm is supraventricular in origin." }
        ],
        correctAnswer: "The rhythm is atrial flutter."
    },
    {
        id: 19,
        questionText: "With reference to the rhythm strip:",
        type: 'mcq',
        image: "/images/image4.png",
        choices: [
            { text: "The patient is not at risk of developing asystole." },
            { text: "If the patient is dyspnoeic and hypotensive, systolic blood pressure 80 mmHg, transvenous pacing may be appropriate." },
            { text: "A patient with this rhythm will not have a pulse." },
            { text: "This rhythm is always associated with unconsciousness." }
        ],
        correctAnswer: "If the patient is dyspnoeic and hypotensive, systolic blood pressure 80 mmHg, transvenous pacing may be appropriate."
    },
    {
        id: 20,
        questionText: "With reference to the rhythm strip:",
        type: 'mcq',
        image: "/images/image5.png",
        choices: [
            { text: "The ventricular rate is in the range of 35-45beat / min" },
            { text: "The duration of the QRS complex is normal." },
            { text: "The atrial rate is in the range 40-50 min." },
            { text: "Atropine may be indicated." }
        ],
        correctAnswer: "Atropine may be indicated."
    },
     {
        id: 21,
        questionText: "With reference to the rhythm strip:",
        type: 'mcq',
        image: "/images/image6.png",
        choices: [
            { text: "P waves are clearly visible." },
            { text: "The rhythm is irregular" },
            { text: "The ventricular rate is greater than 200 min-1" },
            { text: "The QRS complex is normal." }
        ],
        correctAnswer: "The rhythm is irregular"
    },
    {
        id: 22,
        questionText: "Which of the following is the goal of the primary survey?",
        type: 'mcq',
        choices: [
            { text: "Determine which consultations should be obtained." },
            { text: "Do an AMPLE (allergies, medications, past medical history, lastmeal, environments and events) history." },
            { text: "Obtain pertinent historical data from the paramedics." },
            { text: "Perform a radiographic evaluation." },
            { text: "Rapidly identify critical life-threatening diagnoses and begin treatment at the time of the diagnosis." }
        ],
        correctAnswer: "Rapidly identify critical life-threatening diagnoses and begin treatment at the time of the diagnosis."
    },
    {
        id: 23,
        questionText: "An 87-year- old male with history of atrial fibrillation on anti-coagulation, COPD, hypertension, and hyperlipidemia fell from a standing height sustaining a pelvic fracture requiring blood transfusion. Which of the following should raise concern for increased mortality in geriatric trauma patients?",
        type: 'mcq',
        choices: [
            { text: "Anticoagulation" },
            { text: "Age >85" },
            { text: "Isolated pelvic fracture" },
            { text: "COPD" },
            { text: "All of the above" }
        ],
        correctAnswer: "All of the above"
    },
    {
        id: 24,
        questionText: "For a reentrant tachydysrhythmia to occur, what three conditions exist?",
        type: 'mcq',
        choices: [
            { text: "Electrolyte disturbance, ischemia, and altered conduction in an endogenous atrioventricular pathway" },
            { text: "Electrolyte disturbance, two conduction pathways, with one of the pathways being slower" },
            { text: "Ischemia, two conduction pathways, with one of the pathways being slower" },
            { text: "Two conduction pathways, one path being slower, and differing responsiveness" },
            { text: "Two conduction pathways with equal responsiveness" }
        ],
        correctAnswer: "Two conduction pathways, one path being slower, and differing responsiveness"
    },
    {
        id: 25,
        questionText: "A 49-year-old woman presents with a sudden onset of palpitations and shortness of breath. This has happened once before. She has no past history and takes no medications. Vital signs are temperature, 36.0°C (96.8°F) oral, blood pressure, 115/69 mm Hg, heart rate 156 beats/min, respiratory rate 24 breaths/min, and oxygen (O2) saturation, 98%. Her electrocardiogram (ECG) is shown. What is the most appropriate intervention?",
        type: 'mcq',
        image: "/images/image7.png",
        choices: [
            { text: "Adenosine, 6 mg IV" },
            { text: "Digoxin, 0.25 mg IV" },
            { text: "Diltiazem, 0.4 mg/kg IV" },
            { text: "Propranolol, 1 mg IV" },
            { text: "Synchronized electrical cardioversion after IV sedation with midazolam" }
        ],
        correctAnswer: "Adenosine, 6 mg IV"
    },
    {
        id: 26,
        questionText: "A patient presents with the following scenario:",
        type: 'show-answer',
        subQuestions: [
            {
                question: "a) What is the rhythm on the ECG?",
                answer: "Supraventricular tachycardia or narrow-complex tachycardia"
            },
            {
                question: "b) What four adverse features should you assess her for according to the Resuscitation Council Guidelines?",
                answer: "Shock, Syncope, Myocardial ischaemia, Heart failure"
            },
            {
                question: "c) (i) She has no adverse features and vagal manoeuvres are unsuccessful. What is the recommended first-line drug to try and cardiovert the patient?",
                answer: "Adenosine"
            },
            {
                question: "d) What is the initial dose of this drug and the two subsequent doses, if this is unsuccessful?",
                answer: "Doses: 6 mg, then 12 mg, then 18 mg"
            }
        ]
    },
    {
        id: 27,
        questionText: "Sharp, sudden-onset chest pain and dyspnea after a coughing episode in a patient with moderate COPD is most consistent with which critical diagnosis?",
        type: 'mcq',
        choices: [
            { text: "ACS" },
            { text: "PE" },
            { text: "Pneumothorax" },
            { text: "Esophageal rupture" },
            { text: "Aortic dissection" }
        ],
        correctAnswer: "Pneumothorax"
    },
    {
        id: 28,
        questionText: "With regard to the ACS workup, a patient with atypical chest pain and no CAD risk factors should have which of the following workups?",
        type: 'mcq',
        choices: [
            { text: "Nothing" },
            { text: "EKG" },
            { text: "EKG, cardiac enzymes" },
            { text: "EKG, cardiac enzymes, stress test" },
            { text: "Immediate cardiac catheterization" }
        ],
        correctAnswer: "EKG"
    },
    {
        id: 29,
        questionText: "A patient who presents with chest pain, hypotension, JVD, and tracheal deviation most likely needs which of the following interventions?",
        type: 'mcq',
        choices: [
            { text: "Cardiac catheterization" },
            { text: "Pericardiocentesis" },
            { text: "Upper endoscopy" },
            { text: "Needle decompression" },
            { text: "Thrombolytics" }
        ],
        correctAnswer: "Needle decompression"
    },
    {
        id: 30,
        questionText: "A 35-year-old female patient presents with a dull anterior chest pain of 2 days' duration. The pain is worse with lying back, but it does not radiate. The patient has no dyspnea. There is no fever and no cough. There are no other red flags present in the history. Her vitals are T 37.2, BP 122/78, P 108, RR 14, and O2 saturation 98% on room air. The presentation is most consistent with which diagnosis?",
        type: 'mcq',
        choices: [
            { text: "Pneumonia" },
            { text: "ACS" },
            { text: "PE" },
            { text: "Pericarditis" },
            { text: "Costochondritis" }
        ],
        correctAnswer: "Pericarditis"
    },
    {
        id: 31,
        questionText: "A patient is brought in after a motor-vehicle accident. He is alert and speaking clearly but is in obvious distress. Vital signs include heart rate 120, blood pressure 90/40, respiratory rate 30, and pulse oximetry 92% on 100% oxygen. You do not appreciate right-sided breath sounds. What is your first step in management of this patient?",
        type: 'mcq',
        choices: [
            { text: "Endotracheal intubation" },
            { text: "Needle decompression" },
            { text: "Chest radiograph" },
            { text: "Chest tube insertion" },
            { text: "Intravenous crystalloid infusion" }
        ],
        correctAnswer: "Needle decompression"
    },
    {
        id: 32,
        questionText: "You perform the needed procedure and the patient's breathing improves. You decide to perform a chest tube thoracostomy. What is the proper location for placement of this tube?",
        type: 'mcq',
        choices: [
            { text: "Second intercostal space midclavicular line" },
            { text: "Fourth intercostal space midclavicular line" },
            { text: "Fourth intercostal space midaxillary line" },
            { text: "Fourth intercostal space posterior axillary line" },
            { text: "Sixth intercostal space anterior axillary line" }
        ],
        correctAnswer: "Fourth intercostal space midaxillary line"
    },
    {
        id: 33,
        questionText: "During your resuscitation this patient becomes unresponsive, only opening his eyes to painful stimuli and uttering incomprehensible words. He is exhibiting an abnormal flexion response in the upper extremities. What is your first step in management of this patient?",
        type: 'mcq',
        choices: [
            { text: "Emergent CT scan of the head" },
            { text: "Naloxone" },
            { text: "Endotracheal intubation" },
            { text: "Elevation of the head of the bed" },
            { text: "Intravenous mannitol" }
        ],
        correctAnswer: "Endotracheal intubation"
    },
    {
        id: 34,
        questionText: "As the resuscitation continues the only intravenous line is inadvertently pulled out. After 2 minutes and multiple failed attempts your nurses are unable to obtain intravenous access and the patient's blood pressure has now decreased to 70/40. What is your first step in the management of this patient?",
        type: 'mcq',
        choices: [
            { text: "Attempt to place an intravenous line yourself." },
            { text: "Place a subclavian triple lumen central line." },
            { text: "Place an intraosseous line." },
            { text: "Place a femoral introducer sheath." },
            { text: "Perform a saphenous venous cutdown." }
        ],
        correctAnswer: "Place an intraosseous line."
    },
    {
        id: 35,
        questionText: "Which of the following actions are critical during the evaluation of every trauma patient? (Choose all that apply.)",
        type: 'mcq',
        choices: [
            { text: "Maintenance of cervical spine precautions" },
            { text: "Routine pregnancy testing in all females of childbearing age" },
            { text: "Consideration of updating tetanus prophylaxis" },
            { text: "Analysis of hemoglobin concentration" },
            { text: "Rectal examination" },
            { text: "A, B, C, and E" }
        ],
        correctAnswer: "A, B, C, and E"
    }
];
