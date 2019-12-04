// Cara 1
//
//
//
//


function test(number){
    let c = [];
    let d = 0;
    let a = 0;
    let e = 0
    for(let i = 0; i < number.length; i++){
      a = number[i]
      c = number.filter(item => item > a)
      for(let j = 0; j < c.length; j++){
        if(c[j]-a < c[j+1]-a){
           d = c[j+1]-a
           if(d > e){
             e = d
           }
        }
      }
    }
    if( e == 0){
      return 'Cant Buy'
    }else{
      return e
    }    
  }
  console.log(test([100,80,70,150]))
  console.log(test([5,13,6,20]))

//   
// 
// 
// Cara 2
const day = [5,6,15,3,10,22,15]
const sortProfit = day.sort(function(buy, sell){
  return buy - sell
})
const buying = sortProfit[6] - sortProfit[0]
console.log(buying)

const day2 = [10,15,8,7,14]
const sortProfitDay2 = day2.sort(function(buy, sell){
  return buy - sell
})
const buyingDay2 = sortProfitDay2[4] - sortProfitDay2[0]
console.log(buyingDay2)

const day3 = [100,90,80,75,65]
const sortProfitDay3 = day3.sort(function(buy, sell){
  return buy - sell
})
const buyingDay3 = sortProfitDay3[0] - sortProfitDay3[4]
if(buyingDay3 <= 0){
  console.log('Cant Buy')
}else{
  console.log(buyingDay3)
}