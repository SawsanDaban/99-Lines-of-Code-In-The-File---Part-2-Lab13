let friends = ["Alex", "Sara", "Bushra", "Mike", "Lucy"];

function singing(){

    for(let i = 0; i<friends.length; i++){

        let div = document.createElement('div');
        div.setAttribute('class', 'friend');

        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(friends[i]));
        div.appendChild(h3);
        
        for(let j=99; j>0;j--){
            let p = document.createElement('p');
            if(j==1){
                p.appendChild(document.createTextNode(j + " lines of code in the file, "+ j +" lines of code; "+ friends[i] +" strikes one out, clears it all out, "+"no more lines of code in the file"));
            } else {
                p.appendChild(document.createTextNode(j + " lines of code in the file, "+ j +" lines of code; "+ friends[i] +" strikes one out, clears it all out, "+ (j-1) +" lines of code in the file"));
            }
            div.appendChild(p);
        }
        document.body.appendChild(div);
    }
}


