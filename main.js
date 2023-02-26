let feet = prompt('Enter Your Height In Feets (Value Before Inch)')

let inch = prompt('Enter Your Height In Inches (Value After Feet)')

    let weight = prompt('Enter Your Weight In Kilograms')

// number the entered value

    feet = Number(feet)

    inch = Number(inch)

// convert into inch

let inch1 = feet * 12

let inch2 = inch * 1

    // alert (inch1)

let HeightInInches = inch1 + inch2

// convert inch into meter

let height = HeightInInches * 0.0254

    //alert (height)

    height = height * height

    weight = Number(weight)

let bmi    = weight / height

console.log('Your BMI Is: ' + bmi)

let FirstMessage = 'Your BMI Is: ' + bmi + ' And '

if (bmi <=18.5) 
{

    alert (FirstMessage + 'You Are Under Weight')

    console.log (FirstMessage + 'You Are Under Weight')

}   else    if (bmi <=25)
{

    alert (FirstMessage + 'You Are Normal')

    console.log (FirstMessage + 'You Are Normal')

}   else    if (bmi <=30) 
{

    alert (FirstMessage + 'You Are Over Weight')

    console.log (FirstMessage + 'You Are Over Weight')

}   else //(bmi >30)
{

    alert (FirstMessage + 'You Are Obese')

    console.log (FirstMessage + 'You Are Obese')

}