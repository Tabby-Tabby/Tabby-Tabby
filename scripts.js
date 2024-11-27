//counter for how many submit a form on the last page
let visitors = [];
let count = 0;
  //About page
  function addName(){
    count += 1;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email){
      const formData = {
        name: name,
        email: email
      };
      
      visitors.push(formData);
      }
      console.log(visitors);
      document.getElementById('container').innerHTML = `<p class="itim-regular catsections">There is(are) ${count} names in the array!</p>`;

      alert("Thank you " + name + " has been added to the list!");
    }
    