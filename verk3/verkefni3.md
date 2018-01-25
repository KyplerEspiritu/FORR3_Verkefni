## 1. Hvað er template literals (ES2015)? Komdu með kóðasýnidæmi ásamt skýringum.
  - Dæmi um template literals er að hafa eitt string í tvær línur (multi-line strings).
    
    var myMultiString ("Þessi strengur eru 
      í tvær línur!";

## 2. Hver er munurinn á for, forEach, for-in og for-of lykkjum? Útskýrðu. 
  - ### forEach er bara virkar bara á Array object.
    // Dæmi fyrir forEach
    var myArray = [10, 20, 30, 40];
    
    var myFunction = funtion(item) {
      console.log(item);
    };
    
    myArray.forEach(myFunction); // Þetta skilar út 10, 20, 30 og 40
    //
    
    
    ### for-in virkar á öllum objectum.
    // Dæmi fyrir for-in
    var namePerson = "";
    var person = {firstName: "Robert", lastName: "Downey"};
    
    for (var x in person){
      namePerson = namePerson + x; // namePerson = "RobertDowney"
    };
    
    
    ### Í for loop ertu með þrjá parta. Fyrst þarftu að initalize-a svo að gefa condtion og að lokun final-expression.
    Þetta lítur svona út:
    for ([initialization]; [condition]; [final-expression]){
      statement;
    };
    // Dæmi fyrir for loop
    for (var = 0; i <= 10; i++){
      console.log(i); // Þetta skilar frá sér tölur frá 0 upp í 10
    };
    //
    
    
    ### For of er ekki það sama og for in. Ef við notum for of fáum við value-in inn í Array-inu en þegar við notum for in fáum við         index-inn
    // Dæmi
    var myArray = [3, 5, 7];
    
    for (var i in myArray){
      console.log(i); // Þetta skilar 0, 1, 2
    }
    
    for (var i of myArray){
      console.log(i); // Þetta skilar 3, 5, 7
    }
    //
    
## 3. Fylkjaaðferðir. Svarðu spurningum í lið 17 (e. quiz) í Arrays á Udacity https://classroom.udacity.com/courses/ud803 
  - 1 af 4 = reverse()
  
    2 af 4 = sort()
    
    3 af 4 = shift() eða splice()
    
    4 af 4 = join()

## 4. forEach() Leystu lið 20 í Arrays á Udacity https://classroom.udacity.com/courses/ud803
  - var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1,   139];


    test.forEach(function(num,index,array){
        if (num % 3 === 0){
            num += 100
            array[index] = num;
        }
        console.log(num);
    });
