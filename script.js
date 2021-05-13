const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click',function(event){
const submitArea = document.getElementById('loginArea')
// console.log(submitArea
// মজার কথা হচ্ছে মেবি ক্লাসের উপর মাল্টিপল স্টাইল করা যায় না । id তে style করা যায়। কারন class  এ করলে অনেক গুলোতে effect হতে পারে তাই 
submitArea.style.display = 'none';
const transactionpage = document.getElementById('transactionArea')
transactionpage.style.display = 'block'
})
// deposit area
const depositbtn = document.getElementById('depositbtn');
depositbtn.addEventListener('click', function(){
    // console.log('clicked')
    const depositAmount = document.getElementById('deposit').value 
    const realDepositAmount = parseFloat(depositAmount)
    // const currentDeposit = document.getElementById('currentDeposit').innerText

    // const realCurrentDeposit = parseFloat(currentDeposit)
    // const total = realCurrentDeposit + realDepositAmount
    // document.getElementById('currentDeposit').innerText = total
   
    // console.log(total)
    document.getElementById('deposit').value = ''
    balanceUpdate('cunnrentBalance',realDepositAmount)
    balanceUpdate('currentDeposit',realDepositAmount)

    // const currentBalance = document.getElementById('cunnrentBalance').innerText
    // const realVaue = parseFloat(currentBalance)
    // const realCurrentBalance = realVaue + realDepositAmount;
    // document.getElementById('cunnrentBalance').innerText = realCurrentBalance
    
})

// withdraw area
const withdrawbtn = document.getElementById('withdrawbtn')
withdrawbtn.addEventListener('click',function(){
    const current = document.getElementById('newWithdraw').value
    const realVaue = parseFloat(current)
    
    // const currentwithdraw = document.getElementById('withdraw').innerText
    // const realCurrentWithdraw = parseFloat(currentwithdraw)
    
    // const total = realVaue + realCurrentWithdraw
    // document.getElementById('withdraw').innerText = total
    // console.log(total)
    balanceUpdate('withdraw',realVaue)
    document.getElementById('newWithdraw').value = ''


})
function balanceUpdate(id,addedBalace){
    const current = document.getElementById(id).innerText
    const realVaue = parseFloat(current)
    const total = realVaue + addedBalace   
    document.getElementById(id).innerText = total
}