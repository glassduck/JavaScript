function fact(n){
    if (n<=1) return n;
    return n*fact(n-1);
}
for(var i=1; i<10; i++){    //for문 조건에 사이사이에 semi colon 임을 반드시 명심하자.
    console.log(i+"!="+fact(i));
}