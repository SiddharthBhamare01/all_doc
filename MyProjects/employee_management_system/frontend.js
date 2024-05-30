
function showAll() {
    document.getElementById('output').innerHTML = 
    '    <div class="get-all-emp"><div class="get-all-emp-container"><button>Get all Employee Data</button></div></div>';
}
function searchById() {
   
    document.getElementById('output').innerHTML = '<form action="" class="search-emp-form"><input type="text" placeholder="Enter the EmployeeID" required="true"><button>Search</button></form>';
}
function searchByName() {
    
    document.getElementById('output').innerHTML ='<form action="" class="search-emp-form"><input type="text" placeholder="Enter the Employee Name" required="true"><button>Search</button></form>';
}
function deleteEmployee() {

    document.getElementById('output').innerHTML = '<p>Deleting employee...</p>';
}
function updateEmployee() {

    document.getElementById('output').innerHTML = '<p>Updating employee...</p>';
}
function addNewEmp(){
    document.getElementById('output').innerHTML = '<p>Adding employee...</p>';

}