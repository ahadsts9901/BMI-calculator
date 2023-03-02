    alert ( "This web is responsive on all screens" );
 
 function calculateBMI(event)

{

    {
        event.preventDefault()
    };

// taking input

    let feet = document.querySelector('#feet').value;

    let inch = document.querySelector('#inch').value;

    let weight = document.querySelector('#weight').value;

// removing point value

    feet = parseInt(feet);

    inch = parseInt(inch);

// convert feet into inch

    feet = feet * 12;

// add inches as a height

    let HeightInInches = feet + inch;

// convert inch into meter

    let height = HeightInInches * 0.0254;

// height square

    height = height * height;

// bmi formula

    let bmi = weight / height;

    bmi = (bmi).toFixed(2);

    let suggestion = ('You Are ');

// print console

    console.log ('Your BMI Is: ' + bmi);
    // console.log ("IdealWeight: ", IdealWeight)


//calculations

    let IdealWeight = (22 * height).toFixed(2);

    let WeightToLose = (weight - IdealWeight).toFixed(2);

    let WeightToGain = (IdealWeight - weight).toFixed(2);

// if condition

    if (bmi >30){

    suggestion += `Obese. You need to lose ${WeightToLose} KGs to become normal`;

}   else    if (bmi >25)
{
    suggestion += `OverWeight. You need to lose ${WeightToLose} KGs to become normal`;

}   else    if (bmi >22){

    suggestion += `Normal. But optionally you may lose ${WeightToLose} KGs to become ideally fit`;

}   else    if (bmi == 22.00){
   
    suggestion += `Perfectly Fit`;

}   else    if (bmi >=18) {

    suggestion += `Normal. But optionally you may gain ${WeightToGain} KGs to become ideally fit`;

}   else    // (bmi <18.5)
{

    suggestion +=  ` UnderWeight. You need to gain ${WeightToGain} KGs to become normal`;
    

}

    

    console.log (suggestion);

    document.querySelector('#bmi').innerHTML = bmi;
    document.querySelector('#suggestion').innerHTML = suggestion;
    document.querySelector( '#ideal' ).innerHTML = IdealWeight + ' Kg(s)';


}