import http from "http"
import process, { argv } from "process"


const arg = process.argv
console.log(arg.length)
if (arg.length > 3){
    if (arg[2]=="sum"){
        let helper = 0
        for(let i=3;i<arg.length;i++){
            helper= helper +  parseInt(arg[i])
        }
        console.log(helper +" is the  sum")
    }
    else
    {
        if ( arg[2]="avg"){
            let helper = 0
        for(let i=3;i<arg.length;i++){
            helper= helper +  parseInt(arg[i])
        }
        let average= helper / (arg.length-3)
        console.log(average +" is the  average")
        }
        else{
            console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
        }
    }


}else{
    console.log("not enough arguments")
}