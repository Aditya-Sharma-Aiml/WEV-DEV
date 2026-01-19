
document.addEventListener("DOMContentLoaded" , () => {

    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    // once refresh get fetch data fromm loacl storage
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    renderExpenses(); // gain render the expenses

    let totalAmount = calculateTotal(); 

    // take the input and create unique object of the input
    expenseForm.addEventListener('submit' , (e) => {
      
      e.preventDefault();

      const name = expenseNameInput.value.trim(); 
      const amount = parseFloat(expenseAmountInput.value.trim());

      if(name !== "" && !isNaN(amount) && amount >0){

        const newExpense = {
          id : Date.now(),
          name : name,
          amount : amount,

        }

        // newExpense add kro array me 
        expenses.push(newExpense);

        saveExpensesToLocal();// store in local storage
        updateTotal();
        renderExpenses(); // render the expenses
        
        // once added clear the input 
        expenseNameInput.value = "";
        expenseAmountInput.value = '';
      }
 
      
    });

    //calculating total amount 
    function calculateTotal() {

      //REDUCE function:

      // const array = [1, 2, 3, 4];

      // // 0 + 1 + 2 + 3 + 4
      // const initialValue = 0;
      // const sumWithInitial = array.reduce(
      //   (accumulator, currentValue) => accumulator + currentValue,
      //   initialValue
      // );

      return expenses.reduce((sum, expense) => sum + expense.amount , 0);
    }

    //updating total amount 
    function updateTotal(){
      totalAmount = calculateTotal();
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    //rendering expenses
    function renderExpenses(){

      expenseList.innerHTML = "";

      expenses.forEach((expense) => {

        const li = document.createElement('li');
        li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}"> delete </button>
        `;

        expenseList.appendChild(li); 
      });
    }

    // deleting expenses
    expenseList.addEventListener('click', (e)=>{
      e.stopPropagation();

      if(e.target.tagName === 'BUTTON'){

        const expenseId = parseInt(e.target.getAttribute('data-id'));

        expenses = expenses.filter(expense => expense.id !== expenseId);

        saveExpensesToLocal();
        renderExpenses();
        updateTotal();

      } 
    })
    function saveExpensesToLocal(){
      localStorage.setItem('expenses', JSON.stringify(expenses) );
    }
});