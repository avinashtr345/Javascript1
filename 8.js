function print(a,b){
    let c=0;
    let mini=Math.min(a.length,b.length);
    for(let i=0;i<mini-1;i++){
        let sub1=a[i]+a[i+1];
        let sub2=b[i]+b[i+1];

        if(sub1==sub2){
            c++;
        }
    }
    return c;
}

console.log(print("yytaazz", "yyjaaz")); // 3
console.log(print("edabit", "ed"));      // 1
console.log(print("", ""));              // 0