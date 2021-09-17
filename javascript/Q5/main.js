function EmpData(){

    //First Part
    
    let listofObj = [
        { name: 'Amit', age: 26, salary: 10000, dob: '15/05/1995'},
        { name: 'Akash', age: 23, salary: 12000, dob: '28/08/1998'},
        { name: 'Anuj', age: 22, salary: 6000, dob: '25/03/1999'},
        { name: 'Rahul', age: 24, salary: 400, dob: '07/11/1993'},
        { name: 'Nehaaaa', age: 25, salary: 300, dob: '01/08/1994'},
    ];

    console.log('List of employees', listofObj);

    //Second Part

    var filterOnSalary = listofObj.filter(function (e1) {
        return e1.salary > 5000;
    });
    console.log('FilterOnSalary', filterOnSalary);

    //Third Part

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }
    const groupPeople = groupBy(listofObj, 'age');
    console.log('groupPeople', groupPeople);

    //Fourth Part

    var fff = listofObj.filter(function (e1) {
        if(e1.age>20 && e1.salary<1000){
            e1.salary=e1.salary*5
            return e1;
        }
    })

    console.log("Updated list after increment", fff);    
};