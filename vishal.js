const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function solution(D) {
    const output = {
        'Mon': 0,
        'Tue': 0,
        'Wed': 0,
        'Thu': 0,
        'Fri': 0,
        'Sat': 0,
        'Sun': 0,
    };
    
    const keys = Object.keys(D);
    const og = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    
    for(let i=0;i<keys.length;i++){
        var date = new Date(keys[i]);
        output[days[date.getDay()]]+=D[keys[i]];
    }
    
    for(let i=0;i<7;i++){
        if(output[og[i]]===0){
            let j=i-1,k=i+1;
            let cnt1=0,cnt2=0;
            while(j>=0 && output[og[j]]===0){
               j--;
               cnt1++;
            }
            let pre=output[og[j]];
            
            while(k<7 && output[og[k]]===0){
                k++;
                cnt2++;
            }
            let nxt=output[og[k]];
            let cnt=cnt1+cnt2+2;
            // Taking floor because it is mention that we have to take integer as a value.
            output[og[i]]=Math.floor(pre + ((nxt-pre)/(cnt)));
        }
    }
    
    return output;
}

const D1 = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
};
const D2 = {'2020-01-01':6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4};
const D3 = {'2023-04-30':6, '2023-05-01':20};
 
const out1 = solution(D1);

for(var key in out1){
    print(key,out1[key]);
}

const out2 = solution(D2);

for(var key in out2){
    print(key,out2[key]);
}

const out3 = solution(D3);

for(var key in out3){
    print(key,out3[key]);
}

// We can also use prompt for getting user input.
// To get the user input uncomment the below part.

// let n = prompt('Enter the size of an input dictionary');
// const D = {};
// for(let i=0;i<n;i++){
//     let key = prompt('Enter key: ');
//     let value = prompt('Enter vale: ');
//     D[key] = value;
// }
// const out = solution(D);

// for(var key in out){
//     print(key,out[key]);
// }
