import test from 'ava';

/*test('foo', t => {
	t.is(2 + 2, 4);
});*/

//TODO test suma
function sum (a, b) {
  return a + b;
}

test('sum of 2 numbers', t => {
  t.is(sum(1, 2), 3);
})


/*test('foo is being tested', t => {
  t.pass();
})*/

//TODO test multiplicacion

function  multiplicacion(a, b) {
  return a * b;
}

test('multiplicacion of 2 numbers', t => {
  t.is(multiplicacion(5, 2), 10);
})

//TODO test division

function  division(a, b) {
  return a / b;
}

test('division of 2 numbers', t => {
  t.is(division(8, 2), 4);
})

//TODO test restar

function  resta(a, b) {
  return a - b;
}

test('resta of 2 numbers', t => {
  t.is(resta(14, 2), 12);
})
