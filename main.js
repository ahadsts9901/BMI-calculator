let height = prompt('Enter Your Height In Centi-Metres')

let weight = prompt('Enter Your Weight In Kilograms')

    height = Number(height)

    height = height/100

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