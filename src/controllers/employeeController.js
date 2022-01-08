exports.getEmployee = async (req, res)=>{
    res.send(`Get all Employee`);
};
exports.getEmployeeById = async (req,res)=>{
    res.send(`Employee ID : ${req.params.id}`);
};
exports.getEmployeeSal = async(req,res)=>{
    const sal = req.params.sal
    const tax = sal*10/100
    res.send(`Employee Vat : ${tax}`);
} ;
exports.getEmployeeAge = async(req,res)=>{
    const age = req.params.age
    const result = 60-age
    res.send(`Number of years before retirement : ${result}`);
};
// ==================================================================================================
exports.getEmployeeAdd = async(req,res)=>{
    res.send(`EmployeeList ID : ==> ${req.body.id} name : ==> ${req.body.name} age: ==> ${req.body.age} salary : ==> ${req.body.sal}`);
};