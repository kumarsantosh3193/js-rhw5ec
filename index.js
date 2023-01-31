// 1st assignment
// add all the count values in res using for loop and console the sum as output.
const res = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
];
let sum=0;

for(let i=0;i<=res.length-1;i++);
console.log(res);

// 2nd assignment
// add all the count values in response using for loop and console the sum as output.

const response = {
  maran: {
    count: 1,
  },
  gas: {
    count: 2,
  },
  prelude: {
    count: 5,
  },
  keys: ['maran', 'gas', 'prelude'],
};

let sum1 = 0;
for (let i = 0; i <= response.length-1; i++) {
  sum = sum + parseInt(res[{ i }]);
}
console.log(sum1);



// 3rd assignment
// change the 'HI' Text color on clicking of button.

btn.addEventListener('click', function onClick(event) {
  const box = document.getElementById('h1Tag');
  box.style.color = 'salmon';
});
