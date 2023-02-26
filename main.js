let height = prompt('Enter Your Height In Centi-Metres')

let weight = prompt('Enter Your Weight In Kilograms')

    height = Number(height)

    height = height/100

    height = height * height

    weight = Number(weight)

let bmi    = weight / height

console.log('Your BMI Is: ' + bmi)

alert ('Your BMI Is: ' + bmi)

if (bmi <=18.5) 
{

    alert ('You Are Under Weight')

    console.log ('You Are Under Weight')

}   else    if (bmi <=25)
{

    alert ('You Are Normal')

    console.log ('You Are Normal')

}   else    if (bmi <=30) 
{

    alert ('You Are Over Weight')

    console.log ('You Are Over Weight')

}   else //(bmi >30)
{

    alert ('You Are Obese')

    console.log ('You Are Obese')

}