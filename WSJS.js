console.log('Hello JAVASCRIPT')
console.log("Assad")
console.log(23)

// JavaScript Data Types

var chaine = 'Yassine'
console.log(chaine)
console.log(typeof(chaine))

var a = 21
console.log(a)
console.log(typeof(a))

var bool = true
console.log(bool)
console.log(typeof(bool))

var tab = [1,3,6,9]

console.log(tab)
console.log(tab[2])
console.log(tab[3])
console.log(tab[9])
console.log(typeof(tab))

var assad = {name : 'yassin', age : 25, permis : true, mahmoud : {gmc : "Fullstack"}}

console.log(assad)
console.log(assad.age)
console.log(assad.name)
console.log(assad.mahmoud.gmc)
console.log(Object.keys(assad))
console.log(Object.values(assad))
console.log(Object.entries(assad))
console.log(typeof(assad))


var z

console.log(typeof(z))

var e = null

console.log(typeof(e))

// JavaScript Operators

// ARITHMETIC OPERATORS
var a = 5
var b = 2


console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
a++
console.log(a)
a++
console.log(a)
a = a+1
console.log(a)
a--
console.log(a)
console.log(a**b)

// EQUALITY OPERATORS 

var a = 4
console.log(a)

var a = 5
var b = 6
var c = '5'

console.log(a==b)
console.log(a==c)
console.log(a===c)
console.log(a!=b)
console.log(a!=c)
console.log(a!==c)

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a<c)
console.log(a<=c)

// LOGICAL OPERATORS
var a=5
var b=9

console.log(a==b && a>b)
console.log(a==b && a<b)
console.log(a!=b && a<b)

console.log(a<b || b<a)
console.log(a>b || a==b)


// JavaScript Conditionals

var test = 5

if(test>4){
  console.log('Test des conditions')
}


if(test>10){
    console.log('Test des conditions')
  }

  var test = 10

  if(test>10){
    console.log('Supérieur à 10')
  }else{
    console.log('Inférieur à 10')
  }


  var test = 12
  var testr = 4

if(test>10){
  console.log('Supérieur à 10')
}else{
  console.log('Inférieur à 10')
}

if(testr>10){
  console.log('Supérieur à 10')
}else{
  console.log('Inférieur à 10')
}


function Sup(a){
    if(a> 10){
      return 'Supérieur à 10'
    }else{
      return 'Inférieur à 10'
    }
}

var test = 12
var testr = 3

console.log(Sup(22))
console.log(Sup(testr))


function Sum(a,b){
    return a+b
  }
  console.log(Sum(2,4))
  console.log(Sum(4,9))

  var x = 6

 switch(x){
  case 7 : console.log('Sept')
  break
  case 6 : console.log('Six')
  break
  default : console.log('Ni Sept Ni Six') 
}

// JavaScript Loops

var tab = [2,4,6,9]

for(var i = 0;i<tab.length;i++){
  console.log(tab[i])
}

for(var key in tab){
    console.log(tab[key])
  }

  for(var x of tab){
    console.log(x)
  }


var tab = [2,4,6,9]
var i = 0
while(i<tab.length){
    console.log(tab[i])
    i++
}

do{
    console.log(tab[i])
    i++
  }while(i<tab.length)


  function MinMax(tab){
    var min = tab[0]
    var max = tab[0]
    for(var i = 0;i<tab.length;i++){
      if(min>tab[i]){
        min  = tab[i]
      }
      if(max<tab[i]){
          max= tab[i]
      }
    }
    return "Min :" +min+" Max :" +max
}
var assad = [2,4,6,9,100,-33]
console.log(MinMax(assad))