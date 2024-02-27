function cap(s){
    return s[0].toUpperCase()+s.substring(1)
}

function info(data){
    const avg=data.reduce((cur,pre)=>cur+pre,0)/data.length
    const mx=data.reduce((cur,pre)=>Math.max(cur,pre),data[0])
    const mn=data.reduce((cur,pre)=>Math.min(cur,pre),data[0])
    const ln=data.length
    return {avg,mx,mn,ln}
}

function cip(s,f){
    return s.split('')
    .map(char=>(char.charCodeAt()-'a'.charCodeAt()+f)%26)
    .map(v=>String.fromCharCode(v+'a'.charCodeAt('a')))
    .join('')
}

class calculator{
    constructor(){}
    add(a,b){
        return a+b
    }
    sub(a,b){
        return a-b
    }
    mul(a,b){
        return a*b
    }
    div(a,b){
        if(b==0)return Infinity
        return a/b
    }
}
const calc=new calculator()
function rev(s){
    return s.split('').reverse().join('')
}
module.exports={cap,info,cip,calc,rev}