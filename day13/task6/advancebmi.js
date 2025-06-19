function calBMI(weight,height){
    let bmi=Math.round(weight/(height*height));
    if(bmi<18.5){
        return `Your BMI is ${bmi}, so you are underweight.`;
    }
    else if(bmi>=18.5 && bmi<=24.8){
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    }
    else{
        return `Your BMI is ${bmi}, so you are overweight.`;
    }
}
let val=calBMI(52,1.8);
console.log(val);