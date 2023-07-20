#/request 체크
async def request_check(update: Update, context: ContextTypes.DEFAULT_TYPE):
    id = update.effective_chat.id
    balance = round(w3.from_wei(w3.eth.get_balance(relayerAddress),'ether'),2)

    bot.send_message(id, createText(balance));
        
def createText(balance):
    if execute_round == None :
        return unbonding_check(balance)
    
    return round_check()


# unbonding 체크
def unbonding_check(balance):    
    if balance < 1000 :
        return "😂 출금예약이 필요합니다."
    
    return f"✅ 현재 잔고는 정상입니다. Balance:{balance} BFC"
    
    
# round 체크    
def round_check():
    if current_round >= execute_round :
        return "✅ Unstaking이 가능합니다."
    
    return f"👍 출금이 진행 중입니다. 남은 라운드는 {remaining_round} Round 입니다."


# Balance 알림
async def balance_alert():
    balance = round(w3.from_wei(w3.eth.get_balance(relayerAddress),'ether'),2)
    
    if execute_round == None and balance < 1000 :
        await bot.send_message(group_id,text= f"❗Relayer 충전이 필요합니다.\n \n Ballance : {balance} BFC")
    else :
        pass

    # /balance 체크
async def balance_check(update: Update, context: ContextTypes.DEFAULT_TYPE):
    id = update.effective_chat.id
    balance = round(w3.from_wei(w3.eth.get_balance(relayerAddress),'ether'),2)

    if balance < 1000 :
        await bot.send_message(id,text= f"❗Relayer 충전이 필요합니다.\n \n Ballance : {balance} BFC")
    else :
        await bot.send_message(id,text = f"✅ Balance : {balance} BFC")