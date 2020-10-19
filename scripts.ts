// For

//     picture = ["abc",
//            "ded"]
// the output should be

//     addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]



function addBorder(picture: string[]): string[] {

    //TOP & BOTTOM BORDER
    //create a variable for *****
    //take length of array 3 then add 2
    let wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    //ADD * front and back of each string in the picture array
    //for loop to loop through the picture array (starting at index 1)
    //add a * in the front of the string and * the end of the string

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i], '*')

    }

    return picture


}


console.log(addBorder(["abc", "ded"]));


console.log(addBorder(["paula", "suarez"]));
