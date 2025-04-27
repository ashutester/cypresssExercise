(function outer(){
    const testMe = new Map([
            ['Cricket',30],
            ['Badminton',40],
            ['Vollyball',50],
            ['Chess',60]
        ]
    )
    for (let [key,value] of testMe) {
             console.log(`${key} : ${value}`);       
    }
}())
