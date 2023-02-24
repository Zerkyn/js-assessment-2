///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (carTotal, couponValue, tax) => {
    carTotal = carTotal * (1 + tax)
    carTotal = carTotal - couponValue
    return carTotal
}
console.log(calcFinalPrice(5, 2, .06))

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    going to make a computer object that will have
    that will have the properties
    cpu, ram, graphicCard, wireless, and accessories 
    cpu will be a string of what cpu brand
    ram will be a number for how many Gb's it has
    graphicCard will be an object with a brand name and model strings
    wireless will be boolean  to determine if in can use wireless internet
    and accessories will be an array of added on things like monitors or speakers
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const computer = {
    cpu: 'Intel',
    ram: 36,
    wireless: true,
    graphicCard: {
        name: 'Nvidia',
        model: 'GTX 2080'
    },
    accessories: [
        'monitor', 'speakers', 'mouse', 'keyboard'
    ]
}
