function validateRegistration(event) {
  event.preventDefault();

  
  const fName = document.getElementById("firstName").value;
  const lName = document.getElementById("lastName").value;
  const id = document.getElementById("studentId").value;
  const email = document.getElementById("email").value;
  const credit = document.getElementById("credit").value;
  const dept = document.getElementById("department").value;

  
  let hasError = false; 

 
  if (!fName) { document.getElementById("firstNameError").innerHTML = "Required"; hasError = true; } 
  else { document.getElementById("firstNameError").innerHTML = ""; }

  if (!lName) { document.getElementById("lastNameError").innerHTML = "Required"; hasError = true; } 
  else { document.getElementById("lastNameError").innerHTML = ""; }

  
  if (!id || !id.includes("_")) { 
    document.getElementById("studentIdError").innerHTML = "ID must contain '_'"; 
    hasError = true; 
  } else { document.getElementById("studentIdError").innerHTML = ""; }

  
  if (!email || !email.endsWith("@student.aiub.edu")) { 
    document.getElementById("emailError").innerHTML = "Valid AIUB email required"; 
    hasError = true; 
  } else { document.getElementById("emailError").innerHTML = ""; }

  
  if (!credit || credit < 0 || credit >= 148) { 
    document.getElementById("creditError").innerHTML = "Must be between 0 and 147"; 
    hasError = true; 
  } else { document.getElementById("creditError").innerHTML = ""; }

  
  if (!dept) { document.getElementById("departmentError").innerHTML = "Required"; hasError = true; } 
  else { document.getElementById("departmentError").innerHTML = ""; }



  if (!hasError) {
    const table = document.getElementById("studentListBody");
    const row = table.insertRow();
    
    
    row.innerHTML = <td>${fName} ${lName}</td> <td>${id}</td> <td>${email}</td> <td>${credit}</td> <td>${dept}</td>;

    
    document.querySelector("form").reset();
  }

  return false;
}