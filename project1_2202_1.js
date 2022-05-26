//-------------------------TASK 1-------------------------//
//-------------STARTING WITH THE RECTANGLE---------------//
const rectangle = function(height, width, offLength){

    let rec=""; //this variable holds the rectangle - initially it is empty and then later we will start drawing it in line by line

    //draw line by line using a loop
    for(let h=0;h<height;h++) //the loop will keep going as long as the index is less than the height
    {
        // create new line - initializing it with a line break 
        let line="\n";

        // create offset
        let offset="";
        for(let o=0;o<offLength;o++)
            offset += " ";
        //append it to the new line
         line +=offset;

        //draw number of stars in that line equal to the width
        for(let w=0;w<width;w++) //loop will keep going as long as the index is less than the width
            line += "*"; //shortcut for line = line + *

        //append or concatenate the line to the rectangle
         rec += line;
        
    }
    return rec; // to print the output of the rectangle
};

//-------------------- TRIANGLE-----------------------------//

const triangle = function(triheight, triOffLength){

    let tri = ""; 

        for(let h=0;h<triheight;h++)
        {
            //create a new line
            let triline = "\n";
    
            
                //create the offset
                let trioffset ="";
                for(let o=0;o<triOffLength;o++)
                    trioffset +=" ";
                //append the created offset to the line
                triline += trioffset;
            
    
            // draw a number of starts equals to the line number
            for (let s=0;s<h+1;s++)
                triline += "*";
            
            //appeand the new line to the triangle
              tri +=triline;
        }
        return tri;
        
};

//----------------TASK 2-------------------------//

//drawing two rectangles with different dimensions after a 10-point displacement 
console.log("Drawing two rectangles with different dimensions after a 10-point displacement");
console.log(rectangle(5,10,10));
console.log(rectangle(3,7,10));

//drawing two rectangles with different dimensions after a 20-point displacement
console.log("Drawing two rectangles with different dimensions after a 20-point displacement");
console.log(rectangle(4,8,20));
console.log(rectangle(9,6,20));

//drawing two triangles with different heights after a 10-point displacement
console.log("Drawing two triangles with different heights after a 10-point displacement");
console.log(triangle(5,10));
console.log(triangle(10,10));

//drawing two triangles with different heights after a 20-point displacement
console.log("Drawing two triangles with different heights after a 20-point displacement");
console.log(triangle(3,20));
console.log(triangle(7,20));





