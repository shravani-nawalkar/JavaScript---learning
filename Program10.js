// Addition of Two numbers

function Addition(value1 , value2)
{
    return value1 + value2;
}
function main()
{
    let no1 = 11;
    let no2 = 21;
    let ans = 0;

    ans = Addition(no1 , no2);

    console.log(`Addition is of ${no1} & ${no2} is ${ans}`);
}
main();