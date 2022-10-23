import { dbank } from "../../declarations/dbank";

window.onload = async () => {
    let year_holder = new Date();
    document.getElementById("year_span").innerHTML = year_holder.getFullYear();

    const currentAmount = await dbank.checkBalance(); 
    document.getElementById('value').innerText = currentAmount.toFixed(2);
};

function statusFlash () {
    document.getElementById('update_status').style.visibility = 'visible';
    setTimeout(() => {
        document.getElementById('update_status').style.visibility = 'hidden';
    }, 2000);    
}

document.getElementById('transaction').addEventListener('submit', async (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    e.target.querySelector('#submit-btn').setAttribute('disabled', 'true');

    const input_amount = parseFloat(document.getElementById('input-amount').value);
    const withdrawal_amount = parseFloat(document.getElementById('withdrawal-amount').value);

    if (input_amount && input_amount > 0) {
        statusFlash();
        await dbank.topUp(input_amount);
    }
    
    if (withdrawal_amount && withdrawal_amount > 0) {
        statusFlash();
        await dbank.withdrawal(withdrawal_amount); 
    }

    await dbank.compound();

    document.getElementById('value').innerText = (await dbank.checkBalance()).toFixed(2);
    
    e.target.querySelector('#submit-btn').removeAttribute('disabled');
    document.getElementById('input-amount').value = '';
    document.getElementById('withdrawal-amount').value = '';
});